import { Dispatch } from 'redux';
import { IUser, IUserLogin } from '../interfaces/user-state.model';
import { constants } from '../constants';

import axios from 'axios';
import { IOrder } from '../interfaces/cart-state.model';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const GET_USER = 'GET_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const USER_LOGGEDIN = 'USER_LOGGEDIN';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

const url = `${constants.NODE_ENDPOINT}`;

//eslint-disable react/explicit-module-boundary-types
const regstisterUserSuccessAction = (): any => ({
  type: REGISTER_USER_SUCCESS,
  isRegisterSuccess: true,
  isRegisterFailure: false,
});

const clearUserDataAction = (): any => ({
  type: CLEAR_USER_DATA,
  isLoginSuccess: false,
  isUserLoggedIn: false,
});

export const clearUserData = () => (dispatch: Dispatch): any => {
  // Clear user data from local storage and redirect to landing page
  localStorage.removeItem('userData');
  dispatch(clearUserDataAction());
};

const regstisterUserFailureAction = (): any => ({
  type: REGISTER_USER_FAILURE,
  isRegisterFailure: true,
});

const userLoginSuccessAction = (loginData: any): any => ({
  type: USER_LOGIN_SUCCESS,
  isLoginSuccess: true,
  isLoginFailure: false,
});

const getUserFailureAction = (): any => ({
  type: GET_USER_FAILURE,
});

const userLoggedInAction = (isUserLoggedIn: boolean): any => ({
  type: USER_LOGGEDIN,
  isUserLoggedIn,
});

const userLoginFailureAction = (): any => ({
  type: USER_LOGIN_FAILURE,
  isLoginFailure: true,
});

export const registerUser = (user: IUser) => (dispatch: Dispatch): any => {
  const apiUrl = `${url}/user/register`;

  axios
    .post(apiUrl, user)
    .then(() => {
      dispatch(regstisterUserSuccessAction());
    })
    .catch(() => {
      dispatch(regstisterUserFailureAction());
    });
};

export const userLogin = (user: IUserLogin) => (dispatch: Dispatch): any => {
  const apiUrl = `${url}/user/login`;

  axios
    .post(apiUrl, user)
    .then((loginData) => {
      const { user_id } = loginData.data;
      dispatch(userLoginSuccessAction(loginData));
      if (user_id) {
        dispatch(getUser(user_id) as any);
      }
    })
    .catch(() => {
      dispatch(userLoginFailureAction());
    });
};

export const getUser = (userId: any) => (dispatch: Dispatch) => {
  const apiUrl = `${url}/user/${userId}`;
  axios
    .get(apiUrl)
    .then((getUserData) => {
      const userData = getUserData.data;
      localStorage.setItem('userData', JSON.stringify(userData));
      dispatch(isUserLoggedIn() as any);
    })
    .catch(() => {
      dispatch(getUserFailureAction());
    });
};

export const isUserLoggedIn = () => (dispatch: Dispatch) => {
  const isUserLoggedIn = localStorage.getItem('userData') ? true : false;
  dispatch(userLoggedInAction(isUserLoggedIn));
};

export const getOrders = (userId: string) => (dispatch: Dispatch): any => {
  const apiUrl = `${url}/orders/${userId}`;

  axios
    .get(apiUrl)
    .then((orderData) => {
      const orders = orderData.data;
      dispatch(orderSuccessAction(orders));
    })
    .catch(() => {
      dispatch(orderFailureAction());
    });
};

const orderSuccessAction = (orderDetail: IOrder): any => ({
  type: GET_ORDER_SUCCESS,
  orders: orderDetail,
  isOrderFetchSuccess: true,
});

const orderFailureAction = (): any => ({
  type: GET_ORDER_ERROR,
  isOrderFetchFailure: true,
});

export const resetPassword = (payload: any) => (dispatch: Dispatch) => {
  const apiUrl = `${url}/user/reset-password`;
  axios
    .post(apiUrl, payload)
    .then(() => {
      dispatch(resetPasswordSuccessAction());
    })
    .catch(() => {
      dispatch(resetPasswordFailureAction());
    });
};

const resetPasswordSuccessAction = (): any => ({
  type: RESET_PASSWORD_SUCCESS,
  isSuccess: true,
  isFailure: false,
});

const resetPasswordFailureAction = (): any => ({
  type: RESET_PASSWORD_FAILURE,
  isFailure: true,
  isSuccess: false,
});
