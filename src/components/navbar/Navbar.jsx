import React, { useState } from "react";
import AppleWatch from "../../assets/Apple Watch.png";
import down from "../../assets/chevron-down.svg";
import cart from "../../assets/Search.png";
import person from "../../assets/Person.png";
import shop from "../../assets/Shopping Cart.png";
import search from "../../assets/search.svg";
import watches from "../../assets/watches.png";
import apple from "../../assets/apple-watch.png";
import redmi from "../../assets/xiaomi_redmi_watch.png";
import remove from "../../assets/removebg-preview 1.png";
function Navbar({ dark, setDark }) {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar-shrink">
            <div className="a1">
              <img src={AppleWatch} alt="watch" />
              <span>Mohid</span>
            </div>
            <div className="a2">
              <a href="#">Home</a>
              <a href="#">
                Brands <img src={down} alt="" />
              </a>
              <a href="#">Recent Products</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </div>
            <div className="a3">
              <img src={cart} alt="" />
              <img src={person} alt="" />
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
      <div className="a4">
        <div>
          <h1>Discover Most Suitable Watches</h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <img className="a5" src={search} alt="" />
          <input type="text" placeholder="Find the best brands" />
          <button>Search</button>
        </div>
        <img src={watches} alt="" />
      </div>
      <section>
        <div className="container">
          <div className="b">
            <div className="b1">
              <img src={apple} alt="" />
              <div>
                <h1>Apple</h1>
                <p>
                  Apple is one of the most famous smart watches providing
                  company.
                </p>
              </div>
            </div>
            <div className="b1">
              <img src={redmi} alt="" />
              <div>
                <h1>Xiaomi</h1>
                <p>Xiaomi smart watches are produced by MI company.</p>
              </div>
            </div>
            <div className="b1" id="lastchild">
              <img src={remove} alt="" />
              <div>
                <h1>FitBit</h1>
                <p>
                  FitBit smart watches are best for there health and fitness
                  features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
