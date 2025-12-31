import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Flashback2025() {
  return (
    <>
    <div className="bg-stone-950 min-h-screen">
      <Header/>

      <div className="text-center px-4 pt-10 pb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
              Bienvenue dans le Flashback 2025 du serveur Friskies !
          </h2>

            <p className="text-stone-100 text-xl mx-auto font-extralight mt-6">
              2025 touche à sa fin. Quel meilleur moyen de finir l'année qu'en faisant le bilan du serveur ?
            </p>

        <div className="flex flex-col items-center gap-6 mt-20">
          <Link to='/FlashbackGen2025' className="text-sl md:text-2xl font-bold uppercase no-underline px-[40px] py-[15px] m-[10px] text-stone-50 rounded-full bg-linear-to-r from-lime-500 to-green-800 transition-transform duration-200 ease-linear hover:-translate-y-1">
          Flashback général
          </Link>
          <Link to='/FlashbackPerso2025' className="text-sl md:text-2xl font-bold uppercase no-underline px-[40px] py-[15px] m-[10px] text-stone-50 rounded-full bg-linear-to-r from-lime-500 to-green-800 transition-transform duration-200 ease-linear hover:-translate-y-1">
          Flashback personnel
          </Link>
        </div>

        <div className="mt-20 text-center text-gray-500 text-xs md:text-sm">
          <ul className="mt-2">
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