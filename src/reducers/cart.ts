import {
  ADD_TO_CART,
  GET_CART_ITEMS,
  UPDATE_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_SUCCESS,
} from '../actions/cart';
import { InitialState } from '../interfaces/cart-state.model';
//@typescript-eslint/explicit-module-boundary-types
const initialState: InitialState = {
  products: [],
  quantity: 0,
  isPaymentUpdateSuccess: false,
  isPaymentUpdateFailure: false,
};

interface IAction {
  type: string;
  product: any;
}

const cartReducer = (state = initialState, action: IAction): InitialState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, ...action.product],
      };
    case UPDATE_CART:
      const index = state.products.findIndex(
        (product) => product.id === action.product.id,
      );

      const newArray = [...state.products];

      newArray[index].price = action.product.price;
      return {
        ...state,
        products: newArray,
      };
    case EMPTY_CART:
      return {
        ...state,
        products: [],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: action.product,
      };
    case GET_CART_ITEMS:
      return state;
    case UPDATE_PAYMENT_SUCCESS:
    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};

export default cartReducer;