import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import  {useEffect, useState} from "react";

function WrappedGen2025() {

let currentSlide = 0;
const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function changeSlide(direction) {
    const totalSlides = slides.length;
    
    // Calculer la nouvelle position de la slide
    const newSlide = currentSlide + direction;

    // Vérifier que la nouvelle position est dans les limites
    if (newSlide >= 0 && newSlide < totalSlides) {
        currentSlide = newSlide;
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateButtons();
    }
}

function showTextWithDelay() {
    const currentSlideElement = slides[currentSlide];
    const textElements = currentSlideElement.querySelectorAll(".stats-content > *");

    // Masquer tout le texte initialement
    textElements.forEach(element => {
        element.style.opacity = 0;
    });

    // Ajouter un délai pour chaque élément
    textElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transition = "opacity 0.5s";
            element.style.opacity = 1;
        }, index * 500); // Délai de 500ms entre chaque élément
    });
}

function addSlideEffect() {
    slidesWrapper.style.transition = "transform 1s ease-in-out";
}

addSlideEffect();

fetch('../../public/stats.json')
  .then(response => response.json())
  .then(data => {
    // Manipuler les données du fichier JSON ici
    document.getElementById("total-messages").textContent = `Messages Totaux : ${data.generalStats.totalMessages}`;
    document.getElementById("voice-time").textContent = `Temps vocal (14 derniers jours) : ${data.generalStats.voiceTimeLast14Days}`;

    // Top 5 salons textuels
    const topTextChannels = data.generalStats.topTextChannels.map(channel => 
        `<li>${channel.channel}: ${channel.messages} messages</li>`
    ).join('');
    document.getElementById("top-text-channels").innerHTML = topTextChannels;

    // Top 5 membres avec le plus de messages
    const topMessageMembers = data.generalStats.topMessageMembers.map(member => 
        `<li>${member.member}: ${member.messages} messages</li>`
    ).join('');
    document.getElementById("top-message-members").innerHTML = topMessageMembers;
  })
  .catch(error => {
    console.error('Erreur lors du chargement des statistiques:', error);
  });

  return (
    <>
          <div class="slideshow-container">
        <div class="slides-wrapper">
            <div class=" flex h-[100%] bg-cover bg-center">
                <div class="stats-content">
                    <h2 class="hidden" data-translate="msgTotal1"></h2>
                    <p class="hidden" id="total-messages-line">
                        <span data-translate="msgTotal2"></span>
                        <span id="total-messages" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-image: -webkit-linear-gradient(left, #78c800, #28a92b); font-weight: bold;"></span>
                        <span style="font-weight: bold;"> messages </span>
                    </p>
                    <p class="hidden" data-translate="msgTotal3"></p>
                </div>
            </div>
            <div class="slide">
                <div class="stats-content">
                    <h2 class="hidden">Top 5 salons textuels</h2>
                    <ol class="hidden" id="top-text-channels"></ol>
                </div>
            </div>
            <div class="slide">
                <div class="stats-content">
                    <h2 class="hidden">Top 5 membres actifs</h2>
                    <ol class="hidden" id="top-message-members"></ol>
                </div>
            </div>
            <div class="slide">
                <div class="stats-content">
                    <h2 class="hidden">Temps passé en vocal</h2>
                    <p class="hidden" id="voice-time"></p>
                </div>
            </div>
            <div class="slide">
                <div class="stats-content">
                    <h2 class="hidden">Top 5 salons vocaux</h2>
                    <ol class="hidden" id="top-voice-channels"></ol>
                </div>
            </div>
            <div class="slide">
                <div class="stats-content">
                    <h2 class="hidden">Top 5 membres actifs</h2>
                    <ol class="hidden" id="top-voice-members"></ol>
                </div>
            </div>
        </div>
        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a class="next" onclick="changeSlide(1)">&#10095;</a>
    </div>
    </>
  )
}

export default WrappedGen2025;