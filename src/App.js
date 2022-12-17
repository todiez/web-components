import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/books");
      const json = await response.json();
      console.log(json);
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);

  const handleOnclick = () => {
      console.log('delete function fired')
      fetch('http://127.0.0.1:5500/WebComponents' + data.isbn, {
          method: 'DELETE'
      }).then(() => {
          console.log('deleted');
      });
  };

  return (
    <>
      <div className="container">
        <h1>React Components from Main</h1>
        {console.log("DATA: " + data)}
        {loaded &&
          data.map((book) => (
            <div>
              <button onClick={handleOnclick} key={book.isbn}>Delete {book.isbn}</button>

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
