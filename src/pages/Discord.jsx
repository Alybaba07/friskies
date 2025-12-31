import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

function Discord() {
  return (
    <>
    <body className="bg-stone-950">
        <Navbar/>
        <div className="flex flex-col justify-center items-center h-screen">
            <p className="text-3xl md:text-6xl py-5"> 🚧 </p>
            <h2 className="text-xl md:text-4xl font-bold text-stone-50">En cours de construction</h2>
            <p className="text-stone-50 py-2 p-10">Cette page n'est pas encore fonctionnelle, revenez plus tard</p>
        </div>
        <Footer/>
    </body>
    </>
  );
}

export default Discord;