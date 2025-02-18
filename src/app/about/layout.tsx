import SideBarAbout from "@/components/fragments/SidebarAbout";
import ListCodeShowcase from "./_components/ListCodeShowcase";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen relative">
      <SideBarAbout />
      <div className="ml-72 h-full flex">
        {children}
        <ListCodeShowcase />
      </div>
    </div>
  );
}
