import React from "react";
import skillsBoxImg from "../assets/images/skills-box-img.png";
import skillsBoxImg2 from "../assets/images/skills-box-img-2.png";
import skillsBoxImg3 from "../assets/images/skills-box-img-3.png";
import skillsBoxImg4 from "../assets/images/skills-box-img-4.png";
import Btn from "./button";

export default class SkillsContainer extends React.Component {
  render() {
    return (
      <div className="skills-container">
        <div className="skills-box skills-box-1">
          <img src={skillsBoxImg} alt="" />
          <div className="skills-box-content">
            <h2>Speaking</h2>
            <div className="scroll">
              <p>Improve your English skills and confidence. classes and interactive lessons online. 20% extra free for a limited time only</p>
              <p>Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.</p>
            </div>
            <Btn />
          </div>
        </div>
        <div className="skills-box skills-box-2">
          <img src={skillsBoxImg2} alt="" />
          <div className="skills-box-content">
            <h2>Writing</h2>
            <p>One of the most important and extensive areas of natural science, the science that studies substances, also their composition </p>
            <Btn />
          </div>
        </div>
        <div className="skills-box skills-box-3">
          <img src={skillsBoxImg3} alt="" />
          <div className="skills-box-content">
            <h2>Reading</h2>
            <p>perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service</p>
            <Btn />
          </div>
        </div>
        <div className="skills-box skills-box-4">
          <img src={skillsBoxImg4} alt="" />
          <div className="skills-box-content">
            <h2>Listening</h2>
            <p>Here you can find activities to practise your listening skills. Listening will help you to improve your understanding</p>
            <Btn />
          </div>
        </div>
      </div>
    );
  }
}
