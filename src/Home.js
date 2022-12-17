import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript, Second Edition",
      subtitle: "A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      published: "2014-12-14T00:00:00.000Z",
      publisher: "No Starch Press",
      pages: 472,
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      website: "http://eloquentjavascript.net/",
    }
  ]);
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
      {data.map((book) => (
        <div className="book-preview" key={book.isbn}>
          <div className="card">
            <h5 className="card-header">{book.title}</h5>
            <div className="card-body">
              <h5>subtitle</h5>
              <div className="card-text">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="text-success font-weight-bold">Title:</td>
                      <td>{book.title}</td>
                    </tr>
                    <tr>
                      <td className="text-success font-weight-bold">
                        Subtitle:
                      </td>
                      <td>{book.subtitle}</td>
                    </tr>
                    <tr>
                      <td className="text-success font-weight-bold">Author:</td>
                      <td>author</td>
                    </tr>
                    <tr>
                      <td className="text-success font-weight-bold">
                        Publisher:
                      </td>
                      <td>publisher</td>
                    </tr>
                    <tr>
                      <td className="text-success font-weight-bold">
                        Description:
                      </td>
                      <td>description</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
