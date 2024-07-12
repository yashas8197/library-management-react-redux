import { useDispatch, useSelector } from "react-redux";
import { removeBook } from "./actions";

const LibrarySummary = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeBtnHandle = (index) => {
    dispatch(removeBook(index));
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
