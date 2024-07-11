import { motion } from "framer-motion"

type ContactProps = {

}

const Contact: React.FunctionComponent<ContactProps> = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Get in Touch</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="my-4">Bangalore</motion.p>
                <motion.p
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="my-4 cursor-pointer" onClick={() => window.open('tel:+916360584064')}>+916360584064</motion.p>
                <a href="mailto:aneeshpissay330@gmail.com" className="border-b">aneeshpissay330@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact