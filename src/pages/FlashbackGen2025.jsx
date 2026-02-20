import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Silk from "../components/Silk";

const statistiques = {
  messagesCpt: "49 765",
  messagesTot: "149 549",
  mostUsedText: "🔈・Vocal 2",
  mostUsedTextMsg: "22 679",
  top5TextMembers: [
    { name: "Renard", count: "9 967 msg" },
    { name: "Aly", count: "3 924 msg" },
    { name: "Max", count: "3 542 msg" },
    { name: "Booba", count: "2 942 msg" },
    { name: "Frisk", count: "1 598 msg" }],
  vocalTime: "8 211",
  mostUsedVocal: "🔈・Vocal 1",
  timeMostUsedVocal: "4 837",
  top5VocalMembers: [
    { name: "Max", count: "909h" },
    { name: "Booba", count: "709h" },
    { name: "Renard", count: "684h" },
    { name: "Haddamas", count: "679h" },
    { name: "Aly", count: "605h" }],
  startMembers: "80",
  minMembers: "76",
  maxMembers: "87",
  endMembers: "84",
};

function FlashbackGen2025() {
  const [statIndex, setStatIndex] = useState(0);

  const slides = [
    {
      title: "Cette année, le serveur n’a pas chômé...",
      subtitle: ` Au total, ${statistiques.messagesTot} messages ont été envoyés, tous salons et membres confondus !`,
    },
    {
      title: `${statistiques.messagesCpt} messages, les vrais de vrai`,
      subtitle: `Parce que les messages de bots et dans les salons restreints, ne comptent pas vraiment dans l'histoire`,
    },
    {
      title: "Le salon textuel favori était...",
      subtitle: `${statistiques.mostUsedText}, avec un total de ${statistiques.mostUsedTextMsg} messages`,
    },
    {
    title: "Le top 5 des bavards",
    members: statistiques.top5TextMembers, 
    type: "ranking"
    },
    {
      title: "Et en vocal alors ?",
      subtitle: `Un total de ${statistiques.vocalTime} heures passées ensemble`,
    },
    {
      title: `Le salon ${statistiques.mostUsedVocal} était bien spécial`,
      subtitle: `${statistiques.timeMostUsedVocal} heures dedans, ce n'est pas rien`,
    },
    {
    title: "Les rois du vocal",
    members: statistiques.top5VocalMembers, 
    type: "ranking"
    },
  ];

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

        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Silk opacity={0.8} noiseIntensity={1} className="absolute inset-0 w-full h-full -z-10 pointer-events-none"/>
              <div className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none">

                <div className="max-w-3xl space-y-6">
                  <p key={`title-${statIndex}`} className="text-3xl font-light text-white animate-title">
                    {slides[statIndex].title}
                  </p>

                  {slides[statIndex].subtitle && (
                    <p key={`subtitle-${statIndex}`} className="text-xl text-zinc-300 animate-subtitle">
                      {slides[statIndex].subtitle}
                    </p>)}

                  {slides[statIndex].members && (
                    <div className="flex flex-col items-center space-y-3 mt-8 animate-subtitle">
                      {slides[statIndex].members.map((member, index) => {
                        const medals = ["🏅", "🥈", "🥉"];
                        const emoji = medals[index] || "🔹";

                        return (
                          <div key={index} className="text-xl text-white flex items-center gap-3">
                            <span>{emoji}</span>
                            <span className="font-semibold">{member.name}</span>
                            <span className="text-zinc-400"> — {member.count || member.time} </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
          </div>

          {statIndex > 0 && (
            <button
              onClick={prevStat}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl cursor-pointer text-white hover:text-zinc-400 z-20"
            >
              ‹
            </button>
          )}

          {statIndex < slides.length - 1 && (
            <button
              onClick={nextStat}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl cursor-pointer text-white hover:text-zinc-400 z-20"
            >
              ›
            </button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FlashbackGen2025;
