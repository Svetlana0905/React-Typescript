import styles from "./CartProduct.module.scss";

import { motion } from "framer-motion";

import { IProductLiked } from "../../types/types";
import { SubtitleText } from "../../components/ui/text/Text";
import { DeleteButton } from "../ui/buttons/buttons";
import { useState } from "react";
import { ImageProduct } from "../ui/images/Images";

interface ProductProps {
  props?: IProductLiked;
}

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    borderTopLeftRadius: 500,
    borderBottomRightRadius: 500,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    borderTopLeftRadius: 500,
    borderBottomRightRadius: 500,
    transition: {
      duration: 1,
      type: "spring",
    },
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
          className={styles.cartProduct}
        >
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className={styles.cartProduct__inner}
          >
            <SubtitleText>{props.title}</SubtitleText>
            <ImageProduct
              title={props.title}
              path={props.image}
              class={"product-image"}
            />
            <p>
              <span className="body1__blue">Категория: </span>
              {props.category}
            </p>
            <p className="">{props.description}</p>
          </motion.div>
          <div className={styles.cartProduct__bottom}>
            <DeleteButton
              handleClick={() => setDetails((prev) => !prev)}
              triggerStyle={details}
              type="button"
              children="Удалить из корзины"
            />
            <p> {props.count}</p>
            <p className="text-bold">
              <span className="body1__blue">Цена: </span>
              {props.price}
            </p>
          </div>
        </motion.section>
      ) : null}
    </>
  );
};
