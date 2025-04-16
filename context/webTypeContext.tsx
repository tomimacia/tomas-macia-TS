import { WebType, WebTypeContexType } from '@/types/WebType';
import { create } from 'zustand';

const useWebTypeContext = create<WebTypeContexType>((set) => ({
  webType: 'Modern',
  setWebType: (newWebType) => set(() => ({ webType: newWebType })),
}));

export const useWebType = () => useWebTypeContext((state) => state.webType);
export const useSetWebType = () =>
  useWebTypeContext((state) => state.setWebType);
