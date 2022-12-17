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
  );
}

export default App;
