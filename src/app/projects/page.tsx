import CardProject from "@/components/fragments/CardProject";
import EmptyStateProject from "@/components/fragments/EmptyStateProject";
import TabProject from "@/components/fragments/TabProject";
import { Suspense } from "react";

export default function ProjectPage() {
  return (
    <div className="h-full w-full">
      <Suspense>
        <TabProject />
      </Suspense>
      <div className="mt-10 px-5">
        <CardProject></CardProject>
        <EmptyStateProject />
      </div>
    </div>
  );
}
