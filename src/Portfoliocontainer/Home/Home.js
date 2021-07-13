import React from "react";
import "./Home.css";
import Profile from "../Profiles/Profile";
import Footer from "../footer/footer";
import AboutMe from "../AboutMe/AboutMe";
// import Motionslider from '../Animations/motionslider'
// import Slide1 from '../Animations/Slide1';

export default function Home() {
  return (
    <div className="home-container">
      <Profile />

      <AboutMe />
      {/* <Footer /> */}
      {/* 
    <Slide1/> */}
    </div>
  );
}
