"use client";
import File from "@/components/elements/File";
import { BIO } from "@/constant/personal-info";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function AboutPage() {
  return (
    <div className="w-1/2 border-r border-lines h-full">
      <div className="border-b border-lines">
        <div className="border-r border-lines w-fit px-5 text-secondary6">
          <File name="bio.ts" />
        </div>
      </div>
      <div className="p-4">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            background: "transparent",
            fontSize: "14px",
            padding: "10px",
            borderRadius: "8px",
          }}
          showInlineLineNumbers
          showLineNumbers
          lineNumberStyle={{
            color: "#6272a4",
            marginRight: "16px",
            fontSize: "12px",
          }}
          className="rounded-md bg-transparent animate-showUp"
        >
          {BIO}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
