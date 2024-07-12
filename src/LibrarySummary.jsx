import { useDispatch, useSelector } from "react-redux";

const LibrarySummary = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeBtnHandle = (index) => {
    dispatch({ type: "REMOVE_BOOK", payload: index });
  };

  return (
    <div>
      <h2>Library Summary</h2>
      <p>Total Books: {books.length}</p>
      {books && (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              {book.title}{" "}
              <button onClick={() => removeBtnHandle(book.isbn)}>remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LibrarySummary;
