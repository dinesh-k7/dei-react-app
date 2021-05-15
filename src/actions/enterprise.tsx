import { Dispatch } from 'redux';

export const GET_SERVICE_NAME = 'GET_SERVICE_NAME';

export const setServiceAction = (serviceName: string): any => (
  dispatch: Dispatch,
): any => {
  dispatch({
    type: GET_SERVICE_NAME,
    serviceName,
  });
};
