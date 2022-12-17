import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  



  return (
    //JSX inside here
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>

    </div>

    // <div className="container">
    //   <h1>React Components</h1>
    //   <button onClick={handleAddBook}>Add Book</button>

    //   {loaded &&
    //     data.map((book) => (
    //       <div>
    //         <button onClick={handleDeleteBook} key={book.isbn}>Delete {book.isbn}</button>

    //         <div className="card">
    //           <h5 className="card-header">{book.title}</h5>
    //           <div className="card-body">
    //             <h5>{book.subtitle}</h5>
    //             <p className="card-text">
    //               <table className="table">
    //                 <tr>
    //                   <td className="text-success font-weight-bold">Title:</td>
    //                   <td>{book.title}</td>
    //                 </tr>
    //                 <tr>
    //                   <td className="text-success font-weight-bold">Subtitle:</td>
    //                   <td>{book.subtitle}</td>
    //                 </tr>
    //                 <tr>
    //                   <td className="text-success font-weight-bold">Author:</td>
    //                   <td>{book.author}</td>
    //                 </tr>
    //                 <tr>
    //                   <td className="text-success font-weight-bold">
    //                     Publisher:
    //                   </td>
    //                   <td>{book.publisher}</td>
    //                 </tr>
    //                 <tr>
    //                   <td className="text-success font-weight-bold">
    //                     Description:
    //                   </td>
    //                   <td>{book.description}</td>
    //                 </tr>
    //               </table>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}

export default App;
