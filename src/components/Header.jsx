import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath(); // initial load
    window.addEventListener('popstate', updatePath);
    window.addEventListener('pushState', updatePath);
    window.addEventListener('replaceState', updatePath);
    return () => {
      window.removeEventListener('popstate', updatePath);
      window.removeEventListener('pushState', updatePath);
      window.removeEventListener('replaceState', updatePath);
    };
  }, []);

  const isActive = (path) => path === currentPath ? 'text-amber-600 font-bold' : 'text-gray-700';

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img src={logo.src} alt="Logo" className="w-6 h-auto" />
          <span className="text-xl font-bold">Restaurant MLD</span>
        </a>

        <nav className="hidden md:flex gap-6">
          <a href="/" className={`text-lg hover:text-amber-600 ${isActive('/')}`}>Accueil</a>
          <a href="/menu" className={`text-lg hover:text-amber-600 ${isActive('/menu')}`}>Menu</a>
          <a href="/order" className={`text-lg hover:text-amber-600 ${isActive('/order')}`}>Commander</a>
          <a href="/contact" className={`text-lg hover:text-amber-600 ${isActive('/contact')}`}>Contact</a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white">
          <a href="/" className={`text-lg hover:text-amber-600 ${isActive('/')}`}>Accueil</a>
          <a href="/menu" className={`text-lg hover:text-amber-600 ${isActive('/menu')}`}>Menu</a>
          <a href="/order" className={`text-lg hover:text-amber-600 ${isActive('/order')}`}>Commander</a>
          <a href="/contact" className={`text-lg hover:text-amber-600 ${isActive('/contact')}`}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
