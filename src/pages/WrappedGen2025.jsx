import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const statistiques = [{
  messages: 4215,
  vocalTime: "32h",
  mostUsedText: "#general",
  mostUsedVocal: "Chill Room",
  bestMonth: "Août",
  worstMonth: "Février"},
];

function WrappedGen2025() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [statIndex, setStatIndex] = useState(0);

  const openOverlay = (index) => {
    setSelectedIndex(index);
    setStatIndex(0); // reset stats
  };

  const closeOverlay = () => setSelectedIndex(null);

  const nextStat = () => {
    setStatIndex((s) => (s + 1) % 6);
  };
  const prevStat = () => {
    setStatIndex((s) => (s - 1 + 6) % 6);
  };

  const show = selectedIndex !== null;
  const stats = statistiques[selectedIndex];
  const statsList = [
    `Messages envoyés : ${stats?.messages}`,
    `Temps total en vocal : ${stats?.vocalTime}`,
    `Salon textuel préféré : ${stats?.mostUsedText}`,
    `Salon vocal préféré : ${stats?.mostUsedVocal}`,
    `Mois le plus actif : ${stats?.bestMonth}`,
    `Mois le moins actif : ${stats?.worstMonth}`,
  ];

  return (
    <div className="bg-stone-950 min-h-screen">
      <Navbar/>

      {/* WRAPPER DU BODY */}
      <div className="relative min-h-screen">

        {/* OVERLAY STATS */}
        {!show && (
          <div className="absolute inset-0 bg-black bg-opacity-0 animate-fade flex items-center justify-center">
            <div className="text-white text-center px-6 animate-fade">

              <button onClick={closeOverlay} className="absolute top-4 left-4 text-3xl cursor-pointer hover:text-red-400">
                ✕
              </button>

              <div className="text-3xl font-light mb-10 opacity-0 animate-fade-delayed">
                {statsList[statIndex]}
              </div>

              <div className="flex justify-between w-full px-8">
                {statIndex > 0 && (
              <button onClick={prevStat} className="absolute left-4 text-4xl cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
              </button>)}

                {statIndex < statsList.length - 1 && (
              <button onClick={nextStat} className="absolute right-4 text-4xl cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"/></svg>
              </button>)}
              </div>

            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default WrappedGen2025;