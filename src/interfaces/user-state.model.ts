import { IOrder } from './cart-state.model';

export interface IUser {
  name: string;
  email: string;
  phone: number;
  id?: number;
  password?: string;
  isActive?: boolean;
  createdAt?: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface InitialState {
  isRegisterSuccess: boolean;
  isRegisterFailure: boolean;
  isLoginFailure: boolean;
  isLoginSuccess: boolean;
  isUserLoggedIn: boolean;
  isOrderFetchSuccess: boolean;
  isOrderFetchFailure: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  orders?: IOrders[];
}

export interface IOrders {
  date: Date;
  itemName: string;
  itemDescription: string;
  orderId: string;
  status: string;
  price: string;
  email: string;
}
