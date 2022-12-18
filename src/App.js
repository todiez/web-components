import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddBook from "./AddBook";
import BookDetail from "./BookDetail";

function App() {
  return (
    //JSX inside here
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addbook">
              <AddBook />
            </Route>
            <Route path="/books/:isbn">
              <BookDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
