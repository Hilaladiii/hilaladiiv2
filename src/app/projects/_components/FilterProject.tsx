"use client";

import { FILTER_PROJECT_ITEM } from "@/shared/constant/filter-project";
import { useFilter } from "@/shared/hooks/useFilter";
import Filter from "../../../shared/components/elements/Filter";

export default function FilterProject() {
  const { handleFilter, isChecked } = useFilter();

  return (
    <div className="flex flex-col gap-4 mt-5 animate-showUp">
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
  );
}
