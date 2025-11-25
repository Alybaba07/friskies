import React from "react";
import Navbar from './Navbar';
import fondHero from "../assets/IMG_4111.png";

function Header() {
  return ( 
    <div>
      <Navbar/>
      <section className="relative max-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${fondHero})`}}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 md:px-8 text-center">
          <div className="space-y-5 max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-white text-shadow-lg/30 sm:text-3xl md:text-5xl">
              Friskies
            </h2>
            <p className="max-w-lg text-white text-shadow-lg/30 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Le site web du serveur discord Friskies est là !
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
