import { useState } from "react";
import Header from "../components/Header";
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
  { name: "Aaron", img: temp},
  { name: "Aly", img: aly},
  { name: "Amaya", img: temp},
  { name: "Ayoub", img: temp},
  { name: "Azu", img: temp},
  { name: "Booba", img: temp},
  { name: "Charlie", img: charlie},
  { name: "Clem", img: temp},
  { name: "Frisk", img: frisk},
  { name: "Haddamas", img: temp},
  { name: "Kyky", img: kyky},
  { name: "Léguman", img: temp},
  { name: "Letalia", img: temp},
  { name: "Lybur", img: temp},
  { name: "Max", img: max},
  { name: "Mélo", img: melo},
  { name: "Nymso", img: temp},
  { name: "Pacifica", img: temp},
  { name: "Pelin", img: temp},
  { name: "Renard", img: temp},
  { name: "Vince", img: temp}
];

function WrappedPerso2025() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openOverlay = (index) => setSelectedIndex(index);
  const closeOverlay = () => setSelectedIndex(null);
  const next = () => setSelectedIndex((prev) => (prev + 1) % members.length);
  const prev = () => setSelectedIndex((prev) => (prev - 1 + members.length) % members.length);

  return (
    
    <>
    <div className="bg-stone-950 min-h-screen">
      <Header/>

      <section className="py-24 ">
          <div className="container mx-auto px-6">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {members.map((m, i) => (
                <div key={i} className={`bg-gradient-to-b from-zinc-900 via-zinc-900 p-8 rounded-xl border cursor-pointer hover:scale-105 transition`} onClick={() => openOverlay(i)}>

                  <div className="flex items-center justify-center mb-6">
                    <img src={m.img} className="w-36 h-36 object-contain"/>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {m.name}
                  </h3>

                </div>
              ))}
              </div>

          </div>
      </section>
      <Footer/>

      {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div className="relative bg-zinc-900 text-white p-10 w-[100%] h-[100%] md:w-[90%] md:h-[90%] rounded-xl shadow-xl flex flex-col items-center justify-center overflow-auto">
              <button onClick={closeOverlay} className="absolute top-4 left-4 text-3xl cursor-pointer hover:text-red-400">
                ✕
              </button>

              <button onClick={prev} className="absolute left-4 text-4xl cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
              </button>

              <button onClick={next} className="absolute right-4 text-4xl cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"/></svg>
              </button>

              <div className="flex flex-col md:flex-row gap-10 w-full">

              </div>


            </div>
          </div>
      )}

    </div>
    </>
  );
}

export default WrappedPerso2025;