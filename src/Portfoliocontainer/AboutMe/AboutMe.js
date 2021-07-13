import React from "react";
import { Motion, spring, presets } from "react-motion";

import Floop from "../Floopers/Floop";
import "./About.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="Me">
        <h1 className="Myself">
          Hello! I’m Ropio Derrick a programmer, i have specialize in{" "}
          <span className="Myselfspanner">Web development</span>,{" "}
          <span className="Myselfspanner">Mobile App development</span> and{" "}
          <span className="Myselfspanner">Software development</span>. I love
          designing and developing websites,web applications and mobile Apps. I
          am a fast learner, hard worker and team player who is proficient in an
          array of standard programming languages and definately powerful
          javascript developer. I work closely with my clients to deliver the
          best possible solutions for their needs.
        </h1>
        <h1 className="Myself">
          I have worked with a couple of teams and firms for both Website
          development and Web Applications development. I am proficient with CMS
          softwares like WordPress and graphic design packs like Adobe, well
          familiar with hosting services that can make your designed website
          safe and secure online.
        </h1>
      </div>
      <div>
        <Floop />
      </div>
    </div>
  );
}

export default AboutMe;
