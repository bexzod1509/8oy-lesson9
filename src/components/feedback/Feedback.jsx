import React from "react";
import man from "../../assets/man.png";
import star from "../../assets/Stars.svg";
import man2 from "../../assets/man 2.png";
import dots from "../../assets/Dots.svg";
import bigWatch from "../../assets/6426000_sd-removebg-preview 1.png";
function Feedback() {
  return (
    <>
      <section>
        <div className="container">
          <div className="d1">
            <p>Here are our some of the best clients.</p>
            <h1>What People Say About Us</h1>
          </div>
          <div className="d">
            <div className="d2">
              <img src={man} alt="" />
              <div>
                <h1>Hamza Faizi</h1>
                <p>
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img src={star} alt="" />
              </div>
            </div>
            <div className="d2">
              <img src={man2} alt="" />
              <div>
                <h1>Hafiz Huzaifa</h1>
                <p>
                  I’ve been purchasing smart watches of Mohid for a long time.
                  All the products are good quality.
                </p>
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="d3">
            <img src={dots} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="e">
            <div className="e1">
              <h1>Subscribe To Newsletter</h1>
              <p>Get free guide about smart watches daily.</p>
              <input type="email" placeholder="Enter Email Address" />
              <button className="v">Subscribe</button>
            </div>
            <div className="e2">
              <img src={bigWatch} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedback;
