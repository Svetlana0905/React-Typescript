import styles from "./HomePage.module.scss";
import { motion } from "framer-motion";
// import { DiscountBlock } from "../../components/discounts/DiscountBlock";
import { Slider } from "../../components/slider/Slider";
import Button from "../../components/ui/buttons/buttons";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const HomePage = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.home_page}
    >
      <div className={styles.home_page__inner}>
        <div className={styles.home_page__content}>
          <motion.h1 variants={textAnimation} custom={1}>
            <em>Store Name</em>
          </motion.h1>
          <motion.h3 variants={textAnimation} custom={2}>
            <em>Any text about this Store</em>
          </motion.h3>
          <motion.div custom={3} variants={textAnimation}>
            <Button as="a" href="" children="Страница товаров" yellow_btn />
          </motion.div>
        </div>
        <Slider />
      </div>
      {/* <DiscountBlock /> */}
    </motion.section>
  );
};
