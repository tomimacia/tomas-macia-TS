import { StaticImageData } from "next/image";

export type LogoType = {
  alt: string;
  imageProps: StaticImageData;
};
export type DisplayLogosType = {
  logos: LogoType[];
  englishTitle: string;
  spanishTitle: string;
  startingTime?: number;
};
