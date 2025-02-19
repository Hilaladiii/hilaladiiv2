import dynamic from "next/dynamic";

const HeaderDynamic = dynamic(() => import("../fragments/Header"));
const FooterDynamic = dynamic(() => import("../fragments/Footer"));

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-primary7 border border-lines rounded-md w-full h-full max-sm:m-3">
      <HeaderDynamic />
      {children}
      <FooterDynamic />
    </div>
  );
}
