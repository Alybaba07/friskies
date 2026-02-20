import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Flashback2025() {
  return (
    <>
    <div className="bg-stone-950 min-h-screen">
      <Header/>

      <div className="text-center px-4 pt-10 pb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-50 m-[5vh]">
            Bienvenue dans le Flashback 2025 du serveur Friskies !
          </h2>

          <p className="text-stone-100 text-xl mx-auto font-extralight mt-6">
            2025 touche à sa fin. Quel meilleur moyen de finir l'année qu'en faisant le bilan du serveur ?
          </p>

          <div className="flex flex-col items-center gap-6 mt-20">
            <Link to='/FlashbackGen2025' className="group relative p-0.5 rounded-full bg-linear-to-r from-lime-500 to-green-800 transition-transform duration-200 ease-linear hover:-translate-y-1">
              <div className="bg-stone-950 rounded-full px-10 py-[15px]">
                <span className="text-sl md:text-2xl font-bold uppercase text-stone-50">
                  Flashback général
                </span>
              </div>
            </Link>

            <Link to='/FlashbackPerso2025' className="group relative p-0.5 rounded-full bg-linear-to-r from-lime-500 to-green-800 transition-transform duration-200 ease-linear hover:-translate-y-1">
              <div className="bg-stone-950 rounded-full px-10 py-[15px]">
                <span className="text-sl md:text-2xl font-bold uppercase text-stone-50">
                  Flashback personnel
                </span>
              </div>
            </Link>
          </div>

        <div className="mt-20 text-center text-gray-400 text-xs md:text-sm">
          <ul className="mt-2 mb-2">
            <li>Pour plus de détails concernant le flashback :</li>
            <li> <Link to='/FlashbackInfo'>cliquez ici</Link></li>
          </ul>
        </div>
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default Flashback2025;