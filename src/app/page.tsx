"use client";

import Blurry from "@/shared/components/elements/Blurry";
import Dot from "@/shared/components/elements/Dot";
import DraggableTechIcon from "@/shared/components/elements/DragableTechIcon";
import Typewriter from "@/shared/components/fragments/Typewriter";
import { TECHICON } from "@/shared/constant/tech-stack";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const texts = ["Fullstack Developer", "Chill Guy :)"];

export default function Home() {
  const constrainRef = useRef(null);
  return (
    <div className="flex items-center justify-center h-screen lg:h-full gap-32 overflow-hidden">
      <div className="text-textwhite max-sm:px-4 max-sm:mt-10">
        <div className="text-body ">Hi all, I am</div>
        <div className="text-6xl lg:text-headline my-1.5">Abdullah Hilal</div>
        <Typewriter texts={texts} />
        <div className="flex flex-col mt-12  lg:mt-16">
          <div>{"// Lorem ipsum dolor sit amet!"}</div>
          <div>
            <span className="text-secondaryE">const</span>{" "}
            <span className="text-accentD">githubLink =</span>{" "}
            <a
              target="_blank"
              href="https://github.com/Hilaladiii"
              className="text-accent7 underline"
            >
              &quot;https://github.com/Hilaladiii&quot;
            </a>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden animate-fadeUp relative flex gap-5 w-[800px] h-[490px] p-10 [background:linear-gradient(to_bottom,rgba(35,123,109,1),rgba(57,217,173,0.13))] rounded-lg border border-black">
        <Dot className="top-3 left-3" />
        <Dot className="top-3 right-3" />
        <Dot className="bottom-3 left-3" />
        <Dot className="bottom-3 right-3" />
        <motion.div
          ref={constrainRef}
          className="relative bg-[#011627] w-[500px] h-full rounded-sm"
        >
          {TECHICON.map((tech, index) => (
            <DraggableTechIcon
              key={index}
              icon={tech.icon}
              label={tech.label}
              top={tech.top}
              left={tech.left}
              constrainRef={constrainRef}
            />
          ))}
        </motion.div>
        <div className="flex flex-col justify-between items-end">
          <div className="bg-white/20 w-60 h-fit p-3 rounded-md text-lines font-medium">
            {"/* My Tech Stack to build web application */"}
          </div>
          <div className="w-60 flex flex-wrap gap-3 h-full  my-5">
            {[...new Array(50)].map((_, index) => (
              <div
                key={index}
                className="size-3 rounded-full [background:radial-gradient(circle_at_center,#196C6A_10%,transparent_100%)] border border-white/10"
              />
            ))}
          </div>
          <Link
            href="/about"
            className="text-white border border-white w-fit px-3 py-1 rounded-sm hover:bg-white/20 transition"
          >
            next
          </Link>
        </div>
      </div>
      <Blurry className="right-[6%] bottom-[9%] [background:radial-gradient(circle_at_center,#4D5BCE_10%,transparent_100%)]" />
      <Blurry className="right-[30%] bottom-[22%] [background:radial-gradient(circle_at_center,#43D9AD_10%,transparent_100%)]" />
    </div>
  );
}
