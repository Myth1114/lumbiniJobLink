
import React from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header.jsx";
import Aboutus from "./Pages/AboutUs/Aboutus";
import Landingpage from "./Pages/LandingPage/Landingpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path="/" element={<Landingpage/>} />
        <Route exact path="/aboutus" element={<Aboutus/>}/>
      </Routes>
    </div>
  );
}

export default App;
