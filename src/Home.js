import { useState, useEffect } from "react";
import BookList from "./BookList";
import useFetch from "./useFetch";


const Home = () => {
  const {data, loaded, error} = useFetch('http://localhost:8000/books');

  // const [data, setData] = useState(null);
  //   const [loaded, setLoaded] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //       setTimeout(() => {
  //         console.log("use effect ran");
  //         fetch(url)
  //           .then((resp) => {
  //             if (!resp.ok) {
  //               throw Error("Could not fetch data");
  //             }
  //             return resp.json();
  //           })
  //           .then((dataFetch) => {
  //             setData(dataFetch);
  //             setLoaded(true);
  //             setError(null)
  //           })
  //           .catch((err) => {
  //             setLoaded(true);
  //             setError(err.message)        
  //           });
  //       }, 700);
  //     }, [url]);


  // const handleDeleteDOM = (isbn) => {
  //   console.log("Deleted from DOM only")
  //   const newBooks = data.filter((book) => book.isbn !== isbn);
  //   setData(newBooks);
  // };

  // const handleDeleteJSON = (isbn) => {
  //   console.log("just the function triggered, nothing deleted so far")
  // }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}

      {data && (
        <BookList
          books={data}
          // handleDeleteDOM={handleDeleteDOM}
          // handleDeleteJSON={handleDeleteJSON}
          listTitle="My Books"
        />
      )}
      {/*       Only as example for Filtering the list, can be resused later to filter
          for a specific attribute
      <BookList books={data.filter((book) => book.author === 'Addy Osmani')} listTitle="My Books" /> */}
    </div>
  );
};

export default Home;
