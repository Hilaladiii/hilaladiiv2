import CardCodeShowcase from "@/components/fragments/CardCodeShowcase";
import { CODE_SHOWCASES } from "@/constant/code-showcase";

export default function ListCodeShowcase() {
  return (
    <div className="w-full p-2 lg:w-1/2 lg:h-full flex flex-col ">
      <h1 className="text-sm lg:text-base text-secondary6 mb-5 ">
        {"// Code snippet showcase:"}
      </h1>
      <div className="flex flex-col gap-5 h-full lg:h-[600px] overflow-y-scroll custom-scroll pr-2">
        {CODE_SHOWCASES.map((showcase, index) => (
          <CardCodeShowcase
            content={showcase}
            key={index}
            animationDuration={index * 0.5}
          />
        ))}
      </div>
    </div>
  );
}
