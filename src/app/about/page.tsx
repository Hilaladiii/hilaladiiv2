"use client";
import File from "@/components/elements/File";
import { useAboutContent } from "@/hooks/useAboutContent";
import { useMobile } from "@/hooks/useMobile";
import { useStore } from "@/stores/store";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import AccordionAboutMobile from "./_components/AccordionAboutMobile";

export default function AboutPage() {
  const content = useAboutContent();
  const { isMobile } = useMobile();
  const { activeSubSection } = useStore();
  return (
    <div className="w-full lg:w-1/2 border-r border-lines">
      {/* SECTION ABOUT DEKSTOP */}
      <div className="max-sm:hidden border-b border-lines">
        <div className="border-r border-lines w-fit px-5 text-secondary6">
          <File name={`${activeSubSection}.ts`} isActive />
        </div>
      </div>

      {/* SECTION ACCORDION ABOUT MOBILE */}
      <AccordionAboutMobile />

      {/* SYNTAX HIGHLIGHTER */}
      <div className="p-2">
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            background: "transparent",
            fontSize: isMobile ? "12px" : "16px",
          }}
          showInlineLineNumbers
          showLineNumbers
          lineNumberStyle={{
            color: "#6272a4",
            marginRight: "8px",
            fontSize: isMobile ? "8px" : "12px",
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
