"use client";

import { useStore } from "@/stores/store";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeContact() {
  const { message } = useStore();
  const content = `const button = document.querySelector ( '#sendBtn' );

const message = {
   name : ${message.name} ,
   email : ${message.email} ,
   message : ${message.message} ,
   date: ${new Date().toLocaleDateString()}
}


button.addEventListener ( 'click' ), () => {
  form.send ( message );
})`;

  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          background: "transparent",
          fontSize: "16px",
          overflowX: "hidden",
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
        }}
        showInlineLineNumbers
        showLineNumbers
        lineNumberStyle={{
          color: "#6272a4",
          marginRight: "8px",
          fontSize: "12px",
        }}
        wrapLongLines
        wrapLines
        className="rounded-md bg-transparent animate-showUp"
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}
