import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.
      __REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;