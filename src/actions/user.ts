import { Dispatch } from 'redux';
import {
  IActivateAccount,
  IUser,
  IUserLogin,
} from '../interfaces/user-state.model';
import { constants, messages } from '../constants';

import axios from 'axios';
import { IOrder } from '../interfaces/cart-state.model';
import { sendMail } from '../components/effects';
// import { store } from '../store';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
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
export const LOADING_REQUEST = 'LOADING_REQUEST';
export const CONTACTUS_FORM_SUCCESS = 'CONTACTUS_FORM_SUCCESS';
export const CONTACTUS_FORM_FAILURE = 'CONTACTUS_FORM_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const ACTIVATE_SUCCESS = 'ACTIVATE_SUCCESS';
export const ACTIVATE_FAILURE = 'ACTIVATE_FAILURE';
export const SAVE_PASSWORD_RETRY_ATTEMPT = 'SAVE_PASSWORD_RETRY_ATTEMPT';
export const GET_PASSWORD_RETRY_ATTEMPT = 'GET_PASSWORD_RETRY_ATTEMPT';
export const RESEND_ACTIVATION_LINK_SUCCESS = `RESEND_ACTIVATION_LINK_SUCCESS`;
export const RESEND_ACTIVATION_LINK_FAILURE = `RESEND_ACTIVATION_LINK_FAILURE`;

const url = `${constants.NODE_ENDPOINT}`;

//eslint-disable react/explicit-module-boundary-types
const regstisterUserSuccessAction = (): any => ({
  type: REGISTER_USER_SUCCESS,
  isLoading: false,
  isRegisterSuccess: true,
  error: '',
});

const updateUserSuccessAction = (userData: IUser): any => ({
  type: UPDATE_USER_SUCCESS,
  isLoading: false,
  error: '',
  user: userData,
  isUpdateSuccess: true,
});

const loadingAction = (): any => ({
  type: LOADING_REQUEST,
});

const clearUserDataAction = (): any => ({
  type: CLEAR_USER_DATA,
  isLoginSuccess: false,
  isUserLoggedIn: false,
});

export const clearUserData =
  () =>
  (dispatch: Dispatch): any => {
    // Clear user data from local storage and redirect to landing page
    localStorage.removeItem('userData');
    dispatch(clearUserDataAction());
  };

const regstisterUserFailureAction = (errorMessage: string): any => ({
  type: REGISTER_USER_FAILURE,
  isLoading: false,
  error: errorMessage,
});

const updateUserFailureAction = (errorMessage: string): any => ({
  type: UPDATE_USER_FAILURE,
  isLoading: false,
  error: errorMessage,
  isUpdateSuccess: false,
});

const userLoginSuccessAction = (isPasswordExpired: boolean): any => ({
  type: USER_LOGIN_SUCCESS,
  isLoading: false,
  isPasswordExpired,
  error: '',
});

const getUserFailureAction = (): any => ({
  type: GET_USER_FAILURE,
  isLoading: false,
  isFetching: false,
});

const userLoggedInAction = (
  isUserLoggedIn: boolean,
  isAdmin?: boolean,
): any => ({
  type: GET_USER_SUCCESS,
  isUserLoggedIn,
  isLoading: false,
  isFetching: false,
  error: '',
  isAdmin,
});

const userLoginFailureAction = (errorMessage: string): any => ({
  type: USER_LOGIN_FAILURE,
  isLoading: false,
  error: errorMessage,
});

export const registerUser =
  (user: IUser, type: string) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    let resource;
    if (type === 'freelancer') {
      resource = 'user/freelance/register';
    } else if (type === 'business') {
      resource = 'user/business/register';
    } else if (type === 'personal') {
      resource = 'user/personal/register';
    }
    const apiUrl = !type ? `${url}/user/register` : `${url}/${resource}`;
    axios
      .post(apiUrl, user)
      .then(() => {
        dispatch(regstisterUserSuccessAction());
      })
      .catch((registerError) => {
        const { data } = registerError && registerError.response;
        dispatch(regstisterUserFailureAction(data?.message));
      });
  };

export const updateUser =
  (user: IUser, id: string) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    const apiUrl = `${url}/user/${id}`;
    axios
      .put(apiUrl, user)
      .then((updateUser) => {
        const userData = updateUser.data;
        localStorage.setItem('userData', JSON.stringify(userData));
        dispatch(updateUserSuccessAction(userData));
      })
      .catch((updateUserError) => {
        const { data } = updateUserError && updateUserError.response;
        dispatch(updateUserFailureAction(data?.message));
      });
  };

export const userLogin =
  (user: IUserLogin) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    const apiUrl = `${url}/user/login`;

    axios
      .post(apiUrl, user)
      .then((loginData) => {
        const { userId, isPasswordExpired } = loginData.data;
        const retry = {
          count: '',
          dateTime: '',
        };
        dispatch(savePasswordRetryAction(retry));
        dispatch(userLoginSuccessAction(isPasswordExpired));
        if (userId && !isPasswordExpired) {
          dispatch(getUser(userId) as any);
        }
      })
      .catch((loginError) => {
        const { data } = loginError && loginError.response;
        // const { count, dateTime } =
        //   store &&
        //   store.getState() &&
        //   store.getState().userReducer &&
        //   store.getState().userReducer.retry;
        // const retry = {
        //   count: count + 1,
        //   dateTime: count === 0 ? new Date().toLocaleDateString() : dateTime,
        // };
        // const message = data?.message;

        // if (message.indexOf('Authentication') > -1) {
        //   dispatch(savePasswordRetryAction(retry));
        // }
        dispatch(userLoginFailureAction(data?.message));
      });
  };

export const getUser =
  (userId: string) =>
  (dispatch: Dispatch): any => {
    dispatch({ type: GET_USER_REQUEST });
    dispatch(loadingAction());
    const apiUrl = `${url}/user/${userId}`;
    axios
      .get(apiUrl)
      .then((getUserData) => {
        const userData = getUserData.data;
        localStorage.setItem('userData', JSON.stringify(userData));
        dispatch(isUserLoggedIn(userData.isAdmin) as any);
      })
      .catch(() => {
        dispatch(getUserFailureAction());
      });
  };

export const isUserLoggedIn =
  (isAdmin?: boolean) =>
  (dispatch: Dispatch): any => {
    const isUserLoggedIn = localStorage.getItem('userData') ? true : false;
    dispatch(userLoggedInAction(isUserLoggedIn, isAdmin));
  };

export const getOrders =
  (userId: string) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
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
  isLoading: false,
  error: '',
});

const orderFailureAction = (): any => ({
  type: GET_ORDER_ERROR,
  error: true,
  isLoading: false,
});

export const resetPassword =
  (payload: {
    email: string;
    password: string;
    userId?: string;
    token?: string;
  }) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    const apiUrl = `${url}/user/reset-password`;
    axios
      .post(apiUrl, payload)
      .then((resetData) => {
        const { isPasswordMinAge } = resetData.data;
        dispatch(resetPasswordSuccessAction(isPasswordMinAge));
      })
      .catch((resetPwdError) => {
        const { data } = resetPwdError && resetPwdError.response;
        dispatch(resetPasswordFailureAction(data?.errorMessage));
      });
  };

export const resendActivationLink =
  (payload: { email: string }) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    const apiUrl = `${url}/user/resend-activation-link`;
    axios
      .post(apiUrl, payload)
      .then(() => {
        dispatch(resendActivationLinkSuccessAction());
      })
      .catch((resendActivationLinkError) => {
        const { data } =
          resendActivationLinkError && resendActivationLinkError.response;
        dispatch(resendActivationFailureAction(data?.errorMessage));
      });
  };

const resetPasswordSuccessAction = (isPasswordMinAge): any => ({
  type: RESET_PASSWORD_SUCCESS,
  isLoading: false,
  isSuccess: true,
  isPasswordMinAge,
  error: '',
});

const resetPasswordFailureAction = (errorMessage: string): any => ({
  type: RESET_PASSWORD_FAILURE,
  isLoading: false,
  error: errorMessage,
});

const resendActivationLinkSuccessAction = (): any => ({
  type: RESEND_ACTIVATION_LINK_SUCCESS,
  isLoading: false,
  isSuccess: true,
  error: '',
});

const resendActivationFailureAction = (errorMessage: string): any => ({
  type: RESEND_ACTIVATION_LINK_FAILURE,
  isLoading: false,
  error: errorMessage,
});

export const postContactForm =
  (user: IUser) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    sendMail(user, constants.CONTACTUS)
      .then(() => {
        dispatch(contactusSuccessAction());
      })
      .catch((error) => {
        const data =
          error && error.response
            ? error.response.data
            : messages.contactus_error;
        dispatch(contactusFailureAction(data || data.message));
      });
  };

//eslint-disable react/explicit-module-boundary-types
const contactusSuccessAction = (): any => ({
  type: CONTACTUS_FORM_SUCCESS,
  isLoading: false,
  error: '',
});

const activateSuccessAction = (): any => ({
  type: ACTIVATE_SUCCESS,
  isLoading: false,
  isActivationSuccess: true,
  error: '',
});

const contactusFailureAction = (errorMessage: string): any => ({
  type: CONTACTUS_FORM_FAILURE,
  isLoading: false,
  error: errorMessage,
});

const activateFailureAction = (): any => ({
  type: ACTIVATE_FAILURE,
  isLoading: false,
  isActivationFailed: true,
});

export const activateAccount =
  (activateAccount: IActivateAccount) =>
  (dispatch: Dispatch): any => {
    dispatch(loadingAction());
    const apiUrl = `${url}/user/activate-account`;
    axios
      .post(apiUrl, activateAccount)
      .then(() => {
        dispatch(activateSuccessAction());
      })
      .catch(() => {
        dispatch(activateFailureAction());
      });
  };

// eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
export const savePasswordRetryAction = (retry: any): any => ({
  type: SAVE_PASSWORD_RETRY_ATTEMPT,
  retry,
});
