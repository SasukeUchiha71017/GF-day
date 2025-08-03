import React from "react";

const reasons = [
  "You always make me smile, even from miles away.",
  "Our late-night talks mean the world to me.",
  "You inspire me to be my best self.",
  "Your support makes every day brighter.",
  "I love dreaming about our future together."
];

const ReasonsList = () => (
  <section className="reasons-list">
    <h2>Why I Love You</h2>
    <ul>
      {reasons.map((reason, idx) => (
        <li key={idx}>{reason}</li>
      ))}
    </ul>
  </section>
);

export default ReasonsList; 