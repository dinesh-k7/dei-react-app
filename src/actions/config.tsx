import { Dispatch } from 'redux';
import axios from 'axios';

import { constants } from '../constants';
import { ISettings } from '../interfaces/config-state.model';

export const CONFIG_SUCCESS_ACTION = 'CONFIG_SUCCESS_ACTION';
export const CONFIG_FAILURE_ACTION = 'CONFIG_FAILURE_ACTION';
export const UPDATE_CONFIG_SUCCESS_ACTION = 'UPDATE_CONFIG_SUCCESS_ACTION';
export const UPDATE_CONFIG_FAILURE_ACTION = 'UPDATE_CONFIG_FAILURE_ACTION';
export const LOADING_REQUEST = 'LOADING_REQUEST';
export const GET_PAYPAL_PLANS_SUCCESS = 'GET_PAYPAL_PLANS_SUCCESS';
export const GET_PAYPAL_PLANS_FAILURE = 'GET_PAYPAL_PLANS_FAILURE';
export const SAVE_PASSWORD_RETRY_ATTEMPT = 'SAVE_PASSWORD_RETRY_ATTEMPT';
export const GET_PASSWORD_RETRY_ATTEMPT = 'GET_PASSWORD_RETRY_ATTEMPT';
const url = `${constants.NODE_ENDPOINT}`;

//eslint-disable react/explicit-module-boundary-types

const configSuccessAction = (config): any => ({
  type: CONFIG_SUCCESS_ACTION,
  isLoading: false,
  settings: config,
});

const loadingAction = (): any => ({
  type: LOADING_REQUEST,
});

const configFailureAction = (errorMessage: string): any => ({
  type: CONFIG_FAILURE_ACTION,
  isError: true,
  isLoading: false,
  errorMessage,
});

const updateConfigFailureAction = (errorMessage: string): any => ({
  type: CONFIG_FAILURE_ACTION,
  isError: true,
  isLoading: false,
  errorMessage,
});

export const getConfigDetails = () => (dispatch: Dispatch): any => {
  const apiUrl = `${url}/settings`;
  dispatch(loadingAction());
  axios
    .get(apiUrl)
    .then((configData) => {
      const config = configData && configData.data;
      dispatch(configSuccessAction(config));
    })
    .catch((configError) => {
      const { data } =
        configError && configError.response
          ? configError.response
          : { data: null };
      dispatch(configFailureAction(data?.message));
    });
};

export const updateConfigDetails = (payload: ISettings[]) => (
  dispatch: Dispatch,
): any => {
  dispatch(loadingAction());
  const apiUrl = `${url}/settings`;
  axios
    .put(apiUrl, payload)
    .then(() => {
      dispatch(getConfigDetails() as any);
    })
    .catch((configError) => {
      const { data } =
        configError && configError.response
          ? configError.response
          : { data: null };
      dispatch(updateConfigFailureAction(data?.message));
    });
};

export const getPaypalPlans = (productId: string, action: string) => (
  dispatch: Dispatch,
): any => {
  const apiUrl = `${url}/paypal/plans/${productId}`;
  dispatch(loadingAction());
  axios
    .get(apiUrl)
    .then((configData) => {
      const config = configData && configData.data;
      dispatch(paypalPlanSuccessAction(config, action));
    })
    .catch((configError) => {
      const { data } =
        configError && configError.response
          ? configError.response
          : { data: null };
      dispatch(paypalPlanFailureAction(data?.message));
    });
};

const paypalPlanSuccessAction = (plans, action: string): any => {
  if (action === constants.CONTRIBUTOR) {
    return {
      type: GET_PAYPAL_PLANS_SUCCESS,
      isLoading: false,
      error: '',
      plans,
    };
  } else if (action === constants.HIPPA) {
    return {
      type: GET_PAYPAL_PLANS_SUCCESS,
      isLoading: false,
      error: '',
      hippaPlans: plans,
    };
  } else if (action === constants.NIST) {
    return {
      type: GET_PAYPAL_PLANS_SUCCESS,
      isLoading: false,
      error: '',
      nistPlans: plans,
    };
  }
};

const paypalPlanFailureAction = (errorMessage: string): any => ({
  type: GET_PAYPAL_PLANS_FAILURE,
  isLoading: false,
  error: errorMessage,
});
