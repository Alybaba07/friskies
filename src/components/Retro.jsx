import React from "react";

const Banner = () => {
  return ( <div>
    <div className="bg-stone-950">
    <section className="relative">
        <div className="relative z-10 p-8 md:p-12 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
                Rétrospective 2025
            </h2>
            <p className="hidden md:block text-center mt-6 font-light text-stone-100 text-lg leading-relaxed">
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
    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{background:"linear-gradient(120deg, rgba(74,222,128,0.20) 15%, rgba(34,197,94,0.35) 50%, rgba(16,185,129,0.30) 85%, rgba(5,150,105,0.45) 120%)"}}
    ></div>
    </section>
    </div>
    </div>
  );
};

export default Banner;
