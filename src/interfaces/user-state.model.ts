export interface IUser {
  name: string;
  email: string;
  phone?: number;
  id?: number;
  password?: string;
  isActive?: boolean;
  createdAt?: Date;
  isAdmin?: number;
  avatar?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IRetry {
  count: any;
  dateTime: any;
}

export interface InitialState {
  isLoading: boolean;
  isFetching?: boolean;
  error: string;
  orders?: IOrders[];
  isRegisterSuccess: boolean;
  isUpdateSuccess: boolean;
  isActivationFailed: boolean;
  isActivationSuccess: boolean;
  user: IUser;
  retry: IRetry;
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

export interface IActivateAccount {
  id: string;
  token: string;
  email: string;
}
