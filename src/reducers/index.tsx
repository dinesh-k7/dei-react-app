import { combineReducers } from 'redux';
import cartReducer from './cart';
import enterpriseReducer from './enterprise';
export default combineReducers({
  cartReducer,
  enterpriseReducer,
});
