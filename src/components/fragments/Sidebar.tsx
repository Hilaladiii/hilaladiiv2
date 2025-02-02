"use client";

import { PiTerminalWindowFill } from "react-icons/pi";
import { RiUser4Fill, RiGamepadFill } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";
import File from "../elements/File";

export default function SideBar() {
  return (
    <div className="border-r border-lines absolute h-full left-0 flex">
      <div className="animate-showUp space-y-5 h-full border-r border-lines p-5">
        <PiTerminalWindowFill
          className="text-secondary6/40 hover:text-secondary6 cursor-pointer transition"
          size={25}
        />
        <RiUser4Fill
          className="text-secondary6/40 hover:text-secondary6 cursor-pointer transition"
          size={25}
        />
        <RiGamepadFill
          className="text-secondary6/40 hover:text-secondary6 cursor-pointer transition"
          size={25}
        />
      </div>
      <div className="w-[222px] text-white text-codesnippet flex flex-col gap-1">
        <div className="animate-showUp w-full inline-flex gap-1 items-center border-b border-lines px-5 py-1.5">
          <MdOutlineArrowDropDown size={20} />
          <span>personal-info</span>
        </div>
        <File name="bio.ts" />
        <File name="interest.ts" />
        <File name="education.ts" />
        <File name="contacts.ts" />
      </div>
    </div>
  );
}
