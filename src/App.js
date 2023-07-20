import "./sass/main.scss";
import "./App.css";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}
