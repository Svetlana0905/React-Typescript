import { motion } from "framer-motion";
import { DiscountBlock } from "../../components/discounts/DiscountBlock";
import { Slider } from "../../components/slider/Slider";
import { MStandartButton } from "../../components/ui/buttons/buttons";

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
      className="flex flex-col justify-between items-center mx-auto h-full"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-y-9 p-5 basis-1/3 items-center justify-center shrink-0">
          <div className="flex flex-col gap-y-4 items-center">
            <motion.h1
              variants={textAnimation}
              custom={1}
              className="text-sky-900/70"
            >
              <em>Store Name</em>
            </motion.h1>
            <motion.p
              variants={textAnimation}
              custom={2}
              className="text-2xl text-sky-900/70"
            >
              <em>Any text about this Store</em>
            </motion.p>
          </div>
          <MStandartButton
            type="button"
            custom={3}
            variants={textAnimation}
            children="Any Actions"
          />
        </div>
        <Slider />
      </div>
      <DiscountBlock />
    </motion.section>
  );
};
