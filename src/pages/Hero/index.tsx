// @ts-ignore
import { HERO_CONTENT } from '../../data';
import photo from '../../assets/photo.png';
import { motion } from "framer-motion"

type HeroProps = {

}

const container = (delay: number, x: number) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero: React.FunctionComponent<HeroProps> = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0, -100)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-thin tracking-tight lg:mt-16">Aneesh Pissay</motion.h1>
                        <motion.span
                            variants={container(0.5, -100)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-[#FFD580] via-[#FFA500] to-[#DD6B2C] bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1, -100)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            variants={container(1.5, 100)}
                            initial="hidden"
                            animate="visible"
                            src={photo} className="w-3/4 rounded-sm" alt="Aneesh Pissay" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero