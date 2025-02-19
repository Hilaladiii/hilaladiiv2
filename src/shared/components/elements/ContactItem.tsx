import { IconType } from "react-icons/lib";

interface IContactItem {
  icon: IconType;
  content: string;
  href?: string;
}
export default function ContactItem({ icon, href, content }: IContactItem) {
  const Icon = icon;
  return (
    <a
      href={href}
      target="_blank"
      className="text-sm inline-flex items-start gap-2"
    >
      <Icon size={18} />
      <span>{content}</span>
    </a>
  );
}
