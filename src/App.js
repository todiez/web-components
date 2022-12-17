import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState(null);
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

  const handleDeleteBook = () => {
    
      fetch('http://localhost:3000/books/' , {
          method: 'DELETE'
      }).then(() => {
          console.log('deleted');
          //reload page
      });
  };

  const handleAddBook = () => {
    console.log('book add function fired');
  }

  return (
    <>
      <div className="container">
        <h1>React Components</h1>
        <button onClick={handleAddBook}>Add Book</button>
        
        {loaded &&
          data.map((book) => (
            <div>
              <button onClick={handleDeleteBook} key={book.isbn}>Delete {book.isbn}</button>

              <div className="card">
                <h5 className="card-header">{book.title}</h5>
                <div className="card-body">
                  <h5>{book.subtitle}</h5>
                  <p className="card-text">
                    <table className="table">
                      <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td>{book.title}</td>
                      </tr>
                      <tr>
                        <td className="text-success font-weight-bold">Subtitle:</td>
                        <td>{book.subtitle}</td>
                      </tr>
                      <tr>
                        <td className="text-success font-weight-bold">Author:</td>
                        <td>{book.author}</td>
                      </tr>
                      <tr>
                        <td className="text-success font-weight-bold">
                          Publisher:
                        </td>
                        <td>{book.publisher}</td>
                      </tr>
                      <tr>
                        <td className="text-success font-weight-bold">
                          Description:
                        </td>
                        <td>{book.description}</td>
                      </tr>
                    </table>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
