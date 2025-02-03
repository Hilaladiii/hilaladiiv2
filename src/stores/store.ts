import { create } from "zustand";
import { createSectionSlice, SectionSlice } from "./slices/section-slice";

export const useStore = create<SectionSlice>()((...a) => ({
  ...createSectionSlice(...a),
}));
