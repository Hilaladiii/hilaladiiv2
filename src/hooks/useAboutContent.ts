import {
  BIO,
  CONTACTS,
  EDUCATION,
  EXPERIENCE,
  FAVORITE_GAMES,
  HARD_SKILLS,
  INTEREST,
  SOFT_SKILLS,
  SPORTS,
} from "@/constant/personal-info";
import { useStore } from "@/stores/store";

export function useAboutContent() {
  const { activeSubSection } = useStore();

  const content = () => {
    switch (activeSubSection) {
      case "bio":
        return BIO;
      case "interest":
        return INTEREST;
      case "education":
        return EDUCATION;
      case "contact":
        return CONTACTS;
      case "sports":
        return SPORTS;
      case "favorite-games":
        return FAVORITE_GAMES;
      case "hard-skills":
        return HARD_SKILLS;
      case "soft-skills":
        return SOFT_SKILLS;
      case "experience":
        return EXPERIENCE;
      default:
        return "// No content available;";
    }
  };

  return content();
}
