import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravauxMembers from "./pages/TravauxMembers";
import Flashback from "./pages/Flashback";
import Flashback2025 from "./pages/Flashback2025";
import News from "./pages/News";
import About from "./pages/About";
import Discord from "./pages/Discord";
import FlashbackGen2025 from "./pages/FlashbackGen2025"
import FlashbackPerso2025 from "./pages/FlashbackPerso2025"
import FlashbackInfo from "./pages/FlashbackInfo"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/TravauxMembers" element={<TravauxMembers/>}/>
        <Route path="/Flashback" element={<Flashback/>}/>
        <Route path="/Flashback2025" element={<Flashback2025/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Discord" element={<Discord/>}/>
        <Route path="/FlashbackGen2025" element={<FlashbackGen2025/>}/>
        <Route path="/FlashbackPerso2025" element={<FlashbackPerso2025/>}/>
        <Route path="/FlashbackInfo" element={<FlashbackInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
