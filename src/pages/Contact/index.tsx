import { motion } from "motion/react";
import Button from "../../components/Button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section id="contact" className="bg-white w-full py-20 px-6 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#0288D1] mb-8"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#01579B] text-lg mb-10 max-w-2xl"
        >
          Let’s work together! Whether you have a project in mind or just want to connect, feel free to reach out.
        </motion.p>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          <motion.input
            variants={itemVariants}
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-[#81D4FA] text-[#01579B] bg-white placeholder-[#90A4AE] focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
          />
          <motion.input
            variants={itemVariants}
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-[#81D4FA] text-[#01579B] bg-white placeholder-[#90A4AE] focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
          />
          <motion.textarea
            variants={itemVariants}
            placeholder="Your Message"
            rows={5}
            className="md:col-span-2 p-3 rounded-md border border-[#81D4FA] text-[#01579B] bg-white placeholder-[#90A4AE] focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
          ></motion.textarea>
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Button label="Send Message" variant="primary" />
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
