import React, { useState, useEffect } from "react";
import "./App.css";

import Sun from "./Components/Sun";
import Car from "./Components/Car";
import Buildings from "./Components/Buildings";

function App() {
  const [state, setState] = useState({ time: "day" });

  const { time } = state;

  const checkTime = () => {
    if (time === "night") {
      document.querySelector(
        "body"
      ).style = `background: linear-gradient(0deg, rgb(88, 99, 121) 0%, rgb(1, 31, 58) 100%);`;

      let nightGrassStyle = `background: linear-gradient(0deg, rgb(90, 134, 1) 0%, rgb(1, 105, 1) 100%);`;
      document.querySelector(".grass").style = nightGrassStyle;
      document.querySelector(".grassBot").style = nightGrassStyle;

      //   background: linear-gradient(0deg, rgb(90, 134, 1) 0%, rgb(1, 105, 1) 100%);
    } else {
      document.querySelector(
        "body"
      ).style = `background: linear-gradient(0deg,rgba(255, 255, 255, 1) 0%,rgba(98, 138, 174, 1) 100%);`;

      let dayGrassStyle = `background: linear-gradient(0deg,rgba(147, 223, 0, 1) 0%,rgba(0, 177, 0, 1) 100%);`;
      document.querySelector(".grass").style = dayGrassStyle;
      document.querySelector(".grassBot").style = dayGrassStyle;
    }
  };

  useEffect(() => {
    checkTime();
  });

  return (
    <div className="wrapper">
      <p className="topMessage">
        <li>
          {" "}
          Click on <b>{time === "night" ? "Moon" : "Sun"}</b> to change Time
        </li>
      </p>
      <Sun state={state} setState={setState} />
      <Car />
      <div className="bottom">
        <Buildings />
        <div className="grass grassTop">.</div>
        <div className="road">
          <div className="sep">. </div>
        </div>
        <div className="grass grassBot">.</div>
      </div>
    </div>
  );
}

export default App;
