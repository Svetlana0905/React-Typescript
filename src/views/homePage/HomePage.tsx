import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

export const HomePage = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="flex-col items-center mx-auto max-w-2xl pt-5"
    >
      <motion.h1 variants={textAnimation} className="text-4xl text-sky-900/70">
        <em>Store Name</em>
      </motion.h1>
    </motion.section>
  );
};
