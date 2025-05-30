import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "../../components/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F1F9FE]">
      <div className="max-w-screen-xl mx-auto p-6 md:p-8 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer font-bold flex flex-row text-xl text-[#0288D1]">
          Aneesh Pissay
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex flex-row gap-10 font-bold">
            <a href="#about" className="text-[#01579B] hover:text-[#0288D1]">About</a>
            <a href="#skills" className="text-[#01579B] hover:text-[#0288D1]">Skills</a>
            <a href="#projects" className="text-[#01579B] hover:text-[#0288D1]">Projects</a>
            <a href="#experience" className="text-[#01579B] hover:text-[#0288D1]">Experience</a>
            <a href="#contact" className="text-[#01579B] hover:text-[#0288D1]">Contact</a>
          </nav>
          <Button label="Resume" variant="primary" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer">
          <span
            className="material-symbols-outlined text-3xl text-[#01579B]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            menu
          </span>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-6 w-52 bg-[#F1F9FE] text-[#01579B] rounded-lg shadow-lg p-5 flex flex-col gap-4 font-semibold md:hidden z-50"
          >
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#0288D1]">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-[#0288D1]">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-[#0288D1]">Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="hover:text-[#0288D1]">Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#0288D1]">Contact</a>
            <div className="pt-2">
              <Button label="Resume" variant="primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
