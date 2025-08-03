import React from "react";

const songs = [
  {
    title: "All of Me",
    artist: "John Legend",
    link: "https://www.youtube.com/watch?v=450p7goxZqg"
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g"
  },
  {
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    link: "https://www.youtube.com/watch?v=LjhCEhWiKXk"
  }
];

const Playlist = () => (
  <section className="playlist">
    <h2>Our Playlist</h2>
    <ul>
      {songs.map((song, idx) => (
        <li key={idx}>
          <a href={song.link} target="_blank" rel="noopener noreferrer">
            {song.title} - {song.artist}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Playlist; 