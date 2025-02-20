"use client";

import { motion } from "motion/react";
import { IconType } from "react-icons/lib";

interface DraggableTechIconProps {
  icon: IconType;
  label: string;
  top: string;
  left: string;
  constrainRef: React.RefObject<null>;
}

export default function DraggableTechIcon({
  icon: Icon,
  label,
  top,
  left,
  constrainRef,
}: DraggableTechIconProps) {
  return (
    <motion.div
      className="cursor-grab inline-flex gap-2 items-center px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
      drag
      style={{ top, left }}
      dragConstraints={constrainRef}
    >
      <span>{<Icon />}</span>
      <span className="text-xs font-medium text-gray-950">{label}</span>
    </motion.div>
  );
}
