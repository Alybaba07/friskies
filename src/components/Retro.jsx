import React from "react";

const Banner = () => {
  return ( <div>
    <section className="relative overflow-hidden bg-stone-950 text-center flex flex-col items-center justify-center py-24">
      {/* --- Dégradé flou --- */}
      <div className="absolute inset-0 m-auto max-w-xs h-[300px] blur-[120px] sm:max-w-md md:max-w-lg" style={{background:"linear-gradient(106.89deg, rgba(132, 252, 171, 0.11) 15.73%, rgba(34, 197, 94, 0.41) 15.74%, rgba(110, 231, 183, 0.26) 56.49%, rgba(22, 163, 74, 0.4) 115.91%)"}}>
      </div>

        <div className="relative z-10 p-8 md:p-12 lg:px-16 lg:py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
                Rétrospective 2025
            </h2>
            <p className="hidden md:block max-w-lg mt-6 font-extralight text-stone-100 text-lg leading-relaxed">
            Nombre de messages ? Temps passé en vocal ? <br/> Toutes les statistiques
            2025 du serveur sont disponibles dès maintenant !
            </p>
            <div className="mt-8">
                <a href="https://alybaba07.github.io/wrapped/" className="relative inline-block rounded-full p-0.5 overflow-hidden text-sm font-medium text-yellow-50 bg-linear-to-br from-lime-500 to-green-800  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="block px-12 py-3 rounded-full bg-stone-950 transition-all duration-300 hover:bg-transparent">
                    Go !
                    </span>
                </a>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Banner;
