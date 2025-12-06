import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import temp from "../assets/pp.png";
// import aaron from "../assets/aaron.png";
import aly from "../assets/aly.png";
// import asma from "../assets/asma.png";
// import ayoub from "../assets/ayoub.png";
// import azu from "../assets/azu.png";
// import booba from "../assets/booba.png";
import charlie from "../assets/charlie.png";
// import clem from "../assets/clem.png";
import frisk from "../assets/frisk.png";
// import haddamas from "../assets/haddamas.png";
import kyky from "../assets/kyky.png";
// import legu from "../assets/legu.png";
// import letalia from "../assets/letalia.png";
// import lybur from "../assets/lybur.png";
import max from "../assets/max.png";
import melo from "../assets/melo.png";
// import nymso from "../assets/nymso.png";
// import pacifica from "../assets/pacifica.png";
// import pelin from "../assets/pelin.png";
// import renard from "../assets/renard.png";
// import vince from "../assets/vince.png";

const members = [
  { name: "Aaron", img: temp, role: "Ronin", textColor: "text-zinc-400", anniv: "18 juin 2004", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-yellow-950", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="m356.1 32.57l50 25c-2.2 8.68-9.2 22.47-20.1 37.29C372.7 113 354.4 133.3 335.6 152c-18.7 18.8-38.1 36.2-53.5 48.7c-7.7 6.2-14.5 11.3-19.6 14.6c-2.5 1.6-4.6 2.9-6 3.6c-.3.1-.3.1-.5.1s-.2 0-.5-.1c-1.4-.7-3.5-2-6-3.6c-5.1-3.3-11.9-8.4-19.6-14.6c-15.4-12.5-34.8-29.9-53.5-48.7c-18.8-18.7-37.1-39-50.4-57.13c-10.9-14.83-17.9-28.62-20.1-37.3l50-25c14.6 29.73 29.3 62.14 44.2 90.03c16.2 30.5 31.6 55.7 51.9 65.9l4 2l4-2c20.3-10.2 35.7-35.4 51.9-65.9c14.9-27.89 29.6-60.31 44.2-90.03M256 141.4c7.9 0 15.5.7 22.7 1.9c-8.2 12.2-16 21.5-22.7 26.5c-6.7-5-14.5-14.3-22.7-26.5c7.2-1.2 14.8-1.9 22.7-1.9m83.1 32.5c23.3 22.7 35.9 54.6 35.9 86.5v.6c-33-12-75.9-17.6-119-17.6S170 249 137 261v-.6c0-31.9 12.6-63.8 35.9-86.5c16.2 15.6 32.2 29.8 45.7 40.7c8 6.5 15.1 11.9 21 15.7c2.9 2 5.5 3.5 8 4.7s4.4 2.4 8.4 2.4s5.9-1.2 8.4-2.4s5.1-2.7 8-4.7c5.9-3.8 13-9.2 21-15.7c13.5-10.9 29.5-25.1 45.7-40.7m64.3 38.3c20.6 20 31.5 26.2 63.8 37.3c-12.6 24.9-25.9 47.1-57 61.2l-17.3-52c-.1-5.7-.5-11.4-1.3-17.1zm-294.8 0l11.8 29.4c-.8 5.7-1.2 11.4-1.3 17.1l-17.3 52c-31.11-14.1-44.41-36.3-57.01-61.2c32.3-11.1 43.2-17.3 63.81-37.3M265 261.5c45.1.9 89.3 8.7 117.2 22.2l28.4 85l-43.3-19.8c-3.9-23.6-6.3-46.3-6.3-58.5v-14.6l-13 6.5c-27.9 14-55.5 21.6-83 23zm-18 0v43.8c-27.5-1.4-55.1-9-83-23l-13-6.5v14.6c0 12.2-2.4 34.9-6.3 58.5l-43.3 19.8l28.4-85c27.9-13.5 72.1-21.3 117.2-22.2m96.6 42.8c1.3 18.6 4.8 43.5 9.6 67.6c3 15.4 6.6 30.2 10.5 42.4c3.9 12.3 7.3 21.8 13.9 28.5l2.7 2.6h3.7c14.1 0 38.9 1.2 52.7 9.6c-1.8 1.4-4.8 3.2-8.7 4.9c-9.4 4-23.9 7.7-41.5 10.6c-35.2 5.9-82.9 8.9-130.5 8.9s-95.3-3-130.5-8.9c-17.6-2.9-32.11-6.6-41.51-10.6c-3.9-1.7-6.9-3.5-8.7-4.9c13.7-8.4 38.61-9.6 52.71-9.6h3.7l2.7-2.6c6.6-6.7 10-16.2 13.9-28.5c3.9-12.2 7.5-27 10.5-42.4c4.8-24.1 8.3-49 9.6-67.6c58 25.3 117.2 25.3 175.2 0m-202.8 66.2c-2.9 14.1-6.2 27.6-9.6 38.4c-2.9 9.1-6.1 15.3-8.1 18.5c-11.2-.1-27.71 0-43.01 5.1l13.5-40.4zm230.4 0l47.2 21.6l13.5 40.4c-15.3-5.1-31.8-5.2-43-5.1c-2-3.2-5.2-9.4-8.1-18.5c-3.4-10.8-6.7-24.3-9.6-38.4"/></svg>)},
  { name: "Aly", img: aly, role: "Nécromancienne", textColor: "text-zinc-400", anniv: "20 février 2007", arrivee: "10/07/2022", desc: "« Code, dessin, musique, sport et plein d'autres encore : Aly est LA personne la plus flexible. Aucun défi ne lui fait peur ! »", color: "to-blue-900", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width='1em' height='1em'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6.5a6 6 0 1 0-9.5 4.87v1.13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1.13A6 6 0 0 0 13 6.5Z"/><circle cx="4.5" cy="7" r=".5"/><circle cx="9.5" cy="7" r=".5"/><path d="M6 11.5v2m2-2v2"/></g></svg>)},
  { name: "Amaya", img: temp, role: "Rogue", textColor: "text-zinc-400", anniv: "8 juin 2002", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-violet-500"},
  { name: "Ayoub", img: temp, role: "Archer", textColor: "text-zinc-400", anniv: "3 décembre 2003", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-purple-400"},
  { name: "Azu", img: temp, role: "Sorcière", textColor: "text-zinc-400", anniv: "18 décembre 2001", arrivee: "10/07/2022", desc: "Rassurante et protectrice, elle est capable de devenir une bête féroce quand il s'agit de défendre ses proches !", color: "to-pink-400", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width='1em' height='1em'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40c11.046 0 20-1.79 20-4c0-1.439-3.299-2.7-9-3.405L27 12L15 8l3 6l-5 18.595C7.299 33.3 4 34.56 4 36c0 2.21 8.954 4 20 4"/></svg>)},
  { name: "Booba", img: temp, role: "Support", textColor: "text-zinc-400", anniv: "6 novembre 2000", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-purple-950"},
  { name: "Charlie", img: charlie, role: "Mage", textColor: "text-zinc-400", anniv: "4 juin 2004", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-blue-400"},
  { name: "Clem", img: temp, role: "Assassin", textColor: "text-zinc-400", anniv: "30 septembre 2004", arrivee: "10/07/2022", desc: "Un explorateur qui n’a pas froid aux yeux, apportant optimisme et joie de vivre en toute circonstance !", color: "to-violet-800"},
  { name: "Frisk", img: frisk, role: "Healer", textColor: "text-zinc-400", anniv: "8 septembre 2005", arrivee: "10/07/2022", desc: "Un véritable électron libre dont la créativité est capable de créer le plus beau des chefs d’œuvre comme la plus énigmatique des blagues", color: "to-red-800", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="m381.7 27l-14.5 20.4l49.5 35.1l14.5-20.3zm-57.4 12.3L310.2 60l111.3 76.2l14.1-20.7zM317 92.7l-69.9 82.8c-10.3-2.1-20.9-3.2-31.8-3.2c-86.8 0-157.25 70.5-157.25 157.3C58.05 416 128.5 487 215.3 487s157.3-71 157.3-157.4c0-37.8-13.4-72.5-35.6-99.6l51.4-86.9zm7.4 39l29.5 19.5l-46.5 78c26.1 23.9 42.5 58.2 42.5 96.4c0 72-58.5 130.4-130.6 130.4c-72 0-130.55-58.4-130.55-130.4c0-72.1 58.55-130.6 130.55-130.6c22.6 0 43.9 5.8 62.5 15.9zm-31.5 180.5c-47.3-.7-126.2 58.3-178.3 13.5c.1 57.7 47 104.3 104.7 104.3c56.1 0 102-44 104.6-99.5c-7-13.2-17.8-18.1-31-18.3m-11.5 23.3c5.1-.1 9.7 1.5 12.7 5c6.9 7.9 3.2 22.4-8.3 32.4c-11.4 10-26.3 11.7-33.2 3.8s-3.2-22.4 8.2-32.4c6.5-5.6 14-8.6 20.6-8.8m-56.5 49.1c1.2 0 2.4.1 3.7.3c9.9 1.5 17.2 8.2 16.2 15.1c-1 7-9.8 11-19.8 10c-9.9-2-17.2-8-16.2-15.3c.9-6 7.7-10.1 16.1-10.1"/></svg>)},
  { name: "Haddamas", img: temp, role: "none", textColor: "text-zinc-400", anniv: "12 mars 2001", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-violet-950"},
  { name: "Kyky", img: kyky, role: "none", textColor: "text-zinc-400", anniv: "2006", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-yellow-600"},
  { name: "Léguman", img: temp, role: "Elfe", textColor: "text-zinc-400", anniv: "2 août 2003", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-lime-950"},
  { name: "Letalia", img: temp, role: "Invocateur", textColor: "text-zinc-400", anniv: "27 octobre 1999", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-blue-700"},
  { name: "Lybur", img: temp, role: "Sorcier", textColor: "text-zinc-400", anniv: "20/02/2007", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-slate-500", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="M335.656 19.53c-24.51.093-48.993 5.235-71.062 15.626c-22.46 10.577-43.112 34.202-58.375 62.563c-15.264 28.36-25.182 61.262-27.69 88.75c-7.487 82.112-51.926 155.352-159.78 252.56l-.188 21.44C89.216 403.443 139.915 346.632 176.313 290l.063.03c-9.293 32.473-22.623 63.18-43.594 87.97c-31.47 35.584-69.222 71.1-114.468 106.53l-.062 8.25l25 .064h.47l1.28-1.156c24.405-16.498 48.607-31.488 72.594-41.5l.187.187l-46.436 42.5l28.937.063c48.372-41.685 94.714-90.58 129.626-137c33.587-44.658 56.02-87.312 60.688-116.844c-1.268-2.32-2.552-4.628-3.656-7.094c-18.833-42.06-4.273-96.424 40.218-116.063c32.73-14.45 74.854-3.165 90.438 31.344c.15.333.324.634.47.97c13.302 24.062 6.175 49.48-9.345 61.97c-7.866 6.328-18.442 9.528-28.75 6.56c-10.31-2.966-19.043-11.772-24.5-25.124l17.28-7.062c3.992 9.764 8.667 13.15 12.375 14.22c3.708 1.066 7.767.148 11.875-3.158c8.216-6.61 14.282-21.91 4.406-39.03l-.28-.47l-.22-.5c-10.7-24.82-41.96-33.333-66.22-22.625c-34.063 15.037-45.594 58.052-30.686 91.345c20.527 45.846 77.97 61.177 122.375 40.875c60.157-27.5 80.13-103.328 53.094-161.813c-24.737-53.503-81.41-82.484-138.908-83.843c-1.633-.04-3.272-.07-4.906-.063zm-25.75 26.72c3.238.035 6.363.348 9.406.906c10.343 1.898 19.946 6.753 29.032 13.25c-30.623-5.437-58.324 4.612-80.78 24.782c-22.44 20.152-39.16 50.59-45.783 84.718c-4.655-11.358-7.166-21.462-6.686-31.72c.296-6.343 1.715-12.956 4.78-20.217c9.094-18.016 21.032-33.946 35.22-46.69c7.824-7.026 16.39-13.07 25.53-17.905c10.932-5.212 20.522-7.22 29.282-7.125zm122.938 62.313c22.583 13.167 34.365 41.86 32.937 70.656c-.564 11.395-3.466 22.975-8.905 33.624c-12.48 18.937-35.53 25.51-49.97 20.875l-.092-.25c27.943-10.365 39.18-32.377 40.312-55.19c.124-2.5.115-4.994-.03-7.468c1.447-13.31-.412-28.793-5.47-43.437c-2.244-6.496-5.15-12.89-8.844-18.72l.064-.093zm-135.563 1.312c-20.97 19.342-29.406 35.252-33.25 51.25c-3.848 16.023-2.788 32.84-2.905 52.875c-.14 23.79-2.56 51.542-18.438 85.688c-.005.012-.025.018-.03.03c-21.095 26.753-45.276 52.25-68.907 67.376l-.063-.03c64.195-71.545 68.527-114.792 68.75-153.19c.112-19.197-1.253-37.594 3.438-57.124a98 98 0 0 1 2-7.125h.03c8.098-17.036 16.572-26.058 25.47-31.563c7.18-4.44 15.035-6.697 23.906-8.187z"/></svg>) },
  { name: "Max", img: max, role: "Berserker", textColor: "text-zinc-400", anniv: "17 juin 2003", arrivee: "10/07/2022", desc: "Dark Sasuke dans l’âme : c'est un véritable loup solitaire qui combat sans relâche ses démons à la salle. Sa qualité : être le reflet des défauts de ce monde", color: "to-yellow-400", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="M200.074 29.666c-30.957 17.548-57.03 29.997-80.568 32.37c-8.09.815-15.88.187-23.242-1.888c-14.33 19.58-15.942 46.004-8.905 72.016c5.656 20.91 17.103 40.95 30.66 55.205c.534-7.142 1.38-14.058 2.56-20.56c3.43-18.88 8.727-34.898 21.342-43.316c6.307-4.21 15.02-5.268 22.69-2.363c5.742 2.176 11.038 6.017 16.312 11.458l58.79-34.05l-39.64-68.872zm112.29 0l-39.64 68.873l58.79 34.048c5.274-5.44 10.57-9.282 16.312-11.457c7.67-2.904 16.384-1.845 22.692 2.364c12.614 8.418 17.91 24.437 21.34 43.317c1.18 6.502 2.025 13.418 2.558 20.56c13.558-14.257 25.005-34.297 30.662-55.206c7.038-26.012 5.425-52.436-8.904-72.016c-7.364 2.075-15.153 2.703-23.242 1.887c-23.538-2.372-49.612-14.82-80.57-32.37zM61.015 34.178C38.83 49.144 26.708 68.034 21.654 89.166c-5.597 23.406-2.263 49.864 7.836 75.576c17.58 44.754 55.84 86.336 97.332 104.54c-5.72-17.565-8.727-37.628-9.33-57.278c-22.436-16.898-40.02-44.822-48.174-74.96c-7.755-28.663-6.69-60.166 9.768-84.94c-6.607-4.49-12.676-10.455-18.07-17.926zm390.406 0c-5.394 7.47-11.464 13.435-18.07 17.926c16.46 24.773 17.523 56.276 9.767 84.94c-8.155 30.138-25.74 58.062-48.175 74.96c-.603 19.65-3.61 39.713-9.33 57.277c41.49-18.202 79.753-59.784 97.332-104.538c10.1-25.712 13.433-52.17 7.836-75.576c-5.053-21.132-17.175-40.022-39.36-54.988zm-215.442 88.12l-29.177 16.9c52.91 100.2 83.55 209.812 152.734 295.685l33.492-25.19c-42.77-47.338-67.302-93.227-88.528-140.478c-20.82-46.346-38.85-93.978-68.522-146.918zm40.48.003a764 764 0 0 0-9.644 17.76c6.85 13.446 13.045 26.533 18.856 39.333c6.362-13.51 12.975-26.933 19.973-40.192zm-49.624 103.52c-6.314 14.66-12.478 29.098-18.9 43.395c-21.226 47.25-45.76 93.14-88.528 140.478l33.494 25.192c39.84-49.448 66.89-106.773 92.778-165.635c-6.305-14.493-12.536-28.998-18.844-43.43M98.976 417.71l-17.44 23.08l50.562 38.026l17.44-23.078l-50.56-38.027zm314.485 0L362.9 455.74l17.44 23.078l50.562-38.027l-17.44-23.08z"/></svg>)},
  { name: "Mélo", img: melo, role: "Druide", textColor: "text-zinc-400", anniv: "1er décembre 2003", arrivee: "10/07/2022", desc: "Honnête, drôle et réconfortante à chaque instant, elle peut passer de “voix de la sagesse” à “clumsy queen”, ou encore bien être désignée comme “la mama” !", color: "to-red-950", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='1em' height='1em'><path fill="currentColor" d="M205.41 159.07a60.9 60.9 0 0 1-31.83 8.86a71.7 71.7 0 0 1-27.36-5.66A55.55 55.55 0 0 0 136 194.51V224a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.25v-12.44l-38.62-38.62A52.5 52.5 0 0 1 63.44 176a45.8 45.8 0 0 1-23.92-6.67C17.73 156.09 6 125.62 8.27 87.79a8 8 0 0 1 7.52-7.52c37.83-2.23 68.3 9.46 81.5 31.25a46 46 0 0 1 6.45 28.48a4 4 0 0 1-6.89 2.43l-19.2-20.1a8 8 0 0 0-11.31 11.31l53.88 55.25c.06-.78.13-1.56.21-2.33a68.56 68.56 0 0 1 18.64-39.46l50.59-53.46a8 8 0 0 0-11.31-11.32l-49 51.82a4 4 0 0 1-6.78-1.74c-4.74-17.48-2.65-34.88 6.4-49.82c17.86-29.48 59.42-45.26 111.18-42.22a8 8 0 0 1 7.52 7.52c3 51.77-12.78 93.33-42.26 111.19"/></svg>)},
  { name: "Nymso", img: temp, role: "Lancier", textColor: "text-zinc-400", anniv: "23 août 1999", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-teal-800", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="m18.156 14.938l1.188 109.812l19.5 17.22c15.49-23.43 36.69-41.66 65.094-51.47l-80.5-75.563h-5.282zm168.125 53.78c-.396 44.894-10.642 82.204-31.155 111.5C272.262 286.142 455.438 453.28 455.438 464.407c-11.175 0-197.844-161.162-316.75-264.594c-25.878 25.887-62.488 43.38-110.313 52c68.746 39.904 126.46 57.79 191.594 69.282c-19.723 11.207-43.54 19.43-71.157 24.406c67.254 39.04 123.215 55.186 187.687 65.906c-16.78 9.55-36.457 17.074-59.97 21.313C354.206 477.804 413.56 487 498.314 497.5v-.03c-18.824-85.7-40.233-141.38-96.625-209.845c-.202 22.858-3.87 42.68-10.594 60.5c-19.436-63.145-45.6-114.738-94.438-174.03c-.235 26.606-4.35 50.287-12.094 71.093c-20.53-63.15-48.564-116.11-98.28-176.47zm-68.936 37.126c-29.56 7.767-49.585 24.63-64.406 48.53l30.312 26.75c7.968-26.825 21.017-51.348 34.094-75.28m15.062 11.406c-13.92 25.673-26.966 50.952-33.562 77.656l9.844 8.688c19.153-15.05 40.11-42.41 47.906-63.656z"/></svg>)},
  { name: "Pacifica", img: temp, role: "DPS", textColor: "text-zinc-400", anniv: "2 juin 2003", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-purple-800"},
  { name: "Pelin", img: temp, role: "Voyante", textColor: "text-zinc-400", anniv: "3 décembre 2000", arrivee: "10/07/2022", desc: "ussi attentionnée et douce qu'une grande sœur pourrait l’être,", color: "to-slate-500", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width='1em' height='1em'><path fill="currentColor" d="M28 15c0 3.584-1.571 6.801-4.062 9H24l.925 4.18c.322.897-.434 1.82-1.512 1.82H8.59c-1.079 0-1.845-.923-1.512-1.82L8 24h.063A11.97 11.97 0 0 1 4 15C4 8.373 9.373 3 16 3s12 5.373 12 12M13.945 6.003l-.38-.897a.19.19 0 0 0-.34 0l-.38.897a.48.48 0 0 1-.26.261l-.48.222a.192.192 0 0 0 0 .343l.48.221c.12.05.21.152.26.262l.38.897a.19.19 0 0 0 .34 0l.38-.897a.48.48 0 0 1 .26-.262l.48-.221a.192.192 0 0 0 0-.343l-.48-.222a.5.5 0 0 1-.26-.261m9.815 4.428l-.54-1.28a.274.274 0 0 0-.49 0l-.54 1.28a.73.73 0 0 1-.36.373l-.68.312c-.2.1-.2.393 0 .494l.68.312c.16.07.29.211.36.373l.54 1.28c.1.2.39.2.49 0l.54-1.28a.72.72 0 0 1 .36-.373l.68-.312c.2-.101.2-.393 0-.494l-.68-.312a.73.73 0 0 1-.36-.373m-10.443 4.391a1.46 1.46 0 0 1-.73-.792l-1.092-2.707a.54.54 0 0 0-.99 0L9.414 14.03a1.5 1.5 0 0 1-.73.792l-1.379.655c-.407.215-.407.83 0 1.046l1.378.655c.333.156.592.44.73.792l1.092 2.707a.54.54 0 0 0 .99 0l1.091-2.707c.139-.352.407-.636.73-.792l1.379-.655c.407-.215.407-.83 0-1.046zM8.016 28.528c-.028.077-.023.16.059.26c.088.105.263.212.516.212h14.822c.251 0 .424-.106.51-.211c.083-.1.09-.188.061-.27l-.022-.06L23.197 25H8.804l-.764 3.463z"/></svg>)},
  { name: "Renard", img: temp, role: "Chasseur", textColor: "text-zinc-400", anniv: "2005", arrivee: "10/07/2022", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at pharetra metus, ac rutrum sem. Morbi euismod vitae turpis at tincidunt.", color: "to-rose-950", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="m77.85 11.848l9.535 70.648l-69.418-11.174l41.508 56.07l-11.127 322.715c-11.712 13.235-20.716 28.85-25.823 47.914c74.198-55.834 152.88-71.602 223.606-101.383l-35.913-35.914c-53.122 25.232-105.774 42.49-142.547 71.347l9.674-280.54l8.06 10.888l2.2 4.47h71.304L358.723 394.03c15.618-13.627 29.605-28.41 42.66-44.645l-229.877-193.78V84.226l-11.86-9.165l273.594-10.66c-29.99 36.36-46.84 89.07-71.39 142.416l36.558 36.56c29.22-70.24 45.014-148.09 100.262-221.507c-18.54 4.97-33.69 13.015-46.604 23.603l-.02-.506l-315.437 12.29zm24.613 42.638l50.355 38.916v54.795H99.236l-.607-.146l-38.357-50.988l49 7.89l-6.81-50.466zm248.103 167.48a369 369 0 0 1-26.586 37.727l30.727 25.903c11.16-8.75 22.568-17.176 34.06-25.432l-38.2-38.2zm100.006 89.74C414.826 368.52 375.184 412.43 315.88 447.67c59.143 20.683 118.488 37.302 178.8 43.98c-8.706-60.66-23.977-120.562-44.108-179.94zm-184.08 5.774c-13.42 10.98-27.58 21.186-42.414 30.674l37.47 37.47c8.748-14.57 18.62-27.954 29.327-40.43z"/></svg>)},
  { name: "Vince", img: temp, role: "Paladin", textColor: "text-zinc-400", anniv: "21 mai 2005", arrivee: "10/07/2022", desc: "Sa bienveillance, sa prévenance et sa loyauté font de lui le gentleman par excellence. Le réel chouchou des nanas !", color: "to-green-900", roleIcon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='1em' height='1em'><path fill="currentColor" d="m256 21.938l-4.025 2.01c-96 48-93.455 47.175-189.455 63.175l-8.592 1.432l1.15 8.634c16.125 120.934 48.338 217.868 85.022 285.12c18.34 33.627 37.776 59.85 57.263 78.022C216.85 478.502 236.625 489 256 489s39.15-10.497 58.637-28.668s38.922-44.395 57.263-78.02c36.684-67.254 68.897-164.188 85.022-285.123l1.15-8.635l-8.592-1.432c-96-16-93.455-15.174-189.455-63.174zM224 64c16 0 16 0 32 16c16-16 16-16 32-16c-16 16-16 16-16 32l2.666 48h109.158S400 144 416 128c0 16 0 16-16 32c16 16 16 16 16 32c-16-16-32.176-16-32.176-16h-107.38L288 384s0 32 16 64c-16 0-48 0-48-16c0 16-32 16-48 16c16-32 16-64 16-64l11.555-208H128.13S112 176 96 192c0-16 0-16 16-32c-16-16-16-16-16-32c16 16 32.13 16 32.13 16h109.204L240 96c0-16 0-16-16-32"/></svg>)},
];

function Members() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const openOverlay = (index) => setSelectedIndex(index);
  const closeOverlay = () => setSelectedIndex(null);
  const next = () => setSelectedIndex((prev) => (prev + 1) % members.length);
  const prev = () => setSelectedIndex((prev) => (prev - 1 + members.length) % members.length);

  return (
    
    <>
    <div className="bg-stone-950 min-h-screen">
      <Header/>

      <section className="py-24 ">
          <div className="container mx-auto px-6">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {members.map((m, i) => (
                <div key={i} className={`bg-gradient-to-b from-zinc-900 via-zinc-900 ${m.color} p-8 rounded-xl border cursor-pointer hover:scale-105 transition`} onClick={() => openOverlay(i)}>

                  <div className="flex items-center justify-center mb-6">
                    <img src={m.img} className="w-36 h-36 object-contain"/>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {m.name}
                  </h3>
                  <p className="text-stone-200  font-light leading-relaxed">{m.desc}</p>


                </div>
              ))}
              </div>

          </div>
      </section>
      <Footer/>

      {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
            <div className="relative bg-zinc-900 text-white p-10 w-[100%] h-[100%] md:w-[90%] md:h-[90%] rounded-xl shadow-xl flex flex-col items-center justify-center overflow-auto">
              <button onClick={closeOverlay} className="absolute top-4 left-4 text-3xl cursor-pointer hover:text-red-400">
                ✕
              </button>

              <button onClick={prev} className="absolute left-4 text-4xl cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
              </button>

              <button onClick={next} className="absolute right-4 text-4xl cursor-pointer hover:text-zinc-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"/></svg>
              </button>

              <div className="flex flex-col md:flex-row gap-10 w-full">

                <div className="basis-1/3 flex justify-center items-start">
                  <div className="w-48 h-48 md:w-full md:aspect-square flex items-center justify-center">
                    <img
                      src={members[selectedIndex].img}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="basis-2/3 flex flex-col text-center md:text-left">

                  <h1 className="text-4xl font-extrabold mb-4">
                    {members[selectedIndex].name}
                  </h1>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-xl">
                    <span className={`inline-flex gap-3 items-center rounded-full border-2 px-3 py-1 ${members[selectedIndex].textColor}`}>
                      {members[selectedIndex].roleIcon}
                      <p className="text-sm">{members[selectedIndex].role}</p>
                    </span>

                    <span className="inline-flex gap-3 items-center rounded-full border-2 px-3 py-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'>
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                          <path d="M4 16.5V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5M3 14v-1a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1m-9-6v3m0-3c1.262 0 2-.968 2-2.625S12 2 12 2s-2 1.718-2 3.375S10.738 8 12 8"/><path d="M9 14a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0m12 0a3 3 0 1 1-6 0"/>
                        </g>
                      </svg>
                      <p className="text-sm">{members[selectedIndex].anniv}</p>
                    </span>

                    <span className="inline-flex gap-3 items-center rounded-full border-2 px-3 py-1 text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'>
                        <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"/>
                      </svg>
                      <p className="text-sm">{members[selectedIndex].arrivee}</p>
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-56 w-56">
                        <div className="bg-zinc-700 rounded-md w-full h-full"></div>
                        <div className="bg-zinc-700 rounded-md w-full h-full"></div>
                        <div className="bg-zinc-700 rounded-md w-full h-full"></div>
                        <div className="bg-zinc-700 rounded-md w-full h-full"></div>
                      </div>
                    </div>

                    <div className="flex-1 p-6">
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis lectus eget hendrerit suscipit. Suspendisse semper pretium pulvinar. Integer eget elit nulla. Nullam efficitur, libero eget bibendum interdum, diam felis maximus justo, eu placerat arcu ante ac augue. Ut egestas, lectus id sollicitudin pharetra, libero lacus rhoncus libero, sit amet suscipit ante elit vitae metus. Pellentesque ut fermentum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mi sapien. Quisque ac dapibus ex.
                      </p>
                    </div>
                  </div>

                </div>

              </div>


            </div>
          </div>
      )}

    </div>
    </>
  );
}

export default Members;