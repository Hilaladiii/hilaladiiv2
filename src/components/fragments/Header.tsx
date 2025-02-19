"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

const NAVIGATIONS = [
  {
    label: "_hello",
    href: "/",
  },
  {
    label: "_about-me",
    href: "/about",
  },
  {
    label: "_projects",
    href: "/projects",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  return (
    <header className="text-label flex justify-between text-secondary6 border-b border-lines ">
      {/* DEKSTOP */}
      <div className="max-sm:hidden w-full flex justify-between">
        <div className="flex">
          <Link href="/" className="border-r border-lines py-3 pl-8 pr-40">
            Hilaladiii
          </Link>
          <div className="flex items-center">
            {NAVIGATIONS.map((navigation, index) => (
              <Link
                href={navigation.href}
                key={index}
                className={cn(
                  "flex items-center gap-3 px-8 py-3 border-r border-lines hover:bg-white/10 hover:text-white transition",
                  pathname == navigation.href &&
                    "border-b border-b-accentF text-white"
                )}
              >
                {navigation.label}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href="/contact"
          className={cn(
            "flex gap-3 items-center px-8 py-3 border-l border-lines hover:bg-white/10 hover:text-white transition",
            pathname == "/contact" && "border-b border-b-accentF text-white"
          )}
        >
          _contact-me
        </Link>
      </div>

      {/* MOBILE */}
      <div className="w-full flex sm:hidden items-center">
        <Link href="/" className="border-r border-lines py-1.5 pl-5 pr-48">
          Hilaladiii
        </Link>
        <button onClick={() => setShow(!show)} className="p-2 mx-auto">
          {show ? <IoMdClose size={25} /> : <IoIosMenu size={25} />}
        </button>
      </div>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[53px] w-full h-full bg-white/10 backdrop-blur-xl text-white border-t border-lines shadow-lg z-50"
        >
          <nav className="flex flex-col">
            {NAVIGATIONS.map((navigation, index) => (
              <Link
                key={index}
                href={navigation.href}
                className={cn(
                  "px-6 py-3 hover:bg-white/10 transition",
                  pathname == navigation.href && "bg-white/10"
                )}
                onClick={() => setShow(false)}
              >
                {navigation.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "px-6 py-3 hover:bg-white/10 transition",
                pathname == "/contact" && "bg-white/10"
              )}
              onClick={() => setShow(false)}
            >
              _contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
