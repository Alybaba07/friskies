import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Wrapped from "./pages/Wrapped";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Members" element={<Members/>}/>
        <Route path="/Wrapped" element={<Wrapped/>}/>
      </Routes>
    </Router>
  );
}

export default App;
