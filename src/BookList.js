const BookList = ({ books, listTitle, handleDeleteDOM, handleDeleteJSON }) => {
  return (
    <div className="book-list">
      <h1>{listTitle}:</h1>
      {books.map((book) => (
        <div className="book-preview" key={book.isbn}>
          <div className="card">
            <h5 className="card-header">{book.title}</h5>
            <div className="card-body">
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
                  </tbody>
                </table>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteDOM(book.isbn)}
                  >
                    Delete from DOM only
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteJSON(book.isbn)}
                  >
                    Delete from JSON Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
