import { cn } from "@/shared/utils/cn";
import Image from "next/image";

interface ICardProject {
  index: number;
  name: string;
  imageUrl: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
}

export default function CardProject({
  index,
  name,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
}: ICardProject) {
  return (
    <div>
      <h1 className="mb-2">
        <span className="text-purple font-bold">Project {index}</span>
        <span className="text-secondary6 text-sm">{` // _${name}`}</span>
      </h1>
      <div className="max-w-xs h-72 border border-lines rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
          className="h-1/2 w-full object-cover border-b border-lines"
        />
        <div className="p-5 h-1/2 flex flex-col justify-between bg-primary1">
          <p className="text-secondary6 text-xs">{description}</p>
          <div className="flex gap-3">
            <a
              href={demoUrl}
              target="_blank"
              className={cn(
                "text-sm text-white px-2 py-1 rounded-md bg-[#1C2B3A]",
                !demoUrl && "hidden"
              )}
            >
              view-demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
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
