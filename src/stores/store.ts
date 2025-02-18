import { create } from "zustand";
import { createSectionSlice, SectionSlice } from "./slices/section-slice";
import { createMessageSlice, MessageSlice } from "./slices/message-slice";

export const useStore = create<SectionSlice & MessageSlice>()((...a) => ({
  ...createSectionSlice(...a),
  ...createMessageSlice(...a),
}));
