import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb, TbBrandReactNative } from "react-icons/tb";
import { SiExpress, SiDotnet, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

function getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const iconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const Technologies = () => {
    const durations = Array(7).fill(null).map(() => getRandomInt(1, 10));
    console.log(durations);
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
                {[
                    { Icon: TbBrandMongodb, style: { color: '#4DB33D' } },
                    { Icon: SiExpress, style: {} },
                    { Icon: RiReactjsLine, style: { color: '#61DBFB' } },
                    { Icon: FaNodeJs, style: { color: '#3C873A' } },
                    { Icon: TbBrandReactNative, style: { color: '#087ea4' } },
                    { Icon: SiDotnet, style: { color: '#9780e5' } },
                    { Icon: SiMysql, style: { color: '#2b5d80' } }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(durations[index])}
                        initial="hidden"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-400 p-4">
                        <item.Icon className="text-7xl" style={item.style} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;