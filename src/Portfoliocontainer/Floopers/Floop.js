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
              <img
                height={60}
                width={60}
                src="data:image/png;base64,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"
              />
              <img
                height={60}
                width={60}
                src="data:image/png;base64,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"
              />
              <img
                height={60}
                width={60}
                src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
              />
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
              <img
                height={60}
                width={60}
                src="data:image/png;base64,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"
              />
              <img
                height={60}
                width={60}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmxT6nhWS0ojRUOHmgLtViQJocEqoyHtfrkyLCXSDT9qWUfzne5Tsy29Sux0HShfRYYY&usqp=CAU"
              />
              <img
                height={60}
                width={60}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
              />

              <img
                height={60}
                width={60}
                src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
              />
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
              <img
                height={60}
                width={60}
                src="data:image/png;base64,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"
              />

              <img
                height={60}
                width={60}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
              />

              <img
                height={60}
                width={60}
                src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Floop;
