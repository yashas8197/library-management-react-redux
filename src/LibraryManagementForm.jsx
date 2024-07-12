import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./actions";

const LibraryManagementForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookIsbn, setBookIsbn] = useState(0);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addBook({ title: bookTitle, author: bookAuthor, isbn: bookIsbn }));
  };

  return (
    <div>
      <input
        placeholder="Title"
        type="text"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        type="text"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <input
        placeholder="ISBN"
        type="number"
        value={bookIsbn}
        onChange={(e) => setBookIsbn(e.target.value)}
      />
      <button onClick={handleOnClick}>Add Book</button>
    </div>
  );
};

export default LibraryManagementForm;
