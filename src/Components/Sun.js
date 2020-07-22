import React from "react";

export default function Sun({ state, setState }) {
  const { time } = state;

  const handleClickOnSun = () => {
    if (time === "day") {
      setState({ time: "night" });
    } else {
      setState({ time: "day" });
    }
  };

  const SunMoon = () => {
    if (time === "night") {
      return (
        <img src={process.env.PUBLIC_URL + "/images/moon-img.png"} alt="moon" />
      );
    } else {
      return (
        <img src={process.env.PUBLIC_URL + "/images/sun-img.png"} alt="sun" />
      );
    }
  };

  return (
    <div className="sun" onClick={handleClickOnSun}>
      <SunMoon />
    </div>
  );
}
