import React from "react";
import pic from "../../Assets/home.gif";
import Navbar from "../../Components/Navbar/Navbar";
import "../Home/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home_page">
        <div className="home_heading">
          <h3 className="heading">Welcome,</h3>
          <div className="para">
            <p>“ WHEN DIET IS WRONG, MEDICINE IS OF NO USE.</p>
            <p> WHEN DIET IS CORRECT, MEDICINE IS OF NO NEED.”</p> – AYURVEDIC
            PROVERB
          </div>
          <div className="homebtn">
            <a href="/login" className="btn-new btn btn-primary btn-rounded">
              Get Started<i className="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>

        <img src={pic} className="home_img" alt="HomeImage" />
      </div>
    </>
  );
}

export default Home;
