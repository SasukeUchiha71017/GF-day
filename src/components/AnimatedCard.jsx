import { motion } from "framer-motion";
import HeartsBurst from "./HeartsBurst";
import React, { useState } from "react";

const AnimatedCard = ({ children, direction = "left", className = "" }) => {
  const [showHearts, setShowHearts] = useState(false);
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 },
    },
  };

  return (
    <motion.div
      className={`stylish-card ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      onAnimationComplete={() => setShowHearts(true)}
      style={{ position: "relative", overflow: "visible" }}
    >
      <HeartsBurst trigger={showHearts} />
      {children}
    </motion.div>
  );
};

export default AnimatedCard;