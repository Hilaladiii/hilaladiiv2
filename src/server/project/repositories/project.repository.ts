import prisma from "@/shared/libs/prisma/prisma";
import { TProjectQueryParam } from "../validations/project.validation";

export const getAllProject = async (query: TProjectQueryParam) => {
  const filterArray = query ? (Array.isArray(query) ? query : [query]) : [];

  const projects = await prisma.project.findMany({
    where:
      filterArray.length > 0
        ? {
            AND: filterArray.map((techName) => ({
              techstacks: {
                some: {
                  techstack: {
                    name: techName,
                  },
                },
              },
            })),
          }
        : {},
    include: {
      techstacks: {
        select: {
          techstack: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return projects.map((project) => ({
    ...project,
    techstacks: project.techstacks.map((tech) => tech.techstack.name),
  }));
};
