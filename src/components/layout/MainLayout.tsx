import dynamic from "next/dynamic";
import Footer from "../fragments/Footer";

const HeaderDynamic = dynamic(() => import("../fragments/Header"));

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-primary7 border border-lines rounded-md w-full h-full">
      <HeaderDynamic />
      {children}
      <Footer />
    </div>
  );
}
