import { Dispatch } from 'redux';
import { IUser, IUserLogin } from '../interfaces/user-state.model';
import { constants } from '../constants';

import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';
export const GET_USER = 'GET_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const url = `${constants.NODE_ENDPOINT}/user`;

//eslint-disable react/explicit-module-boundary-types
const regstisterUserSuccessAction = (): any => ({
  type: REGISTER_USER_SUCCESS,
  isRegisterSuccess: true,
  isRegisterFailure: false,
});

const regstisterUserFailureAction = (): any => ({
  type: REGISTER_USER_FAILURE,
  isRegisterFailure: true,
});

const userLoginSuccessAction = (loginData: any): any => ({
  type: USER_LOGIN_SUCCESS,
  isLoginSuccess: true,
  isLoginFailure: false,
});

const getUserSuccessAction = (user: IUser): any => ({
  type: GET_USER_SUCCESS,
  user,
});

const getUserFailureAction = (): any => ({
  type: GET_USER_FAILURE,
});

const userLoginFailureAction = (): any => ({
  type: USER_LOGIN_FAILURE,
  isLoginFailure: true,
});

export const registerUser = (user: IUser) => (dispatch: Dispatch): any => {
  const apiUrl = `${url}/register`;

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
  const apiUrl = `${url}/login`;

  axios
    .post(apiUrl, user)
    .then((loginData) => {
      const { user_id } = loginData.data;
      dispatch(userLoginSuccessAction(loginData));
      if (user_id) {
        //  return dispatch(getUser(user_id));
      }
    })
    .catch(() => {
      dispatch(userLoginFailureAction());
    });
};

export const getUser = (userId: any) => (dispatch) => {
  const apiUrl = `${url}/${userId}`;
  axios
    .get(apiUrl)
    .then((getUserData) => {
      const { id, email, name, phone } = getUserData.data;
      dispatch(getUserSuccessAction({ id, email, name, phone }));
    })
    .catch((userDataError) => {
      dispatch(getUserFailureAction());
    });
};
