import { motion } from "motion/react";

const experiences = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "Jan 2023 – Present",
    description:
      "Built web and mobile apps for clients using React, React Native, Node.js, and Firebase.",
  },
  {
    company: "Personal Projects",
    role: "Indie Developer",
    period: "2022 – Present",
    description:
      "Created productivity apps, dashboard UIs, and custom toolkits focused on performance and usability.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#F1F9FE] w-full py-20 px-6 md:px-8"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0288D1] mb-12"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="relative border-l-2 border-[#0288D1] pl-8 space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[15px] top-1.5 w-3.5 h-3.5 bg-[#0288D1] rounded-full border-2 border-white shadow" />

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#01579B] mb-1">{exp.role}</h3>
              <p className="text-[#01579B] font-semibold mb-0.5">{exp.company}</p>
              <p className="text-sm text-[#01579B] mb-2">{exp.period}</p>
              <p className="text-[#01579B] text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
