import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./loggerMiddleware";

const initialValue = [];

const libraryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "REMOVE_BOOK":
      return state.filter((book) => book.isbn != action.payload);
    default:
      return state;
  }
};

const store = createStore(libraryReducer, applyMiddleware(loggerMiddleware));

export default store;
