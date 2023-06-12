import React, { Component } from "react";
import contactImg from "../assets/images/contact-img.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img src={contactImg} alt="" />
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources</p>
          <form action="">
            <input type="search" placeholder="Enter Your E-mail" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    );
  }
}
