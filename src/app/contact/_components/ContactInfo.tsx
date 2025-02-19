"use client";

import { useState } from "react";

import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import Accordion from "@/shared/components/fragments/Accordion";
import ContactItem from "@/shared/components/elements/ContactItem";

const CONTACT_DATA = [
  {
    title: "contacts",
    content: (
      <div className="flex flex-col gap-3">
        <ContactItem icon={MdEmail} content="abdulhilal242@gmail.com" />
        <ContactItem
          icon={MdOutlineWhatsapp}
          content="+6281217540250"
          href="https://wa.me/+6281217540250"
        />
      </div>
    ),
  },
  {
    title: "find-me-also-in",
    content: (
      <div className="flex flex-col  gap-3">
        <ContactItem
          icon={FaInstagram}
          content="hilal.adii"
          href="https://instagram.com/hilal.adii"
        />
        <ContactItem
          icon={FaLinkedin}
          content="Abdullah Hilal"
          href="https://linkedin.com/in/abdullah-hilal-adi-sumarno-790841246"
        />
      </div>
    ),
  },
];

export default function ContactInfo() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="h-full w-[351px] border-r border-lines">
      {CONTACT_DATA.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}
