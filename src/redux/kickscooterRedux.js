
//selectors
export const getAllKickscooters = state => state.kickscooters;
export const getSelectedKickscooter = state => state.kickscooters.find(kickscooter => kickscooter.isSelect === true);

// action name creator
const createActionName = actionName => `app/kickscooters/${actionName}`;

// action types 
const TOGGLE_KICKSCOOTER_SELECT = createActionName('TOGGLE_KICKSCOOTER_SELECT');

// action creators
export const toggleSelect = payload => ({ type: TOGGLE_KICKSCOOTER_SELECT, payload });



// reducer
const kickscooterReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_KICKSCOOTER_SELECT:
      return statePart.map(kickscooter => (kickscooter.id === action.payload.id) ? { ...kickscooter, isSelect: true } : { ...kickscooter, isSelect: false });
    default:
      return statePart;
  };
};
export default kickscooterReducer; 