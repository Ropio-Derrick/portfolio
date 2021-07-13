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
            src={require("../../assets/img/favicon.png")}
          />
        </div>
        <div className="Left-Footer">
          <div className="Left-Specs">
            <h1>Platforms</h1>
            <div>
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Instagram</a>
              <a>LinkedIn</a>
              <a>Dribble</a>
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
