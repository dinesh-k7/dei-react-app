export interface IPackageModel {
  name: string;
  packageName: string;
  price: any;
  id: number;
  description: string;
  section: string;
  quantity: number;
  active: boolean;
  description_one: string;
  service: '';
  features: string[];
  monthly?: boolean;
  additional_fee?: any;
  starting?: any;
}
