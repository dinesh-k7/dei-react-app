import { GET_SERVICE_NAME } from '../actions/enterprise';
import { InitialState } from '../interfaces/enterprise-state.model';
const initialState: InitialState = {
  serviceName: '',
};

const enterpriseReducer = (state = initialState, action: any): InitialState => {
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
