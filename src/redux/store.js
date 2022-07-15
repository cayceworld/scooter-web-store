import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import kickscooterReducer from './kickscooterRedux';
import accessoriesReducer from './accessoriesRedux';

const subreducers = {
  kickscooters: kickscooterReducer,
  accessories: accessoriesReducer, 

}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;