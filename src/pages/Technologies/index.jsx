import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion"

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const iconVariants = () => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: getRandomInt(1, 10),
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <TbBrandMongodb className="text-7xl" style={{ color: '#4DB33D' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiExpress className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <RiReactjsLine className="text-7xl" style={{ color: '#61DBFB' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaNodeJs className="text-7xl" style={{ color: '#3C873A' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <TbBrandReactNative className="text-7xl" style={{ color: '#087ea4' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiDotnet className="text-7xl" style={{ color: '#9780e5' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants()}
                    initial="hidden"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiMysql className="text-7xl" style={{ color: '#2b5d80' }} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies;