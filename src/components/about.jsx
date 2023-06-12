import React, { Component } from "react";
import aboutUsImg from "../assets/images/about_us-img.png";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level
            (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
          </p>
          <div className="about-content-box">
            <div>
              <h2>800</h2>
              <p>Pupils</p>
            </div>
            <div>
              <h2>18</h2>
              <p>Teachers</p>
            </div>
            <div>
              <h2>6</h2>
              <p>Foreign languages</p>
            </div>
          </div>
        </div>
        <div className="about-img">
          <img src={aboutUsImg} alt="" />
        </div>
      </div>
    );
  }
}
