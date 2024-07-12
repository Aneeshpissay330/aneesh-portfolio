// @ts-ignore
import { PROJECTS } from '../../data';
import { motion } from "framer-motion"

const Projects = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank');
    }
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
                {PROJECTS.map((project: any, index: number) => (
                    <div key={index}>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 onClick={() => openInNewTab("https://todo-list-divf.onrender.com/")} className="mb-2 font-semibold cursor-pointer underline">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech: string, index: number) => (
                                <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#FFA500]">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;