import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import  {useEffect, useState} from "react";

export default function WrappedGen2025() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/stats.json")
      .then((res) => res.json())
      .then((data) => setStats(data.generalStats))
      .catch((err) =>
        console.error("Erreur lors du chargement des stats :", err)
      );
  }, []);

 const slides = [
    // SLIDE 1
    <div className="flex flex-col text-center text-[#fffce1] pt-[15%]">
      <h2 className="text-3xl font-bold opacity-0 animate-fadeIn">
        {stats && stats.msgTotal1}
      </h2>

      <p className="opacity-0 animate-fadeIn delay-500 text-xl">
        {stats && stats.msgTotal2}{" "}
        <span className="font-bold bg-gradient-to-r from-[#78c800] to-[#28a92b] text-transparent bg-clip-text">
          {stats?.totalMessages}
        </span>{" "}
        messages
      </p>

      <p className="opacity-0 animate-fadeIn delay-[1000ms] text-lg">
        {stats && stats.msgTotal3}
      </p>
    </div>,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1)
      setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0)
      setCurrentSlide(currentSlide - 1);
  };

function WrappedGen2025() {
  return (
    <>
    <div className="bg-stone-950 min-h-screen">
      <Navbar/>

    <div className="relative w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="flex ease-in-out h-[100%] w-[300%]">
            <div className="flex h-[100%] bg-cover bg-center justify-center items-start pt-[15%] text-center">
                <div>
                    <h2 className="hidden" data-translate="msgTotal1"></h2>
                    <p className="hidden" id="total-messages-line">
                        <span data-translate="msgTotal2"></span>
                        <span id="total-messages" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-image: -webkit-linear-gradient(left, #78c800, #28a92b); font-weight: bold;"></span>
                        <span style="font-weight: bold;"> messages </span>
                    </p>
                    <p className="hidden" data-translate="msgTotal3"></p>
                </div>
            </div>
            <div className="slide">
                <div>
                    <h2 className="hidden">Top 5 salons textuels</h2>
                    <ol className="hidden" id="top-text-channels"></ol>
                </div>
            </div>
            <div className="slide">
                <div>
                    <h2 className="hidden">Top 5 membres actifs</h2>
                    <ol className="hidden" id="top-message-members"></ol>
                </div>
            </div>
            <div className="slide">
                <div>
                    <h2 className="hidden">Temps passé en vocal</h2>
                    <p className="hidden" id="voice-time"></p>
                </div>
            </div>
            <div className="slide">
                <div>
                    <h2 className="hidden">Top 5 salons vocaux</h2>
                    <ol className="hidden" id="top-voice-channels"></ol>
                </div>
            </div>
            <div className="slide">
                <div>
                    <h2 className="hidden">Top 5 membres actifs</h2>
                    <ol className="hidden" id="top-voice-members"></ol>
                </div>
            </div>
        </div>
        <a className="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a className="next" onclick="changeSlide(1)">&#10095;</a>
    </div>

      <Footer/>
    </div>
    </>
  );
}}