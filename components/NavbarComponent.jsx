import Link from "next/link";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/post-ssr">
                <a className="nav-link">Todos</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <button className="btn btn-primary ">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
