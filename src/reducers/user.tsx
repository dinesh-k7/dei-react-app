import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from '../actions/user';
import { InitialState } from '../interfaces/user-state.model';
//@typescript-eslint/explicit-module-boundary-types
const initialState: InitialState = {
  isRegisterSuccess: false,
  isRegisterFailure: false,
  user: {
    name: '',
    email: '',
    phone: 0,
    id: 0,
  },
};

const userReducer = (state = initialState, action): InitialState => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...action,
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default userReducer;
