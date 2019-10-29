import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "./theme";

const activeStyle = {
  color: "#c81d86"
};

function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <React.Fragment>
          <div className="nav-bar">
            <NavLink to="/" className="hed-nav">
              <div className="hed-nav">HACKER NEWS</div>
            </NavLink>
          </div>
          <nav className="sub-nav-bar">
            <ul className="sub-nav-bar__row">
              <li className="nav-bar__item">
                <NavLink exact activeStyle={activeStyle} to="/">
                  Top
                </NavLink>
              </li>
              <li className="nav-bar__item">
                <NavLink activeStyle={activeStyle} to="/new">
                  New
                </NavLink>
              </li>
            </ul>
            <button
              style={{ fontSize: 30 }}
              className="btn-clear"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🔦" : "💡"}
            </button>
          </nav>
        </React.Fragment>
      )}
    </ThemeConsumer>
  );
}

export default Nav;
