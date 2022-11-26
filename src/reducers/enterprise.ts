import { GET_SERVICE_NAME } from '../actions/enterprise';
import { InitialState } from '../interfaces/enterprise-state.model';
const initialState: InitialState = {
  serviceName: '',
};

interface IAction {
  type: string;
  serviceName: string;
}
const enterpriseReducer = (
  state = initialState,
  action: IAction,
): InitialState => {
  switch (action.type) {
    case GET_SERVICE_NAME:
      return {
        ...state,
        serviceName: action.serviceName,
      };

    default:
      return state;
  }
};

export default enterpriseReducer;
