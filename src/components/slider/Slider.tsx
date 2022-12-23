import "./slider.scss";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderData } from "../../data/data";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const dataLenght = sliderData.length;

  const nextSlide = () => {
    slideIndex !== dataLenght - 1
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(0);
  };

  const prevSlide = () => {
    slideIndex !== 0
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(dataLenght - 1);
  };
  const imageAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      borderTopLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      transition: {
        duration: 1.5,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      borderTopLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <div className="slider">
      <AnimatePresence mode="wait">
        <motion.img
          key={slideIndex}
          src={sliderData[slideIndex].imgpath}
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
          className="slider__slider-image"
        />
      </AnimatePresence>
      <div className="next" onClick={() => nextSlide()}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => prevSlide()}>
        {"‣"}
      </div>
    </div>
  );
};
