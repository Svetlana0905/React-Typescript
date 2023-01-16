import styles from "./CartProduct.module.scss";
import { useAppDispatch } from "../../hook";
import { removeProductCart } from "../../stor/actions/cartActions";
import { motion } from "framer-motion";
import { IProduct } from "../../types/types";
import { SubtitleText } from "../../components/ui/text/Text";
import Button from "../ui/buttons/buttons";
import { ImageProduct } from "../ui/images/Images";

interface ProductProps {
  props?: IProduct;
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
  const dispath = useAppDispatch();

  return (
    <>
      {props ? (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className={styles.cart_product}
        >
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className={styles.cart_product__inner}
          >
            <SubtitleText>{props.title}</SubtitleText>
            <ImageProduct
              title={props.title}
              path={props.image}
              class="product-image"
            />
            <p>
              <span className="body1__blue">Категория: </span>
              {props.category}
            </p>
            <p>{props.description}</p>
          </motion.div>
          <div className={styles.cart_product__bottom}>
            <Button
              type="button"
              onClick={() => dispath(removeProductCart(props.id))}
              delete_btn
              children="Из корзины"
            />
            {/* <p>Количество: {props.count}</p> */}
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
