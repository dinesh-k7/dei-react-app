export interface IGetQuoteModel {
  captchaValue: string;
  isFormSubmitted: boolean;
  isLeadDataSent: boolean;
  isSendMailError?: boolean;
  fromPage?: string;
}

export interface IGetQuoteProps {
  fromPage: string;
  vimage: string;
  formFields: any;
}
