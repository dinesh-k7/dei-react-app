interface IFeatures {
  id: string;
  title: string;
}

interface IServices {
  id: string;
  title: string;
  description: string;
}

export interface ISectionLayoutModel {
  title: string;
  colorCode: string;
  description: string;
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
}
