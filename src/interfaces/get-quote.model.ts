export interface IGetQuoteModel {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  company_size: number;
  position: string;
  website_url: string;
  company_name: string;
  isRecaptchaError: boolean;
  isFormSubmitted: boolean;
  isLeadDataSent: boolean;
}
