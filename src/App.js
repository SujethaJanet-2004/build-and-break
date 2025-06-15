import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';

function App() {
  const [xp, setXp] = useState(120);
  const [level, setLevel] = useState(2);

  const gainXP = (amount) => {
    const newXP = xp + amount;
    if (newXP >= 100) {
      setLevel((prev) => prev + 1);
      setXp(newXP - 100); // carry over extra XP
    } else {
      setXp(newXP);
    }
  };

  return (
    <Router>
      <nav className="game-header">
        <div className="logo">🛠️ Build & Break</div>
        <div className="profile-bar">
          <span>👤 Sujetha</span>
          <span>⚡ Level {level}</span>
          <span>🔥 XP: {xp}/100</span>
        </div>
      </nav>

      <nav className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/challenges">🧩 Challenges</Link>
        <Link to="/leaderboard">🏆 Leaderboard</Link>
      </nav>

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges gainXP={gainXP} />} />
          <Route path="/challenges/:id" element={<Challenges gainXP={gainXP} />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
