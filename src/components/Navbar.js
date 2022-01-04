import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {prop.title}
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
                About
              </a>
            </li>
          </ul>
          <div className={ `form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={prop.togglemode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Darkmode
            </label>
          </div>
        </div>
      </div>
    </nav> 
       
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "set title" }; //here we set default props if we don't pass than its pass this value
