export interface IProductDetails {
  name: string;
  packageName: string;
  price: number;
  id: number;
  description: string;
  section: string;
  quantity: number;
}

export interface InitialState {
  quantity: number;
  products: IProductDetails[];
}
