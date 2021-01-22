export interface IGetQuoteModel {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  companySize: number;
  position: string;
  websiteUrl: string;
  companyName: string;
  captchaValue: string;
  isFormSubmitted: boolean;
  isLeadDataSent: boolean;
  isSendMailError?: boolean;
  monthlyCost: number;
}

export interface IGetQuoteProps {
  fromPage: string;
  vimage: string;
}
