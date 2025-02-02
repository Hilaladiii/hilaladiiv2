import { SiTypescript } from "react-icons/si";
export default function File({ name }: { name: string }) {
  return (
    <div className="animate-showUp inline-flex items-center gap-2 text-secondary6/40 hover:text-secondary6 px-5 py-1 cursor-pointer">
      <SiTypescript />
      <span>{name}</span>
    </div>
  );
}
