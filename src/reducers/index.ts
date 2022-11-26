import cartReducer from './cart';
import enterpriseReducer from './enterprise';
import userReducer from './user';
import configReducer from './config';
import { combineReducers } from 'redux';

export default combineReducers({
  cartReducer,
  enterpriseReducer,
  configReducer,
  userReducer,
});
