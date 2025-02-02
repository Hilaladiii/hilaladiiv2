"use client";

import Dot from "@/components/elements/Dot";
import Typewriter from "@/components/fragments/Typewriter";
import { TECHICON } from "@/constant";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const texts = ["Frontend Developer", "Chill Guy :)"];

export default function Home() {
  const constrainRef = useRef(null);
  return (
    <div className="flex items-center justify-center h-full gap-32 overflow-hidden">
      <div className="text-textwhite">
        <div className="text-body">Hi all, I am</div>
        <div className="text-headline">Abdullah Hilal</div>
        <Typewriter texts={texts} />
        <div className="flex flex-col  mt-16">
          <div>{"// Lorem ipsum dolor sit amet!"}</div>
          <div>
            <span className="text-secondaryE">const</span>{" "}
            <span className="text-accentD">githubLink =</span>{" "}
            <a
              href="https://github.com/Hilaladiii"
              className="text-accent7 underline"
            >
              &quot;https://github.com/Hilaladiii&quot;
            </a>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 50,
        }}
        animate={{
          opacity: 1,
          translateY: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative flex gap-5 w-[800px] h-[490px] p-10 [background:linear-gradient(to_bottom,rgba(35,123,109,1),rgba(57,217,173,0.13))] rounded-lg border border-black"
      >
        <Dot className="top-3 left-3" />
        <Dot className="top-3 right-3" />
        <Dot className="bottom-3 left-3" />
        <Dot className="bottom-3 right-3" />
        <motion.div
          ref={constrainRef}
          className="relative bg-[#011627] w-[500px] h-full rounded-sm"
        >
          {TECHICON.map((tech, index) => (
            <motion.div
              key={index}
              className="cursor-grab inline-flex gap-2 items-center px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
              drag
              style={{
                top: tech.top,
                left: tech.left,
              }}
              dragConstraints={constrainRef}
            >
              <span>{tech.icon}</span>
              <span className="text-xs font-medium text-gray-950">
                {tech.label}
              </span>
            </motion.div>
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
      </motion.div>

      <motion.div
        id="blurry-blue"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.02,
          duration: 0.5,
        }}
        className="size-[500px] absolute right-[6%] bottom-[9%] rounded-br-[50%] rotate-12 blur-3xl [background:radial-gradient(circle_at_center,#4D5BCE_10%,transparent_100%)] opacity-50 pointer-events-none"
      />
      <motion.div
        id="blurry-green"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.02,
          duration: 0.5,
        }}
        className="size-[500px] absolute right-[30%] bottom-[22%] rounded-br-[50%] rotate-12 blur-3xl [background:radial-gradient(circle_at_center,#43D9AD_10%,transparent_100%)] opacity-40 pointer-events-none"
      />
    </div>
  );
}
