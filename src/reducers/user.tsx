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
  LOADING_REQUEST,
  CONTACTUS_FORM_SUCCESS,
  CONTACTUS_FORM_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  ACTIVATE_FAILURE,
  ACTIVATE_SUCCESS,
  SAVE_PASSWORD_RETRY_ATTEMPT,
} from '../actions/user';
import { InitialState } from '../interfaces/user-state.model';
//@typescript-eslint/explicit-module-boundary-types

const initialState: InitialState = {
  error: '',
  isLoading: false,
  orders: [],
  isRegisterSuccess: false,
  isUpdateSuccess: false,
  isActivationFailed: false,
  isActivationSuccess: false,
  user: {
    name: '',
    email: '',
  },
  retry: {
    count: 0,
    dateTime: '',
  },
};

const userReducer = (state = initialState, action: any = null): any => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case USER_LOGGEDIN:
    case CLEAR_USER_DATA:
    case RESET_PASSWORD_SUCCESS:
    case CONTACTUS_FORM_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case ACTIVATE_SUCCESS:
      return {
        ...state,
        ...action,
      };

    case REGISTER_USER_FAILURE:
    case USER_LOGIN_FAILURE:
    case GET_ORDER_ERROR:
    case GET_ORDER_SUCCESS:
    case RESET_PASSWORD_FAILURE:
    case CONTACTUS_FORM_FAILURE:
    case UPDATE_USER_FAILURE:
    case ACTIVATE_FAILURE:
      return {
        ...state,
        ...action,
      };

    case LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SAVE_PASSWORD_RETRY_ATTEMPT:
      return {
        ...state,
        retry: { ...state.retry, ...action.retry },
      };
    default:
      return state;
  }
};

export default userReducer;
