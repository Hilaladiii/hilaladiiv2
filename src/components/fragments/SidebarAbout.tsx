"use client";

import { PiTerminalWindowFill } from "react-icons/pi";
import { RiUser4Fill, RiGamepadFill } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";
import File from "../elements/File";
import { useStore } from "@/stores/store";
import { cn } from "@/utils/cn";
import { Subsection } from "@/stores/slices/section-slice";
import { SUB_SECTION_FILES } from "@/constant/about";

export default function SideBarAbout() {
  const {
    setActiveSection,
    setActiveSubSection,
    activeSubSection,
    activeSection,
  } = useStore();

  return (
    <div className="max-sm:hidden border-r border-lines absolute h-full left-0 flex">
      <div className="animate-showUp flex flex-col gap-5 h-full border-r border-lines p-5">
        <button onClick={() => setActiveSection("professional-info")}>
          <label htmlFor="professional-info" className="sr-only">
            professional-info
          </label>
          <PiTerminalWindowFill
            id="professional-info"
            className={cn(
              "text-secondary6/40 hover:text-secondary6 cursor-pointer transition",
              activeSection == "professional-info" && "text-secondary6"
            )}
            size={25}
          />
        </button>
        <button onClick={() => setActiveSection("personal-info")}>
          <label htmlFor="personal-info" className="sr-only">
            personal-info
          </label>
          <RiUser4Fill
            id="personal-info"
            className={cn(
              "text-secondary6/40 hover:text-secondary6 cursor-pointer transition",
              activeSection == "personal-info" && "text-secondary6"
            )}
            size={25}
          />
        </button>
        <button onClick={() => setActiveSection("hobbies-info")}>
          <label htmlFor="hobbies-info" className="sr-only">
            hobbies-info
          </label>
          <RiGamepadFill
            id="hobbies-info"
            className={cn(
              "text-secondary6/40 hover:text-secondary6 cursor-pointer transition",
              activeSection == "hobbies-info" && "text-secondary6"
            )}
            size={25}
          />
        </button>
      </div>
      <div className="w-[222px] text-white text-codesnippet flex flex-col gap-1">
        <div className="animate-showUp w-full inline-flex gap-1 items-center border-b border-lines px-5 py-1.5">
          <MdOutlineArrowDropDown size={20} />
          <span>{activeSection}</span>
        </div>
        {SUB_SECTION_FILES[activeSection]?.map(({ name, key }) => (
          <File
            key={key}
            name={name}
            onClick={() =>
              setActiveSubSection(key as Subsection[typeof activeSection])
            }
            isActive={activeSubSection == key}
          />
        ))}
      </div>
    </div>
  );
}
