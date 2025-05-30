import { motion } from "motion/react";
import Button from "../../components/Button";
import profilePhoto from "../../assets/images/profile-photo.jpg";

const Home = () => {
  return (
    <section className="bg-[#F1F9FE] w-full py-20 px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-center md:text-left space-y-6"
        >
          <h1 className="font-bold text-4xl md:text-5xl text-[#01579B] leading-tight">
            Hi, I’m Aneesh Pissay
          </h1>
          <h2 className="text-xl md:text-2xl text-[#01579B] font-medium">
            Full-Stack Developer for Web & Mobile (React + React Native)
          </h2>
          <p className="text-[#01579B] text-base md:text-lg">
            I build scalable and user-focused applications for both web and mobile platforms. My focus is on creating reliable, maintainable, and high-performance solutions that work seamlessly across devices.
          </p>
          <Button label="View Projects" variant="primary" />
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 md:mt-0 md:ml-10 w-[250px] h-[250px] bg-[#81D4FA] rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img
            src={profilePhoto}
            alt="Aneesh Pissay"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
