import CodeContact from "./_components/CodeContact";
import ContactInfo from "./_components/ContactInfo";
import FormContact from "./_components/FormContact";

export default function ContactPage() {
  return (
    <div className="w-full h-full flex">
      <ContactInfo />
      <FormContact />
      <CodeContact />
    </div>
  );
}
