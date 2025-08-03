import React, { useState, useEffect } from "react";
import "./App.css";
import AnimatedCard from "./components/AnimatedCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import { getSpotifyAuthUrl, getTokenFromUrl, clearToken } from "./spotifyAuth";

// const playlist = [
//   {
//     title: "Perfect - Ed Sheeran",
//     src: "https://cdns-preview-7.dzcdn.net/stream/c-7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e-6.mp3"
//   },
//   {
//     title: "All of Me - John Legend",
//     src: "https://cdns-preview-2.dzcdn.net/stream/c-2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e-6.mp3"
//   },
//   {
//     title: "Just the Way You Are - Bruno Mars",
//     src: "https://cdns-preview-6.dzcdn.net/stream/c-6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e6e-6.mp3"
//   },
//   {
//     title: "What Makes You Beautiful - One Direction",
//     src: "https://cdns-preview-2.dzcdn.net/stream/c-2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e-6.mp3"
//   },
//   {
//     title: "Stole My Heart - One Direction",
//     src: "https://cdns-preview-3.dzcdn.net/stream/c-3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e-6.mp3"
//   }
// ];

function getMidnightTime() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight;
}

function getTimeRemaining() {
  const now = new Date();
  const midnight = getMidnightTime();
  const diff = midnight - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { hours, minutes, seconds, diff };
}

export default function App() {
  // const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  // const [isMidnight, setIsMidnight] = useState(timeLeft.diff <= 0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const remaining = getTimeRemaining();
  //     setTimeLeft(remaining);
  //     setIsMidnight(remaining.diff <= 0);
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  // if (!isMidnight) {
  //   return (
  //     <div className="app-main">
  //       <div className="countdown-container">
  //         <h2>Opens after midnight tonight!</h2>
  //         <p>
  //           Countdown: {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
  //           {timeLeft.seconds}s
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const galleryImages = [
    {
      src: "your-image1.jpg",
      title: "Thinking of you",
      description: "Thinking of you"
    },
    {
      src: "your-image2.jpg",
      title: "Counting the days",
      description: "Counting the days"
    },
    {
      src: "your-image3.jpg",
      title: "Memories",
      description: "Memories"
    }
  ];

  // const [currentSong, setCurrentSong] = useState(0); // Start with 'Perfect'
  // const [audioKey, setAudioKey] = useState(0); // To force audio reload
  // const [musicStarted, setMusicStarted] = useState(false);
  // const [spotifyToken, setSpotifyToken] = useState(null);

  // useEffect(() => {
  //   const token = getTokenFromUrl();
  //   if (token) {
  //     setSpotifyToken(token);
  //     clearToken();
  //   }
  // }, []);

  // // Remove autoplay on mount, only play after user interaction
  // // useEffect(() => {
  // //   setCurrentSong(0);
  // //   setAudioKey(prev => prev + 1);
  // // }, []);

  // const changeMusic = () => {
  //   let next;
  //   do {
  //     next = Math.floor(Math.random() * playlist.length);
  //   } while (next === currentSong && playlist.length > 1);
  //   setCurrentSong(next);
  //   setAudioKey(prev => prev + 1);
  // };

  return (
    <div className="app-main">
      {/* Spotify Connect Button Overlay */}
      {/*
      {!spotifyToken && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(60,20,60,0.85)", zIndex: 9999, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
        }}>
          <a
            href={getSpotifyAuthUrl()}
            style={{ fontSize: 28, padding: "24px 48px", borderRadius: 32, background: "#1db954", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px #1db95430", marginBottom: 24, textDecoration: "none" }}
          >
            🎵 Connect to Spotify
          </a>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: 500, marginTop: 16 }}>Connect to Spotify to enable music features!</div>
        </div>
      )}
      {spotifyToken && !musicStarted && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(60,20,60,0.85)", zIndex: 9999, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
        }}>
          <button
            onClick={() => { setMusicStarted(true); setAudioKey(prev => prev + 1); }}
            style={{ fontSize: 28, padding: "24px 48px", borderRadius: 32, background: "#e75480", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px #e7548030", marginBottom: 24 }}
          >
            ▶️ Play Music
          </button>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: 500 }}>Click to start the music and experience the magic!</div>
        </div>
      )}
      {spotifyToken && musicStarted && (
        <div style={{ position: "fixed", top: 10, left: 0, width: "100%", zIndex: 100, display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <button onClick={changeMusic} style={{ padding: "8px 18px", borderRadius: 20, background: "#e75480", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer", fontSize: 16, boxShadow: "0 2px 8px #e7548030" }}>
            Change Music
          </button>
          <span style={{ color: "#e75480", fontWeight: 600, fontSize: 16 }}>
            {playlist[currentSong].title}
          </span>
          <audio
            key={audioKey}
            src={playlist[currentSong].src}
            autoPlay
            controls
            style={{ verticalAlign: "middle", marginLeft: 12, height: 32 }}
          />
        </div>
      )}
      {spotifyToken && musicStarted && <div style={{ height: 60 }} />} 
      */}
      <AnimatedCard direction="left" className="align-left">
        <div>
          <div className="stylish-title">Happy National Girlfriend's Day!</div>
          <div className="stylish-subtitle">
            Even though we may be miles apart, my love for you grows stronger
            every day. This little website is just for you, to celebrate our
            journey and the special bond we share. I can't wait for the day we
            finally meet in person!
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard direction="right" className="align-right">
        <div>
          <div className="stylish-section-title">Our Gallery</div>
          <div className="stylish-gallery">
            {[
              { src: "img-1.jpg", title: "Thinking of you" },
              { src: "img-3.jpg", title: "Counting the days" },
              { src: "img-4.jpg", title: "Memories" }
            ].map((img, idx) => (
              <div key={img.src}>
                <img
                  src={img.src}
                  alt={img.title}
                  style={{ cursor: "pointer" }}
                  onClick={() => { setLightboxIndex(idx); setLightboxOpen(true); }}
                />
                <div className="stylish-gallery-caption">{img.title}</div>
              </div>
            ))}
          </div>
        </div>
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={[
              { src: "img-1.jpg", description: "Thinking of you" },
              { src: "img-3.jpg", description: "Counting the days" },
              { src: "img-4.jpg", description: "Memories" }
            ]}
            index={lightboxIndex}
          />
        )}
      </AnimatedCard>

      <AnimatedCard direction="left" className="align-left">
        <div>
          <div className="stylish-section-title">Why I Love You</div>
          <ul className="stylish-list">
            <li>Your smile brightens my darkest days.</li>
            <li>You always support and encourage me.</li>
            <li>We share so many beautiful memories.</li>
            <li>You make me laugh and feel loved.</li>
            <li>I love everything about you!</li>
          </ul>
        </div>
      </AnimatedCard>

      <AnimatedCard direction="right" className="align-right">
        <div>
          <div className="stylish-section-title">Our Journey</div>
          <ul className="stylish-list">
            <li>June 2023: We started talking</li>
            <li>January 2024: We met for the first time</li>
            <li>7th February 2024: We confessed our love for each other</li>
            <li>7th February 2024: We started our relationship</li>
            <li>1st August 2025: Still together, still strong!</li>
          </ul>
        </div>
      </AnimatedCard>
    </div>
  );
}
