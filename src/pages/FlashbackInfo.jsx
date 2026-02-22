import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function FlashbackInfo() {
  return (
    <>
    <div className="bg-stone-950 min-h-screen">
      <Header/>
        <div className="text-stone-100 pt-[2%] pb-[2%]">
          <p className="pl-[2%]"> Les membres pris en compte pour le flashback sont ceux ayant répondu au formulaire. Si vous n'êtes pas présent et aimerez l'être, vous pouvez toujours répondre au formulaire juste <a href="https://docs.google.com/forms/d/e/1FAIpQLScYsEJCrLVeUVoU_i5HnoovWlHWHJarwSXXTmCjAFq_hYG6zg/viewform" className="underline"> ici </a></p>

        <h3 className="p-[2%] font-bold"><u>Salons vocaux</u></h3>
        <p className="pl-[2%]"> Les donées vocales ont été relevées mensuellement (tous les 30 jours) et manuellement (parce que sinon ça coûte cher). <br/> La fantastique et incroyable Alybaba (aka Aly la goat, dites que jsuis la goat please) a possiblement eu des retards/oublis. <br/> Voici donc les dates exactes d'enregistrement :<br/>
            <em>En rouge, les jours non enregistrés</em>
        </p>
        <ul className="p-[2%]">
            <li>Du mercredi 1er janvier au mercredi 29 janvier inclus</li>
            <li>Du jeudi 30 janvier au samedi 1er mars inclus</li>
            <li className="text-red-700">Du dimanche 2 mars au lundi 3 mars (soit 2 jours)</li>
            <li>Du mardi 4 mars au jeudi 3 avril inclus</li>
            <li>Du mercredi 4 avril au dimanche 4 mai inclus</li>
            <li className="text-red-700">Du lundi 5 mai au mardi 13 mai (soit 9 jours)</li>
            <li>Du mercredi 14 mai au vendredi 13 juin inclus</li>
            <li className="text-red-700">Du samedi 14 juin au jeudi 19 juin (soit 6 jours)</li>
            <li>Du vendredi 20 juin au dimanche 20 juillet inclus </li>
            <li className="text-red-700">Du lundi 21 juillet au mercredi 23 juillet (soit 3 jours)</li>
            <li>Du jeudi 24 juillet au samedi 23 août inclus</li>
            <li className="text-red-700">Du dimanche 24 août au lundi 25 septembre (soit 2 jours)</li>
            <li>Du mardi 26 août au jeudi 25 septembre</li>
        </ul>
        </div>

      <Footer/>
    </div>
    </>
  );
}

export default FlashbackInfo;