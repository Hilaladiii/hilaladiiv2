import SideBarAbout from "@/components/fragments/SidebarAbout";
import ListCodeShowcase from "./_components/ListCodeShowcase";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative">
      <SideBarAbout />
      <div className="lg:ml-72 flex flex-col lg:flex-row">
        {children}
        <ListCodeShowcase />
      </div>
    </div>
  );
}
