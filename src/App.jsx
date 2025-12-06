import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Wrapped from "./pages/Wrapped";
import Wrapped2025 from "./pages/Wrapped2025";
import News from "./pages/News";
import About from "./pages/About";
import Discord from "./pages/Discord";
import WrappedGen2025 from "./pages/WrappedGen2025"
import WrappedInfo from "./pages/WrappedInfo"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Members" element={<Members/>}/>
        <Route path="/Wrapped" element={<Wrapped/>}/>
        <Route path="/Wrapped2025" element={<Wrapped2025/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Discord" element={<Discord/>}/>
        <Route path="/WrappedGen2025" element={<WrappedGen2025/>}/>
        <Route path="/WrappedInfo" element={<WrappedInfo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
