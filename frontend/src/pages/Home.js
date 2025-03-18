import React from 'react';
import './Home.css';  // Import your CSS for styling if needed

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Candle Store</h1>
        <p>Discover the best candles for your home.</p>
      </header>

      <section className="home-banner">
        <img src="candle-banner.jpg" alt="Candle Banner" />
      </section>

      <footer className="home-footer">
        <p>Explore our wide range of scented and decorative candles!</p>
        <p>&copy; 2025 Candle Business. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
