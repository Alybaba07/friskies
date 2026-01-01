import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Silk from '../components/Silk';

import temp from "../assets/pp.png";
import aaron from "../assets/aaron.png";
import aly from "../assets/aly.png";
import amaya from "../assets/amaya.png";
import ayoub from "../assets/ayoub.png";
import azu from "../assets/azu.png";
import booba from "../assets/booba.png";
import charlie from "../assets/charlie.png";
import clem from "../assets/clem.png";
import frisk from "../assets/frisk.png";
import haddamas from "../assets/haddamas.png";
import kyky from "../assets/kyky.png";
import legu from "../assets/legu.png";
import letalia from "../assets/letalia.png";
import max from "../assets/max.png";
import melo from "../assets/melo.png";
import nymso from "../assets/nymso.png";
import pacifica from "../assets/pacifica.png";
// import pelin from "../assets/pelin.png";
import renard from "../assets/renard.png";
import vince from "../assets/vince.png";

const members = [
  { name: "Aaron", img: aaron, stats: {
                                messages: 59,
                                vocalTime: 285,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
 { name: "Aly", img: aly, stats: {
                                messages: 3924,
                                vocalTime: 605,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Amaya", img: amaya, stats: {
                                messages: 111,
                                vocalTime: 130,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Azu", img: azu, stats: {
                                messages: 988,
                                vocalTime: 271,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Booba", img: booba, stats: {
                                messages: 2942,
                                vocalTime: 709,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Charlie", img: charlie, stats: {
                                messages: 876,
                                vocalTime: 230,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Clem", img: clem, stats: {
                                messages: 136,
                                vocalTime: 52,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Frisk", img: frisk, stats: {
                                messages: 1598,
                                vocalTime: 142,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Haddamas", img: haddamas, stats: {
                                messages: 377,
                                vocalTime: 679,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Kyky", img: kyky, stats: {
                                messages: 4215,
                                vocalTime: 351,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Léguman", img: legu, stats: {
                                messages: 4215,
                                vocalTime: 0,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Letalia", img: letalia, stats: {
                                messages: 4215,
                                vocalTime: 30,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
  { name: "Max", img: max, stats: {
                                messages: 4215,
                                vocalTime: 909,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Mélo", img: melo, stats: {
                                messages: 4215,
                                vocalTime: 292,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Nymso", img: nymso, stats: {
                                messages: 4215,
                                vocalTime: 306,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Pacifica", img: pacifica, stats: {
                                messages: 4215,
                                vocalTime: 221,
                                bestMonth: "Août",
                            worstMonth: "Février"}},
   { name: "Pelin", img: temp, stats: {
                                messages: 4215,
                                vocalTime: 432,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
   { name: "Renard", img: renard, stats: {
                                messages: 9967,
                                vocalTime: 684,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
 { name: "Vince", img: vince, stats: {
                                messages: 4215,
                                vocalTime: 165,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
{ name: "Yayourt", img: ayoub, stats: {
                                messages: 724,
                                vocalTime: 596,
                                bestMonth: "Août",
                                worstMonth: "Février"}},
];

function FlashbackPerso2025() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [statIndex, setStatIndex] = useState(0);

  const openOverlay = (index) => {
    setSelectedIndex(index);
    setStatIndex(0);
  };

  const closeOverlay = () => setSelectedIndex(null);

  const show = selectedIndex !== null;
  const member = selectedIndex !== null ? members[selectedIndex] : null;

  const slides = member
    ? [
        {
          title:
            "Pipelette inarrêtable ou plume timide ? Nous avons compté, et voici le résultat :",
          subtitle: `Tu as envoyé ${member.stats.messages} messages. Feras-tu mieux l'année prochaine ?`,
        },
        {
          title:
            "L'écrit c'est bien beau, mais as-tu partagé ta belle et douce voix en vocal ?",
          subtitle: (() => {
            const hours = parseInt(member.stats.vocalTime);
            const days = (hours / 24).toFixed(1);
            return `Tu as passé ${hours} heures en vocal, soit près de ${days} jours !`;
          })(),
        },
        {
          title: "Ton mois le plus actif",
          subtitle: member.stats.bestMonth,
        },
        {
          title: "Ton mois le plus calme",
          subtitle: member.stats.worstMonth,
        },
      ]
    : [];

  const nextStat = () => {
    setStatIndex((s) => Math.min(s + 1, slides.length - 1));
  };

  const prevStat = () => {
    setStatIndex((s) => Math.max(s - 1, 0));
  };

  return (
    <div className="bg-stone-950 min-h-screen">
      <Navbar />

      <div className="relative min-h-screen">
        {!show && (
          <section className="py-24">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {members.map((m, i) => (
                <div
                  key={i}
                  onClick={() => openOverlay(i)}
                  className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:scale-105 transition"
                >
                  <div className="flex justify-center mb-4">
                    <img src={m.img} className="w-50 h-50 object-contain" />
                  </div>
                  <h3 className="text-xl text-white">{m.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {show && member && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Silk opacity={0.8} noiseIntensity={1} className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />

              <button onClick={closeOverlay} className="fixed top-20 left-8 z-20 text-3xl cursor-pointer text-white hover:text-red-400">
                ✕
              </button>

              <div className="absolute inset-0 z-5000 flex items-center justify-center text-center px-6 pointer-events-none">

                <div className="max-w-3xl space-y-6">
                  <p key={`title-${statIndex}`} className="text-3xl font-light text-white animate-title">
                    {slides[statIndex].title}
                  </p>

                  <p key={`subtitle-${statIndex}`} className="text-xl text-zinc-300 animate-subtitle">
                    {slides[statIndex].subtitle}
                  </p>
                </div>
              </div>
          </div>

            {statIndex > 0 && (
              <button onClick={prevStat} className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl cursor-pointer text-white hover:text-zinc-400 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
              </button>
            )}

            {statIndex < slides.length - 1 && (
              <button onClick={nextStat} className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl cursor-pointer text-white hover:text-zinc-400 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"/></svg>
              </button>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FlashbackPerso2025;