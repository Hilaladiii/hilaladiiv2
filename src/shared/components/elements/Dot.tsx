import { IoIosClose } from "react-icons/io";

export default function Dot({ className }: { className: string }) {
  return (
    <div
      className={`absolute size-5 rounded-full [background:radial-gradient(circle_at_center,#196C6A_10%,transparent_100%)] border border-white/20 flex items-center justify-center ${className}`}
    >
      <IoIosClose className="text-black/50" size={20} />
    </div>
  );
}
