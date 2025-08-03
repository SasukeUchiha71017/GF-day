import React, { useRef, useEffect, useState } from "react";
import "./SlideIn.css";

const SlideIn = ({ children, direction = "left", threshold = 0.1 }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`slide-in ${direction} ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default SlideIn;