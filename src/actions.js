export const addBook = (book) => {
  return {
    type: "ADD_BOOK",
    payload: { ...book },
  };
};

export const removeBook = (bookIndex) => {
  return {
    type: "REMOVE_BOOK",
    payload: bookIndex,
  };
};
