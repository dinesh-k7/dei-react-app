export interface IGetQuoteModel {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  company_size: number;
  position: string;
  website_url: string;
  company_name: string;
  captchaValue: string;
  isFormSubmitted: boolean;
  isLeadDataSent: boolean;
  isSendMailError?: boolean;
  monthly_cost: number;
}
