import React, { useEffect } from "react";
import useWebAnimation from "@wellyshen/use-web-animations";

export default function Buildings() {
  const { ref, getAnimation } = useWebAnimation({
    keyframes: [
      { transform: " translateX(calc(0% + 110vw))" },
      { transform: " translateX(-102%)" },
    ],
    timing: {
      duration: 50000,
      iterations: Infinity,
    },
  });

  useEffect(() => {
    getAnimation().play();
  });

  return (
    <div className="buildings" ref={ref}>
      <img
        src={process.env.PUBLIC_URL + "/images/buildings-img.png"}
        alt="buildings"
      />
    </div>
  );
}
