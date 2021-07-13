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
                boxShadow: "inset 3px 2px 30px 10px #00000030",
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
              <p>
                Perfect website relates to Perfect online, we design websites
                with customized features and classic design powered by the
                latest web development technology.{" "}
              </p>
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
                boxShadow: "inset 3px 2px 30px 10px #00000030",
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
              <p>
                I design and develop unique, fast, customized for you and
                scalable web applications with awesome functionality for people,
                businesses, companies and organizations.{" "}
              </p>
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
                boxShadow: "inset 3px 2px 30px 10px #00000030",
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
              <p>
                Get android mobile applications , IOS apps and cross-platform
                applications for you, with fast, scalable, and customizable
                features ready for you. .{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Floop;
