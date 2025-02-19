import { cn } from "@/shared/utils/cn";
import { IconType } from "react-icons/lib";

interface IFilter {
  isChecked: boolean;
  index: number;
  handleFilter: (name: string, checked: boolean) => void;
  icon: IconType;
  name: string;
}

export default function Filter({
  isChecked,
  index,
  handleFilter,
  icon: Icon,
  name,
}: IFilter) {
  return (
    <div
      className={cn(
        "lg:px-5 flex items-start gap-3 text-secondary6 hover:text-white/70",
        isChecked && "text-white"
      )}
    >
      <input
        type="checkbox"
        id={`stack${index}`}
        className="size-4.5 appearance-none border border-lines rounded-xs checked:bg-secondary6 checked:border-transparent checked:before:content-['✔'] checked:before:text-white checked:before:block checked:before:text-center checked:before:text-xs"
        checked={isChecked}
        onChange={(e) => handleFilter(name, e.target.checked)}
      />
      <label
        htmlFor={`stack${index}`}
        className="cursor-pointer text-sm inline-flex gap-2"
      >
        <Icon className="text-lg" />
        <span>{name}</span>
      </label>
    </div>
  );
}
