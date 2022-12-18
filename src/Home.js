import BookList from "./BookList";
import useFetch from "./useFetch";


const Home = () => {
  const {data, loaded, error} = useFetch('http://localhost:8000/books');


  // const handleDeleteDOM = (isbn) => {
  //   console.log("Deleted from DOM only")
  //   const newBooks = data.filter((book) => book.isbn !== isbn);
  //   setData(newBooks);
  // };



  return (
    <div className="home">
      {error && <div>{error}</div>}
      {!loaded && <div>Loading</div>}

      {data && (
        <BookList
          books={data}
          //handleDeleteDOM={handleDeleteDOM}
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
