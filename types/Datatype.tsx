export type IndexDataType = {
  Heading?: string;
  Description?: string[]
};

export type LinkType = {
  Title: string;
  href: string;
};
type SourceType = {
  Title: string;
  target: string;
  rel: string;
  href: string;
};
export type NavigationChild = {
  data: NavigationDataType;
};
export type NavigationDataType = {
  Links?: LinkType[];
  Source?: SourceType;
};
