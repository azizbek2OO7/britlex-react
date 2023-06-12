import React, { Component } from "react";
import line from "../assets/images/line.svg";
import britlexLogo from "../assets/images/britlex-logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={line} alt="" />
        <div className="footer-box">
          <img src={britlexLogo} alt="" />
          <h3>Terms and Conditions • Privacy Policy • Cookie Policy</h3>
        </div>
      </footer>
    );
  }
}
