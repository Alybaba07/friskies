import Header from "../components/Header";
import Footer from "../components/Footer";

function Wrapped2025() {
  return (
    <>
    <body className="bg-stone-950">
      <Header/>

      <main className="text-center px-4 pt-10 pb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
              Bienvenue dans la Rétrospective 2025 du serveur Friskies !
          </h2>

            <p className="text-stone-100 text-xl mx-auto font-extralight mt-6">
              2025 touche bientôt à sa fin. Quel meilleur moyen de finir l'année qu'en faisant le bilan du serveur ?
            </p>


        {/* BOUTONS */}
        <section className="button-container flex flex-col items-center gap-6 mt-20">
          <a href="/general-stats" className="inline-block text-stone-100 1.5em p-15 font-bold">
            Rétrospective générale
          </a>

          <a
            href="/perso-stats-1"
            className="retro-btn"
          >
            Rétrospective personnelle
          </a>
        </section>

        {/* INFOS */}
        <div className="info-container mt-20 text-center text-[#42433d] text-sm">
          <p>Seuls certains salons textuels ont été pris en compte dans les statistiques générales.</p>
          <p>Les donnés ont été enregistrées du 1er janvier 2025 au 1er décembre (23h59) 2025.</p>
          <p>Les données vocales sont des approximations.</p>

          <ul className="mt-2">
            <li>Pour plus de détails :</li>
            <li>
              <a href="/info" className="click">cliquez ici</a>
            </li>
          </ul>
        </div>
      </main>

      <Footer/>
    </body>
    </>
  );
}

export default Wrapped2025;