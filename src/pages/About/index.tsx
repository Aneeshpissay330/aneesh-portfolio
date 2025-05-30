import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-20 px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#0288D1] mb-8"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#01579B] text-lg leading-relaxed max-w-4xl space-y-4"
        >
          <p>
            I'm a Full-Stack Developer with a strong foundation in JavaScript, React, Node.js, and modern web technologies.
            I build scalable, efficient, and responsive applications with a focus on performance and maintainability.
          </p>
          <p>
            I also develop cross-platform mobile apps using React Native, combining web and mobile experience to build consistent user experiences across platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
