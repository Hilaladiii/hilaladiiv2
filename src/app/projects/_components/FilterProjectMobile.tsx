"use client";

import { FILTER_PROJECT_ITEM } from "@/shared/constant/filter-project";
import { useFilter } from "@/shared/hooks/useFilter";
import Filter from "../../../shared/components/elements/Filter";
import Accordion from "../../../shared/components/fragments/Accordion";
import { useState } from "react";

export default function FilterProjectMobile() {
  const { handleFilter, isChecked, activeFilters } = useFilter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <h1 className="text-white text-base mb-5">_projects</h1>
      <div className="flex flex-col gap-4 animate-showUp">
        <Accordion
          title="projects"
          content={
            <div className="flex flex-col gap-4">
              {FILTER_PROJECT_ITEM.map((item, index) => {
                return (
                  <Filter
                    key={index}
                    isChecked={isChecked(item.name)}
                    index={index}
                    handleFilter={handleFilter}
                    icon={item.icon}
                    name={item.name}
                  />
                );
              })}
            </div>
          }
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <div className="mt-5">
        <span className="text-white font-semibold">Project</span>
        <span className="text-secondary6 mx-2">/</span>
        {activeFilters.length > 0 ? (
          <span className="text-secondary6">{activeFilters.join("; ")}</span>
        ) : (
          <span className="text-secondary6">all</span>
        )}
      </div>
    </div>
  );
}
