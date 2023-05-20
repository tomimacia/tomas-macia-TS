type LanguageStateType = "English" | "Español";

export type LanguageContexType = {
  language: LanguageStateType;
  setLanguage: (newLanguage: LanguageStateType) => void;
};

export type ArticleContexType = {
  isPresent: boolean;
  setIsPresent: (newState: boolean) => void;
};