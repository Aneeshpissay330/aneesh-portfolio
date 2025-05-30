import { motion } from "motion/react";
import linkedin from "../../assets/images/linkedin-logo.png";
import github from "../../assets/images/github-logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#F1F9FE] border-t border-[#81D4FA] py-6 px-6 md:px-8 text-center text-[#01579B]"
    >
      <p className="font-semibold">
        &copy; {new Date().getFullYear()} Aneesh Pissay. All rights reserved.
      </p>

      {/* Social Icon Links */}
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="https://github.com/aneeshpissay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={github}
            alt="GitHub"
            className="w-6 h-6 transition"
          />
        </a>
        <a
          href="https://linkedin.com/in/aneeshpissay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={linkedin}
            alt="LinkedIn"
            className="w-6 h-6 transition"
          />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
