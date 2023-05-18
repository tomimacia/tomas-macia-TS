import { LanguageContexType } from "@/types/LanguageType";
import { create } from "zustand";

const useLanguageContext = create<LanguageContexType>((set) => ({
  language: "English",
  setLanguage: (newLanguage) => set(() => ({ language: newLanguage })),
}));

export const useLanguage = () => useLanguageContext((state) => state.language);
export const useSetlanguage = () =>
  useLanguageContext((state) => state.setLanguage);
