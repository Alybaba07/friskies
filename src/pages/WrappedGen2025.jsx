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

        <div className="pt-24 relative w-[90vw] h-[87vh] flex justify-center items-center">
            <div className="felx transform-transition w-[100%] h-[100%]">
                <div className="flex h-[100%] justify-center items-center text-center font-[1.5] pt-15%">

                </div>
            </div>
        </div>

      <Footer/>
    </div>
    </>
  );
}}