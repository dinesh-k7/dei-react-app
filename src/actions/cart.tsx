import { IProductDetails } from '../interfaces/cart-state.model';

export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

const addToCartAction = (product: IProductDetails[]): any => ({
  type: ADD_TO_CART,
  product,
});

const updateCartAction = (product: IProductDetails[]): any => ({
  type: UPDATE_CART,
  product,
});

const emptyCartAction = (product: IProductDetails[]): any => ({
  type: EMPTY_CART,
  product,
});

export const removeFromCartAction = (product: IProductDetails[]): any => ({
  type: REMOVE_FROM_CART,
  product,
});

export const getCartItems = (): any => ({
  type: GET_CART_ITEMS,
});

export const addToCart = (product: IProductDetails[]) => (
  dispatch,
  getState,
): any => {
  const [pd] = product;
  const {
    cartReducer: { products },
  } = getState();
  const productExist = products.find((prd) => prd.id === pd.id);

  if (!productExist) {
    dispatch(addToCartAction(product));
  } else {
    // const pd = Object.assign({}, productExist);
    // pd.quantity += pd.quantity;
    // dispatch(updateCartAction([pd]));
  }
};

export const removeFromCart = (product: IProductDetails) => (
  dispatch,
  getState,
): any => {
  const { id } = product;
  const {
    cartReducer: { products },
  } = getState();
  const copyProducts = Object.assign([], products);
  const index = copyProducts.findIndex((prd) => prd.id === id);
  if (index !== -1) {
    copyProducts.splice(index, 1);
    dispatch(removeFromCartAction(copyProducts));
  }
};

export const emptyCart = () => (dispatch): any => {
  dispatch(emptyCartAction([]));
};
