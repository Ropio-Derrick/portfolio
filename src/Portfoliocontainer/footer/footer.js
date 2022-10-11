import React from "react";
import "./footer.css";

export default function footer() {
  return (
    <div className="Footer-Container">
      <div className="footer-parent">
        <img className="Photo" src={require("../../assets/img/see.png")} />
      </div>
      <div className="Footer-Specs">
        <div className="Right-Footer">
          <img
            className="Right-Specs"
            height={150}
            width={150}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeCURlLmp_F_mVeLYhMHj6O4JQm0k6N_Wrw&usqp=CAU"
          />
        </div>

        <div className="Left-Footer">
          <div className="Left-Specs">
            <h1>Platforms</h1>
            <div>
              <a href="https://www.instagram.com/ropio_derrick/">
                <i className="fab fa-instagram"> Instagram</i>
              </a>
              <a href="https://medium.com/@rodetuk">
                <i className="fab fa-github"> github</i>
              </a>
              <a href="https://ke.linkedin.com/in/derrick-ropio-a099a820a">
                <i className="fab fa-linkedin"> Linked In</i>
              </a>
              <a href="https://mobile.twitter.com/derrickropio">
                <i className="fab fa-twitter"> Twitter</i>
              </a>
              <a href="https://mobile.facebook.com/people/Ropio-Derrick/100009295641568?_rdc=1&_rdr">
                <a className="fab fa-facebook "> Facebook</a>
              </a>
            </div>
          </div>
          <div className="Left-Specs">
            <h1>Projects</h1>
            <div>
              <a>CliNza</a>
              <a>Evzedar</a>
              <a>Radar</a>
              <a>Chilre</a>
              <a>Crile</a>
            </div>
          </div>
          <div className="Left-Specs">
            <h1>Location</h1>
            <div className="Locator">
              <h1>
                Call: <span>0768047900</span>{" "}
              </h1>
              <h1>
                Email: <span>rodetuk@gmail.com</span>{" "}
              </h1>
              <h1>
                Location: <span>Nairobi, Kenya</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
