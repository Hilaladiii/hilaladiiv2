"use client";

import CardProject from "@/app/projects/_components/CardProject";
import FilterProjectMobile from "@/app/projects/_components/FilterProjectMobile";
import TabProject from "@/app/projects/_components/TabProject";
import { Suspense } from "react";

export default function ProjectPage() {
  return (
    <div className="h-full w-full">
      <Suspense>
        <TabProject />
      </Suspense>
      <div className="lg:mt-10 ">
        <Suspense>
          <FilterProjectMobile />
        </Suspense>
        <div className="max-sm:my-3 p-3 lg:px-5  w-full flex flex-wrap items-center justify-center gap-4 overflow-y-auto lg:h-[550px] custom-scroll">
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
          <CardProject></CardProject>
        </div>
        {/* <EmptyStateProject /> */}
      </div>
    </div>
  );
}
