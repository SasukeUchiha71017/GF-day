import React, { useEffect, useState } from "react";
import "./HeartsBurst.css";

const NUM_HEARTS = 12;

const HeartsBurst = ({ trigger }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Initial trigger
    if (trigger) {
      setShow(true);
      const timeout = setTimeout(() => setShow(false), 1200);
      
      // Set up interval for every 3 seconds
      const interval = setInterval(() => {
        setShow(true);
        setTimeout(() => setShow(false), 1200);
      }, 3000);
      
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="hearts-burst">
      {Array.from({ length: NUM_HEARTS }).map((_, i) => (
        <span key={i} className={`heart heart-${i}`}>❤️</span>
      ))}
    </div>
  );
};

export default HeartsBurst;