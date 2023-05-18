import { StaticImageData } from "next/image";

export type ProjectsDataType = {
  Title?: string;
  ProjectCardsData?: FullProjectType[];
};

export type FullProjectType = {
  alt: string;
  title: string;
  description: string;
  source: Source;
  site: Site;
  tecs: string[];
};
type Source = {
  href: string;
  button: string;
};
type Site = {
  href: string;
  button: string;
};

export type ProjectsCardType = {
  img: string;
  modalImages: StaticImageData[];
  project: FullProjectType;
};

export type ProjectCardImgType = {
  alt: string;
  onOpen: () => void;
  src: string;
  tecs: string[];
};

//Modal
export type ProjectsModalType = {
  isOpen: boolean;
  imgs: StaticImageData[];
  onClose: () => void;
  project: FullProjectType;
};


export type ModalFooterButtonsType = {
  project: FullProjectType;
};

export type DirectionType = 1 | -1;
export type CarouselType = {
  imgs: StaticImageData[];
};
