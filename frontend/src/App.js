import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Lock from "./Pages/Lock";
import Phase from "./Pages/Phase";

function App() {
  return (
    <div class="App bg-gradient-to-b from-yellow-grad to-white">
      <div class="sm:container sm:mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="phase" element={<Phase />}></Route>
          <Route path="lock" element={<Lock />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
