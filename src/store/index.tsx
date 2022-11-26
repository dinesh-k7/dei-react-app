import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';
const middleware = [thunk];

const persistConfig = {
  // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
  blacklist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };
