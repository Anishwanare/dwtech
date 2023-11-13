// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Careers from "./Pages/Careers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
