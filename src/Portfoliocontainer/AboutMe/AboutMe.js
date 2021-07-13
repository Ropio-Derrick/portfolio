import React from "react";
import { Motion, spring, presets } from "react-motion";

import Floop from "../Floopers/Floop";
import "./About.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="Me">
        <h1 className="Myself">
          Hello! I’m Ropio Derrick a{" "}
          <span className="Myselfspanner">Web developer</span>,{" "}
          <span className="Myselfspanner">Mobile App developer</span> and{" "}
          <span className="Myselfspanner">Software developer</span>. I love
          designing and developing websites,web applications and mobile Apps. I
          am a fast learner, hard worker and team player who is proficient in an
          array of programming languages and powerful javascript developer. I
          work closely with my clients to deliver the best possible solutions
          for their needs.
        </h1>
        <h1 className="Myself">
        I love
          designing and developing websites,web applications and mobile Apps. I
          am a fast learner, hard worker and team player who is proficient in an
          array of programming languages and powerful javascript developer. I
          work closely with my clients to deliver the best possible solutions
          for their needs.
        </h1>
      </div>
      <div>
        <Floop />
      </div>
    </div>
  );
}

export default AboutMe;
