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
}
