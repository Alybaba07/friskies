import Header from "../components/Header";
import Footer from "../components/Footer";
import WrappedGen2025 from "../components/WrappedGen2025";

function Wrapped2025() {
  return (
    <>
    <div className="bg-stone-950 min-h-screen">
      <Header/>

      <div className="text-center px-4 pt-10 pb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
              Bienvenue dans la Rétrospective 2025 du serveur Friskies !
          </h2>

            <p className="text-stone-100 text-xl mx-auto font-extralight mt-6">
              2025 touche bientôt à sa fin. Quel meilleur moyen de finir l'année qu'en faisant le bilan du serveur ?
            </p>


        {/* BOUTONS */}
        <div className="flex flex-col items-center gap-6 mt-20">
          <a href="/WrappedGen2025" className="text-2xl font-bold uppercase no-underline px-[40px] py-[15px] m-[10px] text-stone-50 rounded-full border-2 border-transparent bg-[linear-gradient(#0e100f,#0e100f),linear-gradient(90deg,#78c800,#28a92b)] bg-origin-border [background-clip:padding-box,border-box] transition-transform duration-200 ease-linear hover:-translate-y-1">
            Rétrospective générale
          </a>

          <a href="/perso-stats-1" className="text-2xl font-bold uppercase no-underline px-[40px] py-[15px] m-[10px] text-stone-50 rounded-full border-2 border-transparent bg-[linear-gradient(#0e100f,#0e100f),linear-gradient(90deg,#78c800,#28a92b)] bg-origin-border [background-clip:padding-box,border-box] transition-transform duration-200 ease-linear hover:-translate-y-1">
            Rétrospective personnelle
          </a>
        </div>

        {/* INFOS */}
        <div className="mt-20 text-center text-[#42433d] text-sm">
          <ul className="mt-2">
            <li>Pour plus de détails concernant la rétrospective :</li>
            <li>
              <a href="/" className="click">cliquez ici</a>
            </li>
          </ul>
        </div>
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default Wrapped2025;