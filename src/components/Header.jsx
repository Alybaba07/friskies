import React from "react";
import fondHero from "../assets/IMG_4111.png";

const Hero = () => {
  return ( <div>
      <header class="sticky top-0 z-50 bg-stone-950">
        <nav>
          <div className="gap-x-14 items-center max-w-7xl mx-auto px-4 md:flex md:px-8">
            <div className="flex items-center justify-between py-5 md:block">
              <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 fill-white">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
              </a>
              <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 items-center mt-8 md:mt-0 md:flex hidden">
              <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-300 hover:text-gray-400">
                  <a href="">Membres</a>
                </li>
                <li className="text-gray-300 hover:text-gray-400">
                  <a href="">Rétrospective</a>
                </li>
                <li className="text-gray-300 hover:text-gray-400">
                  <a href="">Actus</a>
                </li>
                <li className="text-gray-300 hover:text-gray-400">
                  <a href="">A propos</a>
                </li>
                <li>
                  <a href="" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 rounded-full md:inline-flex">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="relative max-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${fondHero})`}}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 md:px-8 text-center">
          <div className="space-y-5 max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Friskies
            </h2>
            <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Le site web du serveur discord Friskies est là !
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
