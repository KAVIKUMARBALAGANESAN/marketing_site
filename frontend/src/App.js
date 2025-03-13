import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Luxury Scented Candles | Candle Store</title>
        <meta name="description" content="Discover handcrafted luxury scented candles. Shop premium quality candles for a relaxing ambiance." />
      </Helmet>

      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
