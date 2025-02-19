import { cn } from "@/shared/utils/cn";
import { SiTypescript } from "react-icons/si";

interface IFile {
  name: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function File({ name, onClick, isActive = false }: IFile) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "animate-showUp inline-flex items-center gap-2 text-secondary6/40 hover:text-secondary6 px-5 py-1 cursor-pointer",
        isActive && "text-white"
      )}
    >
      <SiTypescript />
      <span className="text-sm lg:text-base">{name}</span>
    </button>
  );
}
