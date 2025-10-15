import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#a-propos" },
    { name: "Érudits", href: "#erudits" },
    { name: "Textes & Enseignements", href: "#textes" },
    { name: "Événements", href: "#evenements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
   <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'}`}>
  <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
    <a href="#" className="no-underline font-serif text-4xl font-medium text-nailoul_vert sm:text-xl">
      <img src="/nho/logo.png" alt="" className="w-18"/>
    </a>

    {/* Liens Desktop */}
    <div className="hidden md:flex space-x-8">
      {navLinks.map((link) => (
        <a key={link.name} href={link.href}
           className="text-xl  md:text-sm  transition-colors duration-300 font-bold text-nailoul_gris hover:text-nailoul_sable">
          {link.name}
        </a>
      ))}
    </div>

    {/* Bouton Mobile */}
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Menu Mobile */}
    {isMenuOpen && (
      <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg transition-opacity duration-300">
        <div className="flex flex-col space-y-2 px-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="py-2 text-lg text-nailoul_sable hover:text-vert">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Navbar;
