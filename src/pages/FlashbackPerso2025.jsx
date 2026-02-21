import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Silk from '../components/Silk';

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
import legu from "../assets/legu.png";
import letalia from "../assets/letalia.png";
import max from "../assets/max.png";
import melo from "../assets/melo.png";
import nymso from "../assets/nymso.png";
import pacifica from "../assets/pacifica.png";
import renard from "../assets/renard.png";
import vince from "../assets/vince.png";

const members = [
  { name: "Aaron", img: aaron, stats: {
                                messagesTot: "61",
                                messages: "59",
                                messagesTop: "18eme",
                                vocalTimeTop: "11eme",
                                vocalTime: 285,
                                bestMonth: "Janvier",
                                bestMonthHours: 174,
                                worstMonth: "Novembre",
                                worstMonthHours: 5}},
 { name: "Aly", img: aly, stats: {
                                messagesTot: "10 485",
                                messages: "3 924",
                                messagesTop: "2eme",
                                vocalTimeTop: "5eme",
                                vocalTime: 605,
                                bestMonth: "Juillet",
                                bestMonthHours: 125,
                                worstMonth: "Mai",
                                worstMonthHours: 14}},
  { name: "Amaya", img: amaya, stats: {
                                messagesTot: "149",
                                messages: "111",
                                messagesTop: "16eme",
                                vocalTimeTop: "18eme",
                                vocalTime: 130,
                                bestMonth: "Janvier",
                                bestMonthHours: 65,
                                worstMonth: "Aout",
                                worstMonthHours: 4}},
   { name: "Azu", img: azu, stats: {
                                messagesTot: "988",
                                messages: "988",
                                messagesTop: "6eme",
                                vocalTimeTop: "12eme",
                                vocalTime: 271,
                                bestMonth: "Janvier",
                                bestMonthHours: 95,
                                worstMonth: "Février",
                                worstMonthHours: 3}},
   { name: "Booba", img: booba, stats: {
                                messagesTot: "3 668",
                                messages: "2 942",
                                messagesTop: "4eme",
                                vocalTimeTop: "2eme",
                                vocalTime: 709,
                                bestMonth: "Septembre",
                                bestMonthHours: 209,
                                worstMonth: "Mars",
                                worstMonthHours: 0.03}},
  { name: "Charlie", img: charlie, stats: {
                                messagesTot: "3 916",
                                messages: "876",
                                messagesTop: "7eme",
                                vocalTimeTop: "13eme",
                                vocalTime: 230,
                                bestMonth: "Janvier",
                                bestMonthHours: 96,
                                worstMonth: "Mai",
                                worstMonthHours: 0.65}},
  { name: "Clem", img: clem, stats: {
                                messagesTot: "194",
                                messages: "136",
                                messagesTop: "14eme",
                                vocalTimeTop: "19eme",
                                vocalTime: 52,
                                bestMonth: "Juillet",
                                bestMonthHours: 18,
                                worstMonth: "Novembre",
                                worstMonthHours: 1}},
   { name: "Frisk", img: frisk, stats: {
                                messagesTot: "1 876",
                                messages: "1 598",
                                messagesTop: "5eme",
                                vocalTimeTop: "17eme",
                                vocalTime: 142,
                                bestMonth: "Mars",
                                bestMonthHours: 26,
                                worstMonth: "Juillet",
                                worstMonthHours: 1}},
   { name: "Haddamas", img: haddamas, stats: {
                                messagesTot: "1 400",
                                messages: "377",
                                messagesTop: "11eme",
                                vocalTimeTop: "4eme",
                                vocalTime: 679,
                                bestMonth: "Juillet",
                                bestMonthHours: 139,
                                worstMonth: "Mai",
                                worstMonthHours: 4}},
  { name: "Léguman", img: legu, stats: {
                                messagesTot: "10",
                                messages: "10",
                                messagesTop: "20eme",
                                vocalTimeTop: "21eme",
                                vocalTime: 0,
                                bestMonth: "None",
                                worstMonth: "None"}},
  { name: "Letalia", img: letalia, stats: {
                                messagesTot: "8",
                                messages: "8",
                                messagesTop: "21eme",
                                vocalTimeTop: "20eme",
                                vocalTime: 30,
                                bestMonth: "Janvier",
                                bestMonthHours: 25,
                                worstMonth: "Juillet",
                                worstMonthHours: 5}},
  { name: "Max", img: max, stats: {
                                messagesTot: "8 698",
                                messages: "3 542",
                                messagesTop: "3eme",
                                vocalTimeTop: "1er",
                                vocalTime: 909,
                                bestMonth: "Octobre",
                                bestMonthHours: 211,
                                worstMonth: "Juillet",
                                worstMonthHours: 6}},
   { name: "Mélo", img: melo, stats: {
                                messagesTot: "5 947",
                                messages: "308",
                                messagesTop: "12eme",
                                vocalTimeTop: "10eme",
                                vocalTime: 292,
                                bestMonth: "Janvier",
                                bestMonthHours: 188,
                                worstMonth: "Avril",
                                worstMonthHours: 0.1}},
   { name: "Nymso", img: nymso, stats: {
                                messagesTot: "82",
                                messages: "82",
                                messagesTop: "17eme",
                                vocalTimeTop: "9eme",
                                vocalTime: 306,
                                bestMonth: "Octobre",
                                bestMonthHours: 132,
                                worstMonth: "Juillet",
                                worstMonthHours: 1}},
   { name: "Pacifica", img: pacifica, stats: {
                                messagesTot: "2 937",
                                messages: "29",
                                messagesTop: "19eme",
                                vocalTimeTop: "14eme",
                                vocalTime: 221,
                                bestMonth: "Janvier",
                                bestMonthHours: 88,
                                worstMonth: "Novembre",
                                worstMonthHours: 3}},
   { name: "Renard", img: renard, stats: {
                                messagesTot: "14 294",
                                messages: "9 967",
                                messagesTop: "1er",
                                vocalTimeTop: "3eme",
                                vocalTime: 684,
                                bestMonth: "Août",
                                bestMonthHours: 130,
                                worstMonth: "Avril",
                                worstMonthHours: 5}},
 { name: "Vince", img: vince, stats: {
                                messagesTot: "153",
                                messages: "136",
                                messagesTop: "15eme",
                                vocalTimeTop: "16eme",
                                vocalTime: 165,
                                bestMonth: "Août",
                                bestMonthHours: 57,
                                worstMonth: "Avril",
                                worstMonthHours: 1}},
{ name: "Yayourt", img: ayoub, stats: {
                                messagesTot: "2 950",
                                messages: "724",
                                messagesTop: "",
                                vocalTimeTop: "",
                                vocalTime: 596,
                                bestMonth: "Janvier",
                                bestMonthHours: 230,
                                worstMonth: "Avril",
                                worstMonthHours: 0.03}},
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
          title: "Pipelette inarrêtable ou plume timide ? Nous avons compté, et voici le résultat :",
          subtitle: `Tu as envoyé ${member.stats.messagesTot} messages tous salons confondus, sympa sympa...`,
        },
        {
          title: "Mais combien de messages étaient destinés à de réelles conversations ?",
          subtitle: `${member.stats.messages} messages `,
        },
        {
          title:
            "L'écrit c'est bien beau, mais as-tu partagé ta belle et douce voix en vocal ?",
          subtitle: (() => {
            const hours = member.stats.vocalTime;
            const days = (hours / 24).toFixed(1);
            return `Tu as passé ${hours} heures en vocal, soit près de ${days} jours !`;
          })(),
        },
        {
          title: "Tu as passé le plus de temps en vocal durant le mois de ...",
          subtitle: ` ${member.stats.bestMonth} ! En restant ${member.stats.bestMonthHours} heures`,
        },
        {
          title: `A contrario, ${member.stats.worstMonth} a été une periode bien calme`,
          subtitle: (() => {
            const hours = member.stats.worstMonthHours;
            
            if (hours < 1) {
              const minutes = Math.round(hours * 60);
              return `${minutes} minute${minutes > 1 ? "s" : ""}, c'est assez peu...`;
            } else {
              return `${hours} heure${hours > 1 ? "s" : ""}, c'est assez peu...`;
            }
          })(),
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
            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {members.map((m, i) => (
                <div key={i} onClick={() => openOverlay(i)} className="bg-zinc-900 p-8 rounded-xl cursor-pointer hover:scale-105 transition">
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