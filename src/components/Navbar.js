import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// we can use the concept of the "destructuring" instead of the whole object props
function Navbar({
  title = "Textutils",
  aboutText = "About",
  mode,
  toggleMode,
}) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={`${mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
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
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {aboutText}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div
          className={`form-check form-switch text-${
            mode === "dark" ? "light" : "dark"
          } my-2 mx-2`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {mode === "light" ? "Enable DarkMode" : "Enable LightMode"}
          </label>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// this are not using know
// Navbar.defaultProps = {
//   title: "Set Title Here",
//   aboutText: "Set About Text Here",
// };
