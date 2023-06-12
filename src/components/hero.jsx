import React from "react";
import lightImg from "../assets/images/light-img.png";
import heroImg from "../assets/images/hero-img.png";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-content">
          <div className="hero-content-top">
            <div>
              <h1>Learn Any Foreign Language</h1>
            </div>
            <img src={lightImg} alt="" />
          </div>
          <p>With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.</p>
          <button>Get started</button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    );
  }
}
