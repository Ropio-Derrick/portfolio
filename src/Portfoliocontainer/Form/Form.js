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
            transform: " rotateX(180deg) rotateY(180deg) rotateZ(180deg)   ",
            transition: "all 0.25s ease-in",
          }}
        >
          <h1 className="Set-Header">My Top Set</h1>
          <div className="Displayer">
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
            />
            <img
              className="iconer"
              src={require("../../assets/img/favicon.png")}
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
                <input className="Name-Form" type="text" placeholder="Name" />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Email-Form"
                  type="email"
                  aria-required
                  placeholder="Email"
                />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Subject-Form"
                  type="subject"
                  aria-required
                  placeholder="Subject"
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
