import { DECREMENT, INCREMENT } from "./constants";

export const Increment = (payload) => {
  return {
    type: INCREMENT,
    payload
  };
};

export const Decrement = (payload) => {
  return {
    type: DECREMENT,
    payload
  };
};

export const fetchtodo = (id) => {
  return (dispatch, getState) => {
    console.log("loding", getState());
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => dispatch(Increment(json)));
  };
};
