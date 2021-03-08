import { combineReducers } from 'redux';
import cartReducer from './cart'; // our phone reducer
export default combineReducers({
  cartReducer,
});
