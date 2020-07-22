import React, { useEffect } from "react";
import useWebAnimation from "@wellyshen/use-web-animations";

export default function Car() {
  const { ref, getAnimation } = useWebAnimation({
    keyframes: [
      { transform: "translateX(-100%)" },
      { transform: "translateX(80%)" },
    ],
    timing: {
      duration: 50000,
      direction: "alternate",
      iterations: Infinity,
    },
  });

  useEffect(() => {
    getAnimation().play();
  });

  return (
    <div className="car" ref={ref}>
      <img src={process.env.PUBLIC_URL + "/images/car-img.gif"} alt="car" />
    </div>
  );
}
