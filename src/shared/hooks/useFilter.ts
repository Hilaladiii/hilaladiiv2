import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function useFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeFilters = searchParams.getAll("filter");

  const isChecked = (name: string) =>
    searchParams.getAll("filter").includes(name);

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

  return { handleFilter, isChecked, activeFilters };
}
