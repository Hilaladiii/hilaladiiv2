"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export default function Accordion({
  title,
  content,
  isOpen,
  onClick,
}: AccordionProps) {
  return (
    <div className="lg:border-b border-lines overflow-hidden animate-showUp">
      <button
        className="bg-white/10 lg:bg-transparent w-full flex gap-2 items-center px-3 py-1 rounded-xs  lg:px-4 lg:py-3  text-white text-sm"
        onClick={onClick}
      >
        <MdOutlineArrowDropDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
        {title}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden "
      >
        <div className="border-t border-lines px-4 py-3 text-secondary6">
          {content}
        </div>
      </motion.div>
    </div>
  );
}
