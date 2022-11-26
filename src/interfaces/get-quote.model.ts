import { ISettings } from './config-state.model';

export interface IGetQuoteModel {
  captchaValue?: string;
  isFormSubmitted?: boolean;
  isLeadDataSent?: boolean;
  isSendMailError?: boolean;
  fromPage?: string;
  name?: string;
  email?: string;
}

export interface IGetQuoteProps {
  fromPage: string;
  vimage?: string;
  formFields: any;
  dispatch?: any;
  getConfigDetails?: any;
  addToCart?: any;
  settings?: ISettings[];
  serviceName?: string;
}

export interface ISFCRMModel {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  formname__c: string;
}
