import React, { useRef, useEffect } from "react";
import "vov.css"; // Import VOV.css animations

const Vov = ({ animation, duration = "1s", delay = "0s", children, onAnimationEnd }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    if (element) {
      // Apply animation properties
      element.style.animationDuration = duration;
      element.style.animationDelay = delay;
      element.classList.add(`vov`);
      element.classList.add(`${animation}`);

      // Handle animation end
      const handleAnimationEnd = () => {
        element.classList.remove(`vov`);
        element.classList.remove(`${animation}`);
        if (onAnimationEnd) onAnimationEnd();
      };

      element.addEventListener("animationend", handleAnimationEnd);

      return () => {
        element.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [animation, duration, delay, onAnimationEnd]);

  return <div ref={ref}>{children}</div>;
};

export default Vov;
