import { NavLink } from "react-router";

export default function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          {/* logo */}
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* homepage */}
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/"}>
                  Home
                </NavLink>
              </li>

              {/* contacts */}
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/piatti"}>
                  I nostri piatti
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Altro
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className={"nav-link"} to={"/contacts"}>
                      Contatti
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className={"nav-link"} to={"/about"}>
                      Chi siamo
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
              Disabled
              </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
