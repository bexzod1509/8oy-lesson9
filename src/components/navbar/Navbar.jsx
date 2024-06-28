import React, { useState } from "react";
import AppleWatch from "../../assets/Apple Watch.png";
import down from "../../assets/chevron-down.svg";
import cart from "../../assets/Search.png";
import person from "../../assets/Person.png";
import shop from "../../assets/Shopping Cart.png";
import { NavLink } from "react-router-dom";
function Navbar({ dark, setDark }) {
  sessionStorage.setItem("dark", dark);
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar-shrink">
            <NavLink to={"/"} style={{ textDecoration: "none" }}>
              <div className="a1">
                <img src={AppleWatch} alt="watch" />
                <span>Mohid</span>
              </div>
            </NavLink>
            <div className="a2">
              <NavLink to={"/"}>Home</NavLink>
              <a href="#">
                Brands <img src={down} alt="" />
              </a>
              <a href="#">Recent Products</a>
              <NavLink to={"/login"}>Login</NavLink>
              <a href="#">About</a>
            </div>
            <div className="a3">
              <img src={cart} alt="" />
              <NavLink to={"/admin"}>
                <img src={person} alt="" />
              </NavLink>
              <img src={shop} alt="" />
            </div>
            <div className="dar">Dark Mode</div>
            <button onClick={() => setDark((p) => !p)} id="light-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 11.807A9.002 9.002 0 0 1 
               10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 
               10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 
               9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
