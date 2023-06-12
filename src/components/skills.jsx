import React from "react";
import SkillsContainer from "./skills-container";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <SkillsContainer />
      </div>
    );
  }
}
