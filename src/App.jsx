import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TravauxMembers from "./pages/TravauxMembers";
import Wrapped from "./pages/Wrapped";
import TravauxWrapped2025 from "./pages/TravauxWrapped2025";
import News from "./pages/News";
import About from "./pages/About";
import Discord from "./pages/Discord";
import WrappedGen2025 from "./pages/WrappedGen2025"
import WrappedPerso2025 from "./pages/WrappedPerso2025"
import WrappedInfo from "./pages/WrappedInfo"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/TravauxMembers" element={<TravauxMembers/>}/>
        <Route path="/Wrapped" element={<Wrapped/>}/>
        <Route path="/TravauxWrapped2025" element={<TravauxWrapped2025/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Discord" element={<Discord/>}/>
        <Route path="/WrappedGen2025" element={<WrappedGen2025/>}/>
        <Route path="/WrappedPerso2025" element={<WrappedPerso2025/>}/>
        <Route path="/WrappedInfo" element={<WrappedInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
