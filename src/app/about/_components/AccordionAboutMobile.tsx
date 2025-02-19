import File from "@/components/elements/File";
import Accordion from "@/components/fragments/Accordion";
import { SUB_SECTION_FILES } from "@/constant/about";
import { ActiveSection, Subsection } from "@/stores/slices/section-slice";
import { useStore } from "@/stores/store";
import { useState } from "react";

export default function AccordionAboutMobile() {
  const {
    activeSubSection,
    setActiveSubSection,
    activeSection,
    setActiveSection,
  } = useStore();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="p-5 lg:hidden">
      <h1 className="text-white text-base mb-5">_about-me</h1>
      {Object.entries(SUB_SECTION_FILES).map(([sectionKey, files], index) => (
        <div className="mt-1" key={index}>
          <Accordion
            title={sectionKey}
            content={
              <div className="flex flex-col gap-2">
                {files.map(({ name, key }) => (
                  <File
                    key={key}
                    name={name}
                    onClick={() => {
                      setActiveSection(sectionKey as ActiveSection);
                      setActiveSubSection(key as Subsection[ActiveSection]);
                    }}
                    isActive={activeSubSection === key}
                  />
                ))}
              </div>
            }
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleAccordion(index)}
          />
        </div>
      ))}
      <div className="text-white text-sm mt-5 ">
        <span className="text-white">- {activeSection}</span>
        <span className="text-secondary6">
          {"/"}
          {activeSubSection}.ts
        </span>
      </div>
    </div>
  );
}
