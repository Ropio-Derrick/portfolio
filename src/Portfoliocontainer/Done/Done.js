import React from "react";
import Form from "../Form/Form";
import "./Done.css";

function Done() {
  return (
    <div className="House-Done">
      <div className="Done-Right">
        <h1 className="Header-Done">My Work</h1>

        <img className="Baggy" />
        <img className="Work1" />
        <img className="Work2" />
      </div>
      <div className="Done-Left">
        <Form />
      </div>
    </div>
  );
}

export default Done;
