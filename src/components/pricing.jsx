import React, { Component } from "react";
import pricingImg from "../assets/images/pricing-img.png";
import pricingImg2 from "../assets/images/pricing-img-2.png";
import pricingImg3 from "../assets/images/pricing-img-3.png";

export default class Pricing extends Component {
  render() {
    return (
      <section className="pricing">
        <h1>Pricing</h1>
        <div className="pricing-container">
          <div className="pricing-box">
            <img src={pricingImg} alt="" />
            <div className="pricing-box-content">
              <h2>Self-study online course</h2>
              <p>Start learning English online in live classes with qualified EC teachers and students from all over the world.</p>
              <h3>
                {" "}
                £5.99 <span>per month</span>
              </h3>
            </div>
          </div>
          <div className="pricing-box">
            <img src={pricingImg2} alt="" />
            <div className="pricing-box-content">
              <h2>Live online classes</h2>
              <p>Interactive group classes with expert teachers. Free 7-day trial</p>
              <h3>
                {" "}
                £12.99 <span>per month</span>
              </h3>
            </div>
          </div>
          <div className="pricing-box">
            <img src={pricingImg3} alt="" />
            <div className="pricing-box-content">
              <h2>Personal Tuition</h2>
              <p>Online one-to-one English tutoring – enjoy our first session for only $1</p>
              <h3>
                {" "}
                £20.99 <span>per month</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
