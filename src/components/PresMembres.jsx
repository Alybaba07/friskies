import React from 'react';
import aly from "../assets/aly.png";
import frisk from "../assets/frisk.png";
import melo from "../assets/melo.png";
import { Link } from "react-router-dom";

function PresMembres() {
  return (
    <div>
<section className="py-24 bg-stone-950 transition-colors duration-300">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
                <span class="underline decoration-red-500">Membres</span> du serveur
            </h2>
            <p className="text-stone-100 text-xl max-w-2xl mx-auto font-extralight mt-6">
                Le meilleur moyen de découvrir qui compose le serveur, depuis combien de temps ou encore d'apprendre à les connaitre : c'est juste ici ↓
            </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* --- col 1 --- */}
            <div className="p-8 rounded-xl border">
                <div className="flex items-center justify-center mb-6">
                    <img src={aly}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Alybaba</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Codage, dessin, musique, sport et plein d'autres encore : Aly est LA personne la plus flexible. Aucun défi ne lui fait peur !
                </p>
            </div>

            {/* --- col 2 --- */}
            <div className="p-8 rounded-xl border">
                <div className="flex items-center justify-center mb-6">
                    <img src={frisk}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Frisk</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Fondatrice du serveur et dessinatrice hors-pair. Elle préfère déléguer la gestion du serv à ses acolytes préféré.es !
                </p>
            </div>

            {/* --- col 3 --- */}
            <div className="p-8 rounded-xl border">
                <div className="flex items-center justify-center mb-6">
                    <img src={melo} viewBox="0 0 36 36"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Mélo</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Aka la voix de la sagesse, la mama ou encore clumsy queen, elle est sortie victorieuse du Kahoot 2024 !
                </p>
            </div>
        </div>
    </div>

    <div className="mt-16 text-center">
      <div className="bg-linear-to-r from-red-500 to-red-800 text-white font-medium rounded-full px-12 py-3 inline-block text-sm hover:opacity-90 hover:scale-105 transition-all cursor-pointer">
        <Link to='/Members'>Membres</Link>
      </div>
    </div>

</section>

    </div>
  )
}

export default PresMembres;