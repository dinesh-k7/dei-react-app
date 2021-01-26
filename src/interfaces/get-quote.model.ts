export interface IGetQuoteModel {
  captchaValue: string;
  isFormSubmitted: boolean;
  isLeadDataSent: boolean;
  isSendMailError?: boolean;
}

export interface IGetQuoteProps {
  fromPage: string;
  vimage: string;
  formFields: any;
}
