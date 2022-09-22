import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  const [activePurple, setActivePurple] = useState(false);

  return (
    <div className="traffic-light">
      <div className="post"></div>
      <div className="lights">
        <div
          className={color === "red" ? "light red brillo" : "light red"}
          onClick={(event) => {
            setColor("red");
          }}
        ></div>
        <div
          className={
            color === "yellow" ? "light yellow brillo" : "light yellow"
          }
          onClick={(event) => {
            setColor("yellow");
          }}
        ></div>
        <div
          className={color === "green" ? "light green brillo" : "light green"}
          onClick={(event) => {
            setColor("green");
          }}
        ></div>
        {activePurple?<div
          className={
                color === "purple"
                ? "light purple brillo"
                : "light purple"  
          }
          onClick={(event) => {
            setColor("purple");
          }}
        ></div>:null}
      </div>

      <div className="mt-2">
        <button
          className="btn btn-primary me-2"
          onClick={(event) => {
            if (color === "red") {
              setColor("yellow");
            } else if (color === "yellow") {
              setColor("green");
            } else if (color === "green" && activePurple === true) {
              setColor("purple");
            } else {
              setColor("red");
            }
          }}
        >
          Switch Color 🔁
        </button>
        <button
          className={activePurple ? "btn btn-danger" : "btn btn-success"}
          onClick={(event) => {
            if (activePurple === false) setActivePurple(true);
            else setActivePurple(false);
          }}
        >
          {activePurple ? "Remove Purple Color" : "Add Purple Color"}
        </button>
      </div>
    </div>
  );
};

export default Home;
