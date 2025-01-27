// @ts-ignore
import { EXPERIENCES } from '../../data';
import { motion } from "framer-motion"

type ExperienceProps = {

}

const Experience: React.FunctionComponent<ExperienceProps> = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Experience</motion.h1>
            <div>
                {EXPERIENCES.map((experience: any, index: any) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-[#FFD580]">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="w-fit flex flex-row flex-wrap">
                                {experience.technologies.map((tech: any, index: any) => (
                                    <span key={index} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#FFA500]">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience;