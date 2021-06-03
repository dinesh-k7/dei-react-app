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
  isPaymentUpdateFailure: boolean;
  isPaymentUpdateSuccess: boolean;
}

export interface IOrder {
  userId: string;
  paypalOrderId: string;
  status: string;
  dateTime: Date;
}

export interface IOrderDetails {
  order: IOrder;
  products: IProductDetails;
}
