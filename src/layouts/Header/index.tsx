import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-6 md:p-8 flex justify-between items-center">
      {/* Logo */}
      <div className="cursor-pointer font-bold flex flex-row text-xl">
        <div className="text-[#7C3AED] mr-1">Aneesh</div>Portfolio
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex flex-row gap-10 font-bold">
        <a href="#home" className="cursor-pointer hover:text-[#7C3AED]">Home</a>
        <a href="#about" className="cursor-pointer hover:text-[#7C3AED]">About</a>
        <a href="#projects" className="cursor-pointer hover:text-[#7C3AED]">Projects</a>
        <a href="#contact" className="cursor-pointer hover:text-[#7C3AED]">Contact</a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer">
        <span
          className="material-symbols-outlined text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          menu
        </span>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 right-6 bg-[#121212] text-white rounded-lg shadow-lg p-5 flex flex-col gap-4 font-bold md:hidden z-50">
          <a href="#home" className="hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
