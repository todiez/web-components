import { useState, useEffect } from "react";
import BookList from "./BookList";

const Home = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/books");
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);

  const handleDeleteBook = (isbn) => {
    const newBooks = data.filter((book) => book.isbn !== isbn);
    setData(newBooks);
  };

  return (
    <div className="home">
      <BookList
        books={data}
        handleDeleteBook={handleDeleteBook}
        listTitle="My Books"
      />
      {/*       Only as example for Filtering the list, can be resused later to filter
          for a specific attribute
      <BookList books={data.filter((book) => book.author === 'Addy Osmani')} listTitle="My Books" /> */}
    </div>
  );
};

export default Home;
