import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Silk from "../components/Silk";

const statistiques = {
  messagesCpt: "49 765",
  messagesTot: "149 549",
  vocalTime: "8 211",
  mostUsedText: "#general",
  mostUsedVocal: "Vocal 1",
  timeMostUsedVocal: "4 837",
  bestMonth: "Août",
  worstMonth: "Février",
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
      title: "Et en vocal alors ?",
      subtitle: `Un total de ${statistiques.vocalTime} heures passées ensemble.`,
    },
    {
      title: "Le salon textuel favori était...",
      subtitle: statistiques.mostUsedText,
    },
    {
      title: "Côté vocal, vous avez préféré...",
      subtitle: statistiques.mostUsedVocal,
    },
    {
      title: "Le mois le plus actif fut...",
      subtitle: statistiques.bestMonth,
    },
    {
      title: "Et le plus calme ?",
      subtitle: statistiques.worstMonth,
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
            <Silk
              opacity={0.8}
              noiseIntensity={1}
              className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
            />

            <div className="absolute inset-0 flex items-center justify-center text-center px-6 pointer-events-none">

              <div className="max-w-3xl space-y-6">
                <p
                  key={`title-${statIndex}`}
                  className="text-3xl font-light  text-white animate-title"
                >
                  {slides[statIndex].title}
                </p>

                <p
                  key={`subtitle-${statIndex}`}
                  className="text-xl text-zinc-300 animate-subtitle"
                >
                  {slides[statIndex].subtitle}
                </p>
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
