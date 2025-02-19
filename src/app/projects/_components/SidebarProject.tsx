import { MdOutlineArrowDropDown } from "react-icons/md";
import FilterProject from "./FilterProject";
import { Suspense } from "react";

export default function SideBarProject() {
  return (
    <div className="max-sm:hidden w-[289px] border-r border-lines absolute h-full left-0 flex flex-col">
      <div className="animate-showUp w-full inline-flex gap-1 items-center border-b border-lines px-5 text-start py-1.5 text-white">
        <MdOutlineArrowDropDown />
        Projects
      </div>
      <Suspense>
        <FilterProject />
      </Suspense>
    </div>
  );
}
