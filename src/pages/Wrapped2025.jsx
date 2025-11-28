import Header from "../components/Header";
import Footer from "../components/Footer";

function Wrapped2025() {
  return (
    <>
    <body className="bg-stone-950">
      <Header/>
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="text-3xl md:text-6xl py-5"> 🚧 </p>
          <h2 className="text-xl md:text-4xl font-bold text-stone-50"><span className="text-green-500">Rétrospective 2025</span> en construction</h2>
          <p className="text-stone-50 py-2">Cette page n'est pas encore fonctionnelle, revenez plus tard</p>
        </div>
      <Footer/>
    </body>
    </>
  );
}

export default Wrapped2025;