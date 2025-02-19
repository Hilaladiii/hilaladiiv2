"use client";

import Image from "next/image";
import Profile from "@/assets/profile.jpeg";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useMobile } from "@/shared/hooks/useMobile";

interface ICardCodeShowcase {
  content: string;
  animationDuration: number;
}

export default function CardCodeShowcase({
  content,
  animationDuration,
}: ICardCodeShowcase) {
  const { isMobile } = useMobile();
  return (
    <div
      className="animate-fadeDown opacity-0"
      style={{
        animationDelay: `${animationDuration}s`,
        animationFillMode: "forwards",
      }}
    >
      <div className="flex gap-3 mb-2">
        <Image
          src={Profile}
          alt="profile image"
          className="size-9 rounded-full"
        />
        <div>
          <p className="font-bold text-purple ">@Hilaladiii</p>
          <p className="text-secondary6 text-xs">Created 1 month ago</p>
        </div>
      </div>
      <div className="bg-primary1 border border-lines px-5 py-3 rounded-lg">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            background: "transparent",
            fontSize: isMobile ? "12px" : "16px",
            whiteSpace: "pre-wrap",
            overflowX: "auto",
            maxWidth: "100%",
          }}
          wrapLongLines
          className="rounded-md bg-transparent animate-showUp"
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
