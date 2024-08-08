import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./counter";
import authReducer  from "./auth";

// With redux-toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});



export default store;

// Without redux-toolkit
// import redux, { createStore } from "redux";

// !!!Each reducer action type MUST overwrite the state instead of mutating it!!!
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     case "increase":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case "toggle":
//       return { showCounter: !state.showCounter, counter: state.counter };
//     default:
//       return state;
//   }
// };

// Creating store and adding reducer to it
// const store = createStore(counterReducer);
