import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import  {useEffect, useState} from "react";

function WrappedGen2025() {

  return (
    <>
    <div className="bg-stone-950 min-h-screen">
      <Navbar/>
    <div class="relative w-[100vw] h-[100vh] flex justify-center items-center bg-stone-950">
        <div class="flex ease-in-out h-[100%] w-[300%]">
            <div class="flex-grow flex-shrink-0 basis-full h-[100%] bg-cover bg-center flex justify-center items-start pt-[15%] text-[#fffce1] text-center text-[1.5em]">
                <div class="stats-content">
                    <h2 class="opacity-0" data-translate="msgTotal1"></h2>
                    <p class="opacity-0" id="total-messages-line">
                        <span data-translate="msgTotal2"></span>
                        <span id="total-messages" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-image: -webkit-linear-gradient(left, #78c800, #28a92b); font-weight: bold;"></span>
                        <span style="font-weight: bold;"> messages </span>
                    </p>
                    <p class="opacity-0" data-translate="msgTotal3"></p>
                </div>
            </div>
            <div class="flex-grow flex-shrink-0 basis-full h-[100%] bg-cover bg-center flex justify-center items-start pt-[15%] text-[#fffce1] text-center text-[1.5em]">
                <div class="stats-content">
                    <h2 class="opacity-0">Top 5 salons textuels</h2>
                    <ol class="opacity-0" id="top-text-channels"></ol>
                </div>
            </div>
            <div class="flex-grow flex-shrink-0 basis-full h-[100%] bg-cover bg-center flex justify-center items-start pt-[15%] text-[#fffce1] text-center text-[1.5em]">
                <div class="stats-content">
                    <h2 class="opacity-0">Top 5 membres actifs</h2>
                    <ol class="opacity-0" id="top-message-members"></ol>
                </div>
            </div>
            <div class="flex-grow flex-shrink-0 basis-full h-[100%] bg-cover bg-center flex justify-center items-start pt-[15%] text-[#fffce1] text-center text-[1.5em]">
                <div class="stats-content">
                    <h2 class="opacity-0">Temps passé en vocal</h2>
                    <p class="opacity-0" id="voice-time"></p>
                </div>
            </div>
            <div class="flex-grow flex-shrink-0 basis-full h-[100%] bg-cover bg-center flex justify-center items-start pt-[15%] text-[#fffce1] text-center text-[1.5em]">
                <div class="stats-content">
                    <h2 class="opacity-0">Top 5 salons vocaux</h2>
                    <ol class="opacity-0" id="top-voice-channels"></ol>
                </div>
            </div>
            <div class="flex-grow flex-shrink-0 basis-full h-[100%] bg-cover bg-center flex justify-center items-start pt-[15%] text-[#fffce1] text-center text-[1.5em]">
                <div class="stats-content">
                    <h2 class="opacity-0">Top 5 membres actifs</h2>
                    <ol class="opacity-0" id="top-voice-members"></ol>
                </div>
            </div>
        </div>
        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a class="next" onclick="changeSlide(1)">&#10095;</a>
    </div>
      <Footer/>
    </div>
    </>
  )
}

export default WrappedGen2025;