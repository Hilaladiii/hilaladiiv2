"use client";
import File from "@/components/elements/File";
import { useAboutContent } from "@/hooks/useAboutContent";
import { useStore } from "@/stores/store";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function AboutPage() {
  const content = useAboutContent();
  const { activeSubSection } = useStore();
  return (
    <div className="w-1/2 border-r border-lines h-full">
      <div className="border-b border-lines">
        <div className="border-r border-lines w-fit px-5 text-secondary6">
          <File name={`${activeSubSection}.ts`} isActive />
        </div>
      </div>
      <div className="p-2">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            background: "transparent",
            fontSize: "16px",
          }}
          showInlineLineNumbers
          showLineNumbers
          lineNumberStyle={{
            color: "#6272a4",
            marginRight: "8px",
            fontSize: "12px",
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
