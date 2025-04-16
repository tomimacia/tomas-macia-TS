export type WebType = 'Modern' | 'Minimalist';

export type WebTypeContexType = {
  webType: WebType;
  setWebType: (newType: WebType) => void;
};
