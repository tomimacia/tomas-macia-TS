type LanguageStateType = "English" | "Español";

export type LanguageContexType = {
  language: LanguageStateType;
  setLanguage: (newLanguage: LanguageStateType) => void;
};
