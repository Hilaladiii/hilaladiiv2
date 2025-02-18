"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TabProjectItem from "../elements/TabProjectItem";

export default function TabProject() {
  const searchParams = useSearchParams();
  const dataFilters = searchParams.getAll("filter");
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClose = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("filter", value);

    replace(`${pathname}?${params}`, { scroll: false });
  };

  return (
    <div className="text-secondary6 w-full border-b border-lines">
      {dataFilters.length > 0 ? (
        dataFilters.map((data, index) => (
          <TabProjectItem
            name={data}
            key={index}
            onClose={() => handleClose(data)}
          />
        ))
      ) : (
        <TabProjectItem name="all" />
      )}
    </div>
  );
}
