import TabProject from "@/components/fragments/TabProject";
import { Suspense } from "react";

export default function ProjectPage() {
  return (
    <div className="h-full w-full">
      <Suspense>
        <TabProject />
      </Suspense>
    </div>
  );
}
