import { motion } from "framer-motion";

import { IProductLiked } from "../../types/types";
import { SubtitleText } from "../../components/ui/text/Text";
import { DeleteButton } from "../ui/buttons/buttons";
import { useState } from "react";

interface ProductProps {
  props?: IProductLiked;
}

const textAnimation = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const CartProduct: React.FC<ProductProps> = ({ props }) => {
  const [details, setDetails] = useState(false);
  return (
    <>
      {props ? (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="relative flex flex-row bg-slate-100 p-5 rounded-2xl gap-10 justify-between shadow-slate-300 shadow-md hover:shadow-lg hover:shadow-slate-600/40"
        >
          <motion.div variants={textAnimation} className="flex flex-col gap-4">
            <SubtitleText>{props.title}</SubtitleText>
            <img
              src={props.image}
              alt={props.title}
              className="product-image"
            />
            <p>
              <span className="text-sky-900/70">Категория: </span>
              {props.category}
            </p>
            <p className="">{props.description}</p>
          </motion.div>
          <div className="flex flex-col justify-between shrink-0">
            <DeleteButton
              handleClick={() => setDetails((prev) => !prev)}
              triggerStyle={details}
              type="button"
              children="Удалить из корзины"
            />
            <p> {props.count}</p>
            <p className="font-bold ">
              <span className="text-sky-900/70 font-normal">Цена: </span>
              {props.price}
            </p>
          </div>
        </motion.section>
      ) : null}
    </>
  );
};
