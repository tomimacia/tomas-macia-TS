import { ArticleContexType } from "@/types/LanguageType";
import { create } from "zustand";

const useLanguageContext = create<ArticleContexType>((set) => ({
  isPresent: true,
  setIsPresent: (newState) => set(() => ({ isPresent: newState })),
}));

export const useIsPresent = () =>
  useLanguageContext((state) => state.isPresent);
export const useSetIsPresent = () =>
  useLanguageContext((state) => state.setIsPresent);
