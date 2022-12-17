const Home = () => {

    
  return (
    <div className="home">
      <div className="card">
        <h5 className="card-header">Book Title</h5>
        <div className="card-body">
          <h5>subtitle</h5>
          <div className="card-text">
            <table className="table">           
              <tbody>
                <tr>
                  <td className="text-success font-weight-bold">Title:</td>
                  <td>title</td>
                </tr>
                <tr>
                  <td className="text-success font-weight-bold">Subtitle:</td>
                  <td>subtitle</td>
                </tr>
                <tr>
                  <td className="text-success font-weight-bold">Author:</td>
                  <td>author</td>
                </tr>
                <tr>
                  <td className="text-success font-weight-bold">Publisher:</td>
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
  );
};

export default Home;
