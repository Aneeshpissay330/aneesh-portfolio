import { motion } from "motion/react";
import javascript from '../../assets/images/javascript.svg';
import react from '../../assets/images/react.svg';
import typescript from '../../assets/images/typescript.svg';
import nodejs from '../../assets/images/nodedotjs.svg';
import express from '../../assets/images/express.svg';
import mongodb from '../../assets/images/mongodb.svg';
import firebase from '../../assets/images/firebase.svg';
import tailwind from '../../assets/images/tailwindcss.svg';
import github from '../../assets/images/github.svg';
import redux from '../../assets/images/redux.svg';
import nextjs from '../../assets/images/nextdotjs.svg';

const skills = [
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "React Native", icon: react },
  { name: "TypeScript", icon: typescript },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git & GitHub", icon: github },
  { name: "Redux Toolkit", icon: redux },
  { name: "Next.js", icon: nextjs },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#F1F9FE] w-full py-20 px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0288D1] mb-8"
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          viewport={{ once: true }}
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-[#01579B] hover:shadow-lg transition"
            >
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
