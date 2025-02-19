import Image from "next/image";
import Project1 from "@/assets/project1.jpg";

export default function CardProject() {
  return (
    <div>
      <h1 className="mb-2">
        <span className="text-purple font-bold">Project 1</span>
        <span className="text-secondary6 text-sm">{` // _Shortly`}</span>
      </h1>
      <div className="max-w-xs h-72 border border-lines rounded-xl overflow-hidden">
        <Image
          src={Project1}
          alt="project"
          className="h-1/2 w-full object-cover border-b border-lines"
        />
        <div className="p-5 h-1/2 flex flex-col justify-between bg-primary1">
          <p className="text-secondary6 text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            natus.
          </p>
          <div className="flex gap-3">
            <a
              href=""
              className="text-sm text-white px-2 py-1 rounded-md bg-[#1C2B3A]"
            >
              view-demo
            </a>
            <a
              href=""
              className="text-sm text-white px-2 py-1 rounded-md bg-[#1C2B3A]"
            >
              view-github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
