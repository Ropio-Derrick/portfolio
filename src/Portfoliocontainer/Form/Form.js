import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [changer, setChanger] = useState(false);
  const [flag, setFlag] = useState();
  const pageChanger = () => {
    setChanger(flag);
    setFlag(!changer);
  };
  return (
    <div className="Former-Main">
      {!flag ? (
        <div
          className="Former"
          style={{
            transform: " rotateX(180deg) rotateY(180deg) rotateZ(180deg)  ",
            transition: "all 0.25s ease-in",
          }}
        >
          <h1 className="Set-Header">My Skills</h1>
          <div className="Displayer">
            <img
              className="iconer"
              src="https://image.pngaaa.com/946/2507946-small.png"
            />
            <img
              className="iconer"
              src="https://image.pngaaa.com/476/7820476-small.png"
            />
          </div>
        </div>
      ) : (
        <div
          className="Former"
          style={{
            transform: "rotateY(180deg) rotateZ(-180deg)  rotateX(-180deg) ",

            transition: "all 0.25s ease-out",
          }}
        >
          <form>
            <h1 className="Email-Header">Reach Out</h1>

            <div className="Form-Placer">
              <div className="Name-Sitter">
                <input
                  className="Name-Form"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Email-Form"
                  type="email"
                  aria-required
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Subject-Form"
                  type="subject"
                  aria-required
                  placeholder="Enter YOur Subject"
                />
              </div>
            </div>
            <div className="button-placer">
              <button className="smt-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
      <div className="button-placer1">
        {!flag ? (
          <button className="smt-btn1" onClick={pageChanger}>
            Chat
          </button>
        ) : (
          <button className="smt-btn2" onClick={pageChanger}>
            Set
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
