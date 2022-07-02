import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import kickscooterReducer from './kickscooterReducer.js';

const subreducers = {
  kickscooters: kickscooterReducer,

}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;