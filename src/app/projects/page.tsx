"use client";

import CardProject from "@/app/projects/_components/CardProject";
import FilterProjectMobile from "@/app/projects/_components/FilterProjectMobile";
import TabProject from "@/app/projects/_components/TabProject";
import { trpc } from "@/shared/libs/trpc";
import { Suspense, use } from "react";
import EmptyStateProject from "./_components/EmptyStateProject";
import CardProjectSkeleton from "./_components/SkeletonCardProject";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default function ProjectPage(props: { searchParams: SearchParams }) {
  const params = use(props.searchParams);

  const { data: projects, isLoading } = trpc.project.getAllProject.useQuery(
    params.filter,
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  const showProjects = !isLoading && projects && projects.length > 0;

  return (
    <div className="h-full w-full">
      <Suspense>
        <TabProject />
      </Suspense>
      <div className="lg:mt-10">
        <Suspense>
          <FilterProjectMobile />
        </Suspense>
        <div className="max-sm:my-3 p-3 lg:px-5 w-full h-full flex flex-wrap items-center justify-center gap-4 overflow-y-auto lg:h-[550px] custom-scroll">
          {isLoading ? (
            <>
              {[...Array(6)].map((_, index) => (
                <CardProjectSkeleton key={index} />
              ))}
            </>
          ) : showProjects ? (
            projects.map((project, index) => (
              <CardProject
                key={project.id || index}
                index={index + 1}
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))
          ) : (
            <EmptyStateProject />
          )}
        </div>
      </div>
    </div>
  );
}
