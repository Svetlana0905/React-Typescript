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

  return (
    <div className="slider">
      <AnimatePresence exitBeforeEnter>
        <motion.img
          key={slideIndex}
          src={sliderData[slideIndex].imgpath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
