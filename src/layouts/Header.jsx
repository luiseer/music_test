import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="container">
        <nav className="nav-header">
          <div>
            <Link to="/">Artist</Link>
          </div>

          <div>
            <Link to="/albums">Albums</Link>
          </div>

          <div>
            <Link to="/search">Search</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
