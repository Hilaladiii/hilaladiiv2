import CodeContact from "@/components/fragments/CodeContact";
import ContactInfo from "@/components/fragments/ContactInfo";
import FormContact from "@/components/fragments/FormContact";

export default function ContactPage() {
  return (
    <div className="w-full h-full flex">
      <ContactInfo />
      <FormContact />
      <CodeContact />
    </div>
  );
}
