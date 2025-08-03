import React, { useEffect, useState } from "react";

const targetDate = new Date("2025-08-01T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <h2>Countdown to Our First Meeting</h2>
      <div className="countdown-timer">
        <span>{timeLeft.days}d</span> :
        <span>{timeLeft.hours}h</span> :
        <span>{timeLeft.minutes}m</span> :
        <span>{timeLeft.seconds}s</span>
      </div>
      <p>(Placeholder date: August 1, 2025)</p>
    </section>
  );
};

export default Countdown; 