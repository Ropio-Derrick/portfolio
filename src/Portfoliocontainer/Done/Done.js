import React from "react";
import "./Done.css";

function Done() {
  return (
    <div className="House-Done">
      <div className="Done-Right">
        <h1 className="Header-Done">My Work</h1>
        <div className="Liner">
          <hr />
        </div>
        <div className="Baggy" />
        <div className="Work1" />
        <div className="Work2" />
      </div>
      <div className="Done-Left">
        <div className="Rater">
          <hr className="hrRater" />
        </div>
      </div>
    </div>
  );
}

export default Done;
