import SideBarAbout from "@/components/fragments/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen relative">
      <SideBarAbout />
      <div className="ml-72 h-full">{children}</div>
    </div>
  );
}
