import prisma from "@/shared/libs/prisma/prisma";
import { TProjectQueryParam } from "../validations/project.validation";

export const getAllProject = async (query: TProjectQueryParam) => {
  const hasValidQuery = query && Array.isArray(query) && query.length > 0;
  const projects = await prisma.project.findMany({
    where: hasValidQuery
      ? {
          techstacks: {
            some: {
              techstack: {
                name: {
                  in: query,
                },
              },
            },
          },
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
