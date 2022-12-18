const BookList = ({books}) => {
  //const books = props.books;

  return (
    <div className="book-list">
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
