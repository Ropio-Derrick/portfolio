import React, { useState } from "react";
import "./Flooper.css";

function Floop() {
  const [block, setBlock] = useState(false);
  const [color, setColor] = useState(false);
  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [flag, setFlag] = useState();
  const [flag1, setFlag1] = useState();
  const [flag2, setFlag2] = useState();

  const Changer = () => {
    setBlock(!flag);
    setFlag(block);
  };
  const Changer1 = () => {
    setBlock1(!flag1);
    setFlag1(block1);
  };

  const Changer2 = () => {
    setBlock2(!flag2);
    setFlag2(block2);
  };

  return (
    <div className="Flooper">
      <div
        className="Block-Floop"
        onMouseOverCapture={Changer}
        onClick={Changer}
        style={
          !flag
            ? {
                backgroundColor: "transparent",
                transition: "all 0.25s ease-in-out",
                border: "1px solid white",
              }
            : {
                backgroundColor: "white",
                transition: "all 0.25ss ease-in-out",
                border: "1px solid white",
              }
        }
      >
        {!flag ? (
          <div className="">
            <h1
              className="Header-Floop"
              style={{
                transition: "all 5s ease",
                color: "white",
              }}
            >
              Website <br /> Development
            </h1>
          </div>
        ) : (
          <div
            className=""
            style={{
              transition: "all 0.25ss ease-in",
              color: "#1f2235",
            }}
          >
            <div className="Header-Floop1">
              <h6>HTML</h6>
              <h6>CSS</h6>
              <h6>JS</h6>
            </div>
          </div>
        )}
      </div>
      <div
        className="Block-Floop"
        onMouseOver={Changer1}
        onClick={Changer1}
        style={
          !flag1
            ? {
                backgroundColor: "transparent",
                transition: "all 0.25s ease-in-out",
                border: "1px solid white",
              }
            : {
                backgroundColor: "white",
                transition: "all 0.25ss ease-in",
                border: "1px solid white",
              }
        }
      >
        {!flag1 ? (
          <div>
            <h1
              className="Header-Floop"
              style={{
                transition: "all 0.25ss ease-in",
                color: "white",
              }}
            >
              Web-Apps <br /> Development
            </h1>
          </div>
        ) : (
          <div
            style={{
              transition: "all 0.25ss ease-in",
              color: "#1f2235",
            }}
          >
            <div className="Header-Floop1">
              <h6>React</h6>
              <h6>Next</h6>
              <h6>Express</h6>
              <h6>Node </h6>
            </div>
          </div>
        )}
      </div>
      <div
        className="Block-Floop"
        onMouseOver={Changer2}
        onClick={Changer2}
        style={
          !flag2
            ? {
                backgroundColor: "transparent",
                transition: "all 0.25s ease-in-out",
                border: "1px solid white",
              }
            : {
                backgroundColor: "white",
                transition: "all 0.25ss ease-in",
                border: "1px solid white",
              }
        }
      >
        {!flag2 ? (
          <div>
            <h1
              className="Header-Floop"
              style={{
                transition: "all 0.25ss ease-in",
                color: "white",
              }}
            >
              Mobile Apps
              <br /> Development
            </h1>
          </div>
        ) : (
          <div
            style={{
              transition: "all 0.25ss ease-in",
              color: "#1f2235",
            }}
          >
            <div className="Header-Floop1">
              <h6>React Native</h6>
              <h6>Express</h6>
              <h6>Node </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Floop;
