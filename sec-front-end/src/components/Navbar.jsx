import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/score">Score</Link>
      <Link to="/rules">Rules</Link>
      <Link to="/stats">Stats</Link>
    </nav>
  );
}

export default Navbar;
