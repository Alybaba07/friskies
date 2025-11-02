import React from 'react'

const PresMembres = () => {
  return (
    <div>
<section className="py-24 bg-stone-950 transition-colors duration-300">
    <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-50">
                Membres du serveur
            </h2>
            <p className="text-stone-100 text-xl max-w-2xl mx-auto font-extralight mt-6">
                Lorem ipsum
            </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* --- col 1 --- */}
            <div className="p-8 rounded-xl border transition-all group bg-white border-gray-200 hover:border-indigo-500/30 dark:bg-linear-to-br dark:from-gray-900 dark:to-black dark:border-gray-800">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6 bg-indigo-100 group-hover:bg-indigo-200 dark:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20 transition-all">
                    <svg className="h-6 w-6 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Alybaba</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Codage, dessin, musique, sport et plein d'autres encore : Aly est LA personne la plus flexible. Aucun défi ne lui fait peur !
                </p>
            </div>

            {/* --- col 2 --- */}
            <div className="p-8 rounded-xl border transition-all group bg-white border-gray-200 hover:border-indigo-500/30 dark:bg-linear-to-br dark:from-gray-900 dark:to-black dark:border-gray-800">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6  bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-500/10 dark:group-hover:bg-purple-500/20 transition-all">
                    <svg className="h-6 w-6 text-purple-500 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Frisk</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Fondatrice du serveur et dessinatrice hors-pair. Elle préfère déléguer la gestion du serveur à ses acolytes préféré.es !
                </p>
            </div>

            {/* --- col 3 --- */}
            <div className="p-8 rounded-xl border transition-all group  bg-white border-gray-200 hover:border-indigo-500/30 dark:bg-linear-to-br dark:from-gray-900 dark:to-black dark:border-gray-800">
                <div className="rounded-lg w-12 h-12 flex items-center justify-center mb-6  bg-blue-100 group-hover:bg-blue-200  dark:bg-blue-500/10 dark:group-hover:bg-blue-500/20 transition-all">
                    <svg className="h-6 w-6 text-blue-500 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Mélo</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Aka la voix de la sagesse, la mama ou encore clumsy queen. Elle est sortie victorieuse du Kahoot 2024 !
                </p>
            </div>
        </div>
    </div>

    <div className="mt-16 text-center">
      <button className="bg-linear-to-r from-indigo-500 to-purple-500 text-white font-light rounded-md px-8 py-3 hover:opacity-90 transition-all">
        Découvrir les autres membres
      </button>
    </div>

</section>

    </div>
  )
}

export default PresMembres