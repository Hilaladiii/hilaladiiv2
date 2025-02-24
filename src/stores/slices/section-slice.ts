import { StateCreator } from "zustand";

export type ActiveSection =
  | "professional-info"
  | "personal-info"
  | "hobbies-info";

export type Subsection = {
  "professional-info": "experience" | "hard-skills" | "soft-skills";
  "personal-info": "bio" | "interest" | "education" | "contact" | "device";
  "hobbies-info": "sports" | "favorite-games";
};

const defaultSection: Subsection = {
  "professional-info": "experience",
  "personal-info": "bio",
  "hobbies-info": "sports",
};

export interface SectionSlice {
  activeSection: ActiveSection;
  activeSubSection: Subsection[ActiveSection];
  setActiveSection: (section: ActiveSection) => void;
  setActiveSubSection: (subSection: Subsection[ActiveSection]) => void;
}

export const createSectionSlice: StateCreator<SectionSlice> = (set) => ({
  activeSection: "personal-info",
  activeSubSection: defaultSection["personal-info"],
  setActiveSection: (section) =>
    set({
      activeSection: section,
      activeSubSection: defaultSection[section] as Subsection[ActiveSection],
    }),
  setActiveSubSection: (subSection) => set({ activeSubSection: subSection }),
});
