import SideBarProject from "@/app/projects/_components/SidebarProject";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full relative">
      <SideBarProject />
      <div className="lg:ml-72 h-full">{children}</div>
    </div>
  );
}
