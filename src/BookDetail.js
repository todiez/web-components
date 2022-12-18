import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BookList from "./BookList";

const BookDetail = () => {
  const { isbn } = useParams();
  const { data, error, loaded } = useFetch("http://localhost:8000/books/");

  const singleBook = data && data.filter((book) => book.isbn === isbn);

  return (
    <div className="book-details">
      <h2>Book Detail - ISBN: {isbn}</h2>
      {!loaded && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <BookList
          books={singleBook}
          // handleDeleteDOM={handleDeleteDOM}
          // handleDeleteJSON={handleDeleteJSON}
          listTitle="My Books"
        />
      )}
    </div>
  );
};

export default BookDetail;
