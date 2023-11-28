import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Family from "./pages/Family";
import Sermons from "./pages/Sermons";
import Biography from "./pages/Biography";
import Contact from "./pages/Contact";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import 'flowbite/dist/flowbite.min.js';
import 'flowbite-react';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<Family />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
