import SideBarProject from "@/components/fragments/SidebarProject";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen relative">
      <SideBarProject />
      <div className="ml-72 h-full flex">{children}</div>
    </div>
  );
}
