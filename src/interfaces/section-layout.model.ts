interface IFeatures {
  id: string;
  title: string;
}

interface IServices {
  id: string;
  target?: string;
  name?: string;
  title: string;
  description: string;
  link?: string;
}

export interface ISectionLayoutModel {
  title: string;
  colorCode: string;
  useColor?: boolean;
  description: string;
  descriptiontwo?: string;
  descriptionthree?: string;
  image: string;
  features: IFeatures[];
  buttonText: string;
  imageAlign: string;
  services?: IServices[];
  count?: number;
  isShowMore?: boolean;
  buttonColor?: string;
  isHideButton?: boolean;
  icon?: string;
  buttonLink?: string;
  setService?: any;
  isShowVideo?: boolean;
  vimeoVideoId?:number
}
