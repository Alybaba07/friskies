import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stat from "../../public/stats.json"

export default function WrappedGen2025() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState(null);

  // Charge les stats
  useEffect(() => {
    fetch({Stat})
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) =>
        console.error("Erreur lors du chargement des stats :", err)
      );
  }, []);

  // Effet d'apparition du texte à chaque slide
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    if (!slides.length) return;

    const currentSlideElement = slides[currentSlide];
    const textElements = currentSlideElement.querySelectorAll(
      ".stats-content > *"
    );

    textElements.forEach((el) => {
      el.style.opacity = 0;
    });

    textElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.transition = "opacity .5s";
        el.style.opacity = 1;
      }, index * 400);
    });
  }, [currentSlide]);

  const totalSlides = 6; // tu avais 6 sections

  function nextSlide() {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  }

  function prevSlide() {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }

  return (
    <div className="bg-stone-950 min-h-screen text-[#fffce1]">
      <Navbar />

      <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">

        {/* WRAPPER DES SLIDES */}
        <div
          className="slides-wrapper flex h-full transition-transform duration-1000 ease-in-out"
          style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
        >

          {/* SLIDE 1 */}
          <div className="slide flex-grow basis-full h-full flex justify-center items-start pt-[15%] text-center text-[1.5em]">
            <div className="stats-content">
              <h2 data-translate="msgTotal1"></h2>
              <p>
                <span data-translate="msgTotal2"></span>
                <span
                  id="total-messages"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "-webkit-linear-gradient(left, #78c800, #28a92b)",
                    fontWeight: "bold",
                  }}
                >
                  {stats?.generalStats?.totalMessages || "…"}
                </span>
                <span style={{ fontWeight: "bold" }}> messages </span>
              </p>
              <p data-translate="msgTotal3"></p>
            </div>
          </div>

          {/* SLIDE 2 — Top 5 text channels */}
          <div className="slide flex-grow basis-full h-full flex justify-center items-start pt-[15%] text-center text-[1.5em]">
            <div className="stats-content">
              <h2>Top 5 salons textuels</h2>
              <ol>
                {stats?.generalStats?.topTextChannels?.map((ch, i) => (
                  <li key={i}>{ch.channel} : {ch.messages} messages</li>
                )) || "…"}
              </ol>
            </div>
          </div>

          {/* SLIDE 3 — Top 5 membres messages */}
          <div className="slide flex-grow basis-full h-full flex justify-center items-start pt-[15%] text-center text-[1.5em]">
            <div className="stats-content">
              <h2>Top 5 membres actifs (messages)</h2>
              <ol>
                {stats?.generalStats?.topMessageMembers?.map((m, i) => (
                  <li key={i}>{m.member} : {m.messages}</li>
                )) || "…"}
              </ol>
            </div>
          </div>

          {/* SLIDE 4 — Temps vocal */}
          <div className="slide flex-grow basis-full h-full flex justify-center items-start pt-[15%] text-center text-[1.5em]">
            <div className="stats-content">
              <h2>Temps passé en vocal</h2>
              <p>{stats?.generalStats?.voiceTimeLast14Days || "…"}</p>
            </div>
          </div>

          {/* SLIDE 5 — Top 5 salons vocaux */}
          <div className="slide flex-grow basis-full h-full flex justify-center items-start pt-[15%] text-center text-[1.5em]">
            <div className="stats-content">
              <h2>Top 5 salons vocaux</h2>
              <ol>
                {stats?.generalStats?.topVoiceChannels?.map((c, i) => (
                  <li key={i}>{c.channel} : {c.time}</li>
                )) || "…"}
              </ol>
            </div>
          </div>

          {/* SLIDE 6 — Top 5 membres vocaux */}
          <div className="slide flex-grow basis-full h-full flex justify-center items-start pt-[15%] text-center text-[1.5em]">
            <div className="stats-content">
              <h2>Top 5 membres actifs (vocal)</h2>
              <ol>
                {stats?.generalStats?.topVoiceMembers?.map((m, i) => (
                  <li key={i}>{m.member} : {m.time}</li>
                )) || "…"}
              </ol>
            </div>
          </div>
        </div>

        {/* BOUTONS */}
        {currentSlide > 0 && (
          <button
            className="prev absolute left-5 top-[50%] text-5xl cursor-pointer select-none"
            onClick={prevSlide}
          >
            &#10094;
          </button>
        )}
        {currentSlide < totalSlides - 1 && (
          <button
            className="next absolute right-5 top-[50%] text-5xl cursor-pointer select-none"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}
