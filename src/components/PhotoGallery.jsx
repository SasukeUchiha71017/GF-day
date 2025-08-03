import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    caption: "Thinking of you"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    caption: "Counting the days"
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    caption: "Dreaming of our first meeting"
  }
];

const PhotoGallery = () => (
  <section className="photo-gallery">
    <h2>Our Gallery</h2>
    <div className="gallery-grid">
      {images.map((img, idx) => (
        <div key={idx} className="gallery-item">
          <img src={img.src} alt={img.caption} />
          <p>{img.caption}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PhotoGallery; 