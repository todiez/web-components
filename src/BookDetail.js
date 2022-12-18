import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BookListDetail from "./BookListDetail";

const BookDetail = () => {
  const { isbn } = useParams();
  const { data, error, loaded } = useFetch("http://localhost:8000/books/");
  const history = useHistory();

  const singleBook = data && data.filter((book) => book.isbn === isbn);


  const handleDeleteJSON = () => {
    console.log('delete button pressed');
    console.log(singleBook);

    fetch('http://localhost:8000/books/' + singleBook[0].id, {
      method: 'DELETE'
    }).then(() =>{
      history.push('/');
    })
    
  }

  return (
    <div className="book-details">
      <h2>Book Detail - ISBN: {isbn}</h2>
      {!loaded && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <BookListDetail
          books={singleBook}
          // handleDeleteDOM={handleDeleteDOM}
          handleDeleteJSON={handleDeleteJSON}
        
        />
      )}
    </div>
  );
};

export default BookDetail;
