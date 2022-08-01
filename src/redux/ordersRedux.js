//selectors
export const getOrders = state => state.orders;

// action name creator
const createActionName = actionName => `app/orders/${actionName}`;

// action types 
const ADD_TO_ORDERS = createActionName('ADD_TO_ORDERS');

// action creators
export const addToOrders = payload => ({ type: ADD_TO_ORDERS, payload });



// reducer
const ordersReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  };
};
export default ordersReducer; 