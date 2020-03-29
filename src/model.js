import Action from "./constant";

const addCounter = () => ({
  type: Action.COUNTER_ADD
});

const decreaseCounter = () => ({
  type: Action.COUNTER_DECREASE
});

export const actions = {
  addCounter,
  decreaseCounter
};

const initialState = {
  count: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Action.COUNTER_ADD:
      return {
        ...state,
        count: state.count + 1
      };

    case Action.COUNTER_DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return { ...state };
  }
};

export default reducer;
