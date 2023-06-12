import React from "react";
import britlexLogo from "../assets/images/britlex-logo.svg";
import navbarBar from "../assets/images/navbar-bar.svg";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img src={britlexLogo} alt="" />
        <div className="navbar-menu">
          <a href={"./#"}>Home</a>
          <a href={"./#"}>Skills</a>
          <a href={"./#"}>About Us</a>
          <a href={"./#"}>Pricing</a>
          <a href={"./#"}>Contacts</a>
        </div>
        <div className="navbar-btn">
          <button>Let's Talk</button>
        </div>
        <div className="navbar-bar">
          <img src={navbarBar} alt="" />
        </div>
      </div>
    );
  }
}
