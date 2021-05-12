import { combineReducers } from 'redux';
import cartReducer from './cart';
import enterpriseReducer from './enterprise';
import userReducer from './user';

export default combineReducers({
  cartReducer,
  enterpriseReducer,
  userReducer,
});
