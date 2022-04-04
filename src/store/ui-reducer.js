export const ACTIONS = {
  TOGGLE: "toggle",
};

const initialState = { cartIsVisible: false };

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE:
      return { cartIsVisible: !state.cartIsVisible };
    default:
      return state;
  }
};

export default uiReducer;
;
