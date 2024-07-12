import { createStore } from "redux";

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

export default createStore(libraryReducer);
