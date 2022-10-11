import React from "react";
import "./Home.css";
import Profile from "../Profiles/Profile";
import Footer from "../footer/footer";
import AboutMe from "../AboutMe/AboutMe";
import Done from "../Done/Done";
// import Motionslider from '../Animations/motionslider'
// import Slide1 from '../Animations/Slide1';

export default function Home() {
  return (
    <div className="home-container">
      <Profile />

      <AboutMe />

      <Done />

      <Footer />

   
    </div>
  );
}
