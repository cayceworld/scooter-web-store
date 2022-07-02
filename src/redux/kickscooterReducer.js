

//selectors
export const getAllKickscooters = state => state.kickscooters;

// actions
const createActionName = actionName => `app/kickscooters/${actionName}`;
const TOGGLE_KICKSCOOTER_SELECT = createActionName('TOGGLE_KICKSCOOTER_SELECT');

// action creators
export const toggleSelect = payload => ({ type: TOGGLE_KICKSCOOTER_SELECT, payload });



// action creators
const kickscooterReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_KICKSCOOTER_SELECT:
      return statePart.map(kickscooter => (kickscooter.id === action.payload.id) ? { ...kickscooter, isSelect: !kickscooter.isSelect } : {...kickscooter, isSelect: false});
    default:
      return statePart;
  };
};
export default kickscooterReducer; 