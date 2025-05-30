import { motion } from "motion/react";
import Button from "../../components/Button";

const projects = [
  {
    title: "Todo App",
    description: "A productivity app to manage daily tasks with local storage and Google Drive sync.",
    tech: ["React Native", "Redux", "Google Drive API"],
    image: "https://source.unsplash.com/featured/?todo,productivity",
    liveUrl: "https://example.com/todo-app",
    codeUrl: "https://github.com/aneeshpissay/todo-app",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing full-stack and mobile projects.",
    tech: ["React", "Tailwind CSS", "Vite"],
    image: "https://source.unsplash.com/featured/?portfolio,developer",
    liveUrl: "https://aneesh.dev",
    codeUrl: "https://github.com/aneeshpissay/portfolio",
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeather API with mobile responsiveness.",
    tech: ["React", "API Integration", "Styled Components"],
    image: "https://source.unsplash.com/featured/?weather,forecast",
    liveUrl: "https://example.com/weather-app",
    codeUrl: "https://github.com/aneeshpissay/weather-app",
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-20 px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0288D1] mb-8"
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          viewport={{ once: true }}
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-[#01579B] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#01579B] text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="bg-[#81D4FA] text-[#01579B] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button label="Live Demo" variant="primary" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button label="Source Code" variant="secondary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
