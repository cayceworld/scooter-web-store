import shortid from "shortid";


//selectors
export const getCartProducts = state => state.cart;


// action name creator
const createActionName = actionName => `app/accessories/${actionName}`;


// action types 
const ADD_TO_CART = createActionName('ADD_TO_CART');
const ADD_AMOUNT = createActionName('ADD_AMOUNT');
const REMOVE_AMOUNT = createActionName('REMOVE_AMOUNT');

// action creators
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const addAmount = payload => ({ type: ADD_AMOUNT, payload });
export const removeAmount = payload => ({ type: REMOVE_AMOUNT, payload });

// reducer
const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...statePart, { ...action.payload }];
    case ADD_AMOUNT:
      return statePart.map(item => (item.id == action.payload.id) ? { ...item, amount: item.amount + action.payload.amount } : { ...item });
    case REMOVE_AMOUNT:
      return statePart.map(item => (item.id == action.payload.id) ? { ...item, amount: item.amount - action.payload.amount } : { ...item })
    default:
      return statePart;
  };
};
export default cartReducer;