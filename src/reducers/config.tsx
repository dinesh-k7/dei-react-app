import {
  CONFIG_FAILURE_ACTION,
  CONFIG_SUCCESS_ACTION,
  UPDATE_CONFIG_FAILURE_ACTION,
  LOADING_REQUEST,
  GET_PAYPAL_PLANS_SUCCESS,
  GET_PAYPAL_PLANS_FAILURE,
  GET_PASSWORD_RETRY_ATTEMPT,
} from '../actions/config';
import { InitialState } from '../interfaces/config-state.model';
//@typescript-eslint/explicit-module-boundary-types
const initialState: InitialState = {
  error: '',
  isLoading: false,
  settings: [],
  plans: [],
  hippaPlans: [],
  nistPlans: [],
};

interface IAction {
  type: string;
}

const configReducer = (state = initialState, action: IAction): InitialState => {
  switch (action.type) {
    case CONFIG_FAILURE_ACTION:
    case CONFIG_SUCCESS_ACTION:
    case UPDATE_CONFIG_FAILURE_ACTION:
      return {
        ...state,
        ...action,
      };
    case LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PAYPAL_PLANS_SUCCESS:
    case GET_PAYPAL_PLANS_FAILURE:
      return {
        ...state,
        ...action,
      };

    default:
    case GET_PASSWORD_RETRY_ATTEMPT:
      return state;
  }
};

export default configReducer;
