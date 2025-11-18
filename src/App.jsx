import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Wrapped from "./pages/Wrapped";
import News from "./pages/News";
import About from "./pages/About";
import Discord from "./pages/Discord";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Members" element={<Members/>}/>
        <Route path="/Wrapped" element={<Wrapped/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Discord" element={<Discord/>}/>
      </Routes>
    </Router>
  );
}

export default App;
