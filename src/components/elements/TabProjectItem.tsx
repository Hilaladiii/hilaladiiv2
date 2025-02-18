import { IoIosClose } from "react-icons/io";

interface ITabProjectItem {
  name: string;
  onClose?: () => void;
}

export default function TabProjectItem({ name, onClose }: ITabProjectItem) {
  return (
    <div className="inline-flex gap-2 items-end border-r border-lines py-[7px] px-3">
      <span className="text-sm">{name}</span>{" "}
      <IoIosClose size={22} className="cursor-pointer" onClick={onClose} />
    </div>
  );
}
