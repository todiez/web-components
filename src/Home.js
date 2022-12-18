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

  return (
    <div className="home">
      <BookList books={data} />
    </div>
  );
};

export default Home;
