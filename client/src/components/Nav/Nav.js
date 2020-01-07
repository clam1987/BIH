import React from "react";
import logo from "../../assets/images/placeholder.png";
import "../Nav/Nav.css";

let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img className="img-fluid" src={logo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              MENU <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              INGREDIENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PROGRAMS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              RESOURCES
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;