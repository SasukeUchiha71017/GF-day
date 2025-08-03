import React from "react";

const events = [
  { date: "2023-08-01", description: "We met online and started talking." },
  { date: "2023-09-15", description: "Our first video call!" },
  { date: "2024-01-01", description: "Celebrated New Year together (virtually)." },
  { date: "2024-08-01", description: "Our first National Girlfriend's Day!" }
];

const Timeline = () => (
  <section className="timeline">
    <h2>Our Journey</h2>
    <ul>
      {events.map((event, idx) => (
        <li key={idx}>
          <strong>{event.date}</strong>: {event.description}
        </li>
      ))}
    </ul>
  </section>
);

export default Timeline; 