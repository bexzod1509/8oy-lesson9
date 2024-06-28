import React from "react";
import search from "../../assets/search.svg";
import watches from "../../assets/watches.png";
import apple from "../../assets/apple-watch.png";
import redmi from "../../assets/xiaomi_redmi_watch.png";
import remove from "../../assets/removebg-preview 1.png";
function Hero() {
  return (
    <>
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

export default Hero;
