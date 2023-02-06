import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Book-List</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/addBook">Add New Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
