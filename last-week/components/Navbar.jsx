import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/books">Book List</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/mybookshelf">My Bookshelf</Link>
    </nav>
  );
}

export default Navbar;
