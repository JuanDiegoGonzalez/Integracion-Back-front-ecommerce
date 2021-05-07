import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Navbar.scss";
import { FormattedMessage } from "react-intl";
import { I18nSelect } from "../i18n-select/I18nSelect";

export const Navbar = ({ setLanguage }) => {
  const { user } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="hello" /> ISIS3710
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-nav-links">
              <Link className="nav-link active" aria-current="page" to="/list">
                <FormattedMessage id="gallery" />
              </Link>
              <Link className="nav-link active" aria-current="page" to="/todos">
                TODOs
              </Link>
            </div>
            <div className="navbar-nav-controls">
              <I18nSelect setLanguage={setLanguage}></I18nSelect>
              <Link className="nav-link" to="/login">
                {user ? `Hello, ${user.name}` : <FormattedMessage id="login" />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
