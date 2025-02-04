import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsRef = useRef(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Header
        setProducts={setProducts}
        scrollToProducts={scrollToProducts}
        cartCount={cartCount}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              loading={loading}
              productsRef={productsRef}
              setCartCount={setCartCount}
              cartCount={cartCount}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
