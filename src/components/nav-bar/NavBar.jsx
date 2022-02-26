import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../contexts/UserAuthContext";

import Overlay from "../overlay/Overlay";

import "./navBar-styles.scss";

import logo from "../../assets/logo.svg";

const NavBar = () => {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => setIsActive(!isActive);
  const removeActiveClass = () => setIsActive(false);

  useEffect(() => {
    isActive && (document.body.style.overflow = "hidden");
    !isActive && (document.body.style.overflow = "unset");
  }, [isActive]);

  return (
    <>
      <nav className="nav-bar">
        <img className="logo-img" src={logo} />
        <ul
          className={`navbar-list-container ${isActive ? "active" : ""}`}
          onClick={removeActiveClass}
        >
          <li className="navbar-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/pokedex">Pokédex</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/legendaries">Legendaries</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/documentation">Documentation</NavLink>
          </li>
          {user && (
            <li className="navbar-item">
              <NavLink to="/user">Welcome {user.name}</NavLink>
            </li>
          )}
        </ul>

        <label onClick={toggleNavBar} id="icon">
          <i className="fas fa-bars fa-2x" />
        </label>
      </nav>

      <Overlay
        onClick={removeActiveClass}
        className={isActive ? "active" : ""}
      />
    </>
  );
};

export default NavBar;
