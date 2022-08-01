import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import kickscooterReducer from './kickscooterRedux';
import accessoriesReducer from './accessoriesRedux';
import cartReducer from './cartRedux.js';
import deviceReducer from './deviseRedux.js'
import ordersReducer from './ordersRedux.js';

const subreducers = {
  kickscooters: kickscooterReducer,
  accessories: accessoriesReducer, 
  cart: cartReducer, 
  device: deviceReducer, 
  orders: ordersReducer

}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;