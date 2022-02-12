export interface InitialState {
  isLoading: boolean;
  error: string;
  settings?: ISettings[];
  plans: [];
  type?: string;
  hippaPlans: [];
  nistPlans: [];
}

export interface ISettings {
  id: number;
  type: string;
  name: string;
  value: any;
}

export interface IPlan {
  id: string;
  product_id: string;
  status: string;
  name: string;
  total_cycles: number;
  price: string;
  payment_failure_threshold: number;
}
