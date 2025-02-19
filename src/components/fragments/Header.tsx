"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <div className="w-full flex lg:hidden">
        <Link href="/" className="border-r border-lines py-1.5 pl-5 pr-40">
          Hilaladiii
        </Link>
      </div>
    </header>
  );
}
