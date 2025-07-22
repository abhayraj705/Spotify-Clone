import React from 'react';
import './App.css';

function App() {
  return (
    <div className="spotify-app">
      <aside className="sidebar">
        <div className="sidebar-logo">Spotify</div>
        <nav className="sidebar-nav">
          <a href="#" className="active">Home</a>
          <a href="#">Search</a>
          <a href="#">Your Library</a>
        </nav>
        <div className="sidebar-playlists">
          <div className="playlist-title">PLAYLISTS</div>
          <ul>
            <li>Chill Hits</li>
            <li>Top 50 Global</li>
            <li>Workout</li>
            <li>Discover Weekly</li>
          </ul>
        </div>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h2>Good Afternoon</h2>
        </header>
        <section className="playlist-section">
          <div className="playlist-card">
            <div className="playlist-img" />
            <div className="playlist-info">
              <span className="playlist-name">Chill Hits</span>
              <span className="playlist-desc">Kick back to the best new and recent chill hits.</span>
            </div>
          </div>
          <div className="playlist-card">
            <div className="playlist-img" />
            <div className="playlist-info">
              <span className="playlist-name">Top 50 Global</span>
              <span className="playlist-desc">Your daily update of the most played tracks right now.</span>
            </div>
          </div>
          <div className="playlist-card">
            <div className="playlist-img" />
            <div className="playlist-info">
              <span className="playlist-name">Workout</span>
              <span className="playlist-desc">Get your heart pumping with these workout tracks.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="player-bar">
        <div className="player-song-info">
          <div className="song-title">Song Title</div>
          <div className="song-artist">Artist Name</div>
        </div>
        <div className="player-controls">
          <button>&lt;&lt;</button>
          <button>Play</button>
          <button>&gt;&gt;</button>
        </div>
        <div className="player-extra">
          <span>00:00 / 03:30</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
