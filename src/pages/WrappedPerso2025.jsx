import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import temp from "../assets/pp.png";
// import aaron from "../assets/aaron.png";
import aly from "../assets/aly.png";
// import asma from "../assets/asma.png";
// import ayoub from "../assets/ayoub.png";
// import azu from "../assets/azu.png";
// import booba from "../assets/booba.png";
import charlie from "../assets/charlie.png";
// import clem from "../assets/clem.png";
import frisk from "../assets/frisk.png";
// import haddamas from "../assets/haddamas.png";
import kyky from "../assets/kyky.png";
// import legu from "../assets/legu.png";
// import letalia from "../assets/letalia.png";
// import lybur from "../assets/lybur.png";
import max from "../assets/max.png";
import melo from "../assets/melo.png";
// import nymso from "../assets/nymso.png";
// import pacifica from "../assets/pacifica.png";
// import pelin from "../assets/pelin.png";
// import renard from "../assets/renard.png";
// import vince from "../assets/vince.png";

const members = [
  { name: "Aaron", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
 { name: "Aly", img: aly, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Amaya", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
 { name: "Ayoub", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Azu", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Booba", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Charlie", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Clem", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Frisk", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Haddamas", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Kyky", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Léguman", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Letalia", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Lybur", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Max", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Mélo", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Nymso", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Pacifica", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Pelin", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Renard", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}},
 { name: "Vince", img: temp, stats: {
                                messages: 4215,
                                vocalTime: "32h",
                                mostUsedText: "#general",
                                mostUsedVocal: "Chill Room",
                                bestMonth: "Août",
                                worstMonth: "Février"}}
];

function WrappedPerso2025() {
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
  const member = members[selectedIndex];
  const statsList = [
    `Messages envoyés : ${member?.stats.messages}`,
    `Temps total en vocal : ${member?.stats.vocalTime}`,
    `Salon textuel préféré : ${member?.stats.mostUsedText}`,
    `Salon vocal préféré : ${member?.stats.mostUsedVocal}`,
    `Mois le plus actif : ${member?.stats.bestMonth}`,
    `Mois le moins actif : ${member?.stats.worstMonth}`,
  ];

  return (
    <div className="bg-stone-950 min-h-screen">
      <Navbar/>

      {/* WRAPPER DU BODY */}
      <div className="relative min-h-screen">

        {/* LISTE DES MEMBRES */}
        {!show && (
          <section className="py-24">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {members.map((m, i) => (
                <div key={i} className="bg-zinc-900 p-8 rounded-xl border cursor-pointer hover:scale-105 transition" onClick={() => openOverlay(i)}>
                  <img src={m.img} className="w-36 h-36 mx-auto mb-4" />
                  <h3 className="text-xl text-white">{m.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* OVERLAY STATS */}
        {show && (
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

export default WrappedPerso2025;