
//selectors
export const getCartProducts = state => state.cart; 


// action name creator
const createActionName = actionName => `app/accessories/${actionName}`;


// action types 
const ADD_TO_CART = createActionName('ADD_TO_CART');

// action creators
export const addToCart = payload => ({ type: ADD_TO_CART, payload });

// reducer
const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(statePart);
      return [...statePart, { ...action.payload }]; 
    default:
      return statePart;
  };
};
export default cartReducer;