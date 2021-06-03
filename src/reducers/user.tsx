import { Action } from 'redux';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGGEDIN,
  CLEAR_USER_DATA,
  GET_ORDER_ERROR,
  GET_ORDER_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
} from '../actions/user';
import { InitialState } from '../interfaces/user-state.model';
//@typescript-eslint/explicit-module-boundary-types
const initialState: InitialState = {
  isRegisterSuccess: false,
  isRegisterFailure: false,
  isLoginSuccess: false,
  isLoginFailure: false,
  isUserLoggedIn: false,
  isOrderFetchSuccess: false,
  isOrderFetchFailure: false,
  isFailure: false,
  isSuccess: false,
  orders: [],
};

const userReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case USER_LOGGEDIN:
    case CLEAR_USER_DATA:
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        ...action,
      };

    case REGISTER_USER_FAILURE:
    case USER_LOGIN_FAILURE:
    case GET_ORDER_ERROR:
    case GET_ORDER_SUCCESS:
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default userReducer;
