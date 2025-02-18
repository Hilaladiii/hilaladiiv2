"use client";

import { FILTER_PROJECT_ITEM } from "@/constant/filter-project";
import { cn } from "@/utils/cn";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function FilterProject() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (name: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      params.append("filter", name);
    } else {
      const values = params.getAll("filter").filter((value) => value !== name);
      params.delete("filter");
      values.forEach((value) => params.append("filter", value));
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-5 animate-showUp">
      {FILTER_PROJECT_ITEM.map((item, index) => {
        const isChecked = searchParams.getAll("filter").includes(item.name);
        return (
          <div
            className={cn(
              "px-5 flex items-start gap-3 text-secondary6 hover:text-white/70",
              isChecked && "text-white"
            )}
            key={index}
          >
            <input
              type="checkbox"
              id={`stack${index}`}
              className="size-4.5 appearance-none border border-lines rounded-xs checked:bg-secondary6 checked:border-transparent checked:before:content-['✔'] checked:before:text-white checked:before:block checked:before:text-center checked:before:text-xs"
              checked={isChecked}
              onChange={(e) => handleFilter(item.name, e.target.checked)}
            />
            <label
              htmlFor={`stack${index}`}
              className="cursor-pointer text-sm inline-flex gap-2"
            >
              {item.icon}
              <span>{item.name}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
}
