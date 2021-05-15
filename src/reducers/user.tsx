import { Action } from 'redux';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGGEDIN,
  CLEAR_USER_DATA,
} from '../actions/user';
import { InitialState } from '../interfaces/user-state.model';
//@typescript-eslint/explicit-module-boundary-types
const initialState: InitialState = {
  isRegisterSuccess: false,
  isRegisterFailure: false,
  isLoginSuccess: false,
  isLoginFailure: false,
  isUserLoggedIn: false,
};

const userReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case USER_LOGGEDIN:
    case CLEAR_USER_DATA:
      return {
        ...state,
        ...action,
      };

    case REGISTER_USER_FAILURE:
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default userReducer;
