import React from "react";
import { Link } from "react-router-dom";

function Retro() {
  return (
    <div className="bg-stone-950">
    <section className="relative">
        <div className="relative z-10 p-8 md:p-12 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
                Rétrospective 2025
            </h2>
            <p className="text-stone-100 text-xl max-w-2xl mx-auto font-extralight mt-6">
            Nombre de messages ? Temps passé en vocal ? <br/> Toutes les statistiques
            2025 du serveur sont disponibles dès maintenant !
            </p>
            <div className="mt-8">
                <Link to='/TravauxWrapped2025' className="bg-linear-to-r from-lime-500 to-green-800 text-white font-medium rounded-full px-12 py-3 inline-block text-sm hover:opacity-90 transition-transform duration-200 ease-linear hover:-translate-y-1 cursor-pointer">Go !</Link>
            </div>
        </div>
    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] opacity-80 sm:max-w-md md:max-w-lg" style={{background:"linear-gradient(120deg, rgba(74,222,128,0.20) 15%, rgba(34,197,94,0.35) 50%, rgba(16,185,129,0.30) 85%, rgba(5,150,105,0.45) 120%)"}}
    ></div>
    </section>
    </div>
  );
};

export default Retro;
