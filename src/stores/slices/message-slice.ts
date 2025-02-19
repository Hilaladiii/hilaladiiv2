import { StateCreator } from "zustand";

export type Message = {
  name: string;
  email: string;
  message: string;
};

export interface MessageSlice {
  message: Message;
  setMessage: (key: keyof Message, value: string) => void;
  resetMessage: () => void;
}

const defaultMessage = {
  name: "",
  email: "",
  message: "",
};

export const createMessageSlice: StateCreator<MessageSlice> = (set) => ({
  message: defaultMessage,
  setMessage: (key, value) =>
    set((state) => ({ message: { ...state.message, [key]: value } })),
  resetMessage: () => set(() => ({ message: defaultMessage })),
});
