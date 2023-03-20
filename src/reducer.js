import { INCREMENT, DECREMENT } from "./constants";

const initialState = {
  value: []
};

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: action.payload
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};
