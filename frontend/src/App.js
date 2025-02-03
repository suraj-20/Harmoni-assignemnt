import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* Add other routes as needed */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
