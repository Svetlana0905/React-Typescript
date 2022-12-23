import styles from "./Product.module.scss";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { IProduct, IProductLiked } from "../../types/types";
import Button from "../ui/buttons/buttons";
import { ImageProduct } from "../ui/images/Images";
import { TextUnderline } from "../ui/text/Text";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addLikedProduct } from "../../stor/actions/likedProductActions";
import { addProduct } from "../../stor/actions/cartActions";
import { Icon } from "../ui/icon/icon";

interface ProductProps {
  props: IProduct;
}

const blockAnimation = {
  hidden: {
    x: -250,
    opacity: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
    },
  },
};

export const Product: React.FC<ProductProps> = ({ props }) => {
  let likeArr = useAppSelector((state) => state.likedProduct.products);
  const dispath = useAppDispatch();
  const [details, setDetails] = useState(false);
  const [statusLiked, setStatus] = useState(false);
  const [count, setCount] = useState(1);
  const inputRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (likeArr.length) {
      const item = likeArr.filter(
        (item) => item.status && item.id === props.id
      );
      if (item.length) setStatus(true);
    }
  }, [likeArr, props.id]);

  function addLikeProduct(e: IProduct) {
    setStatus(true);
    dispath(addLikedProduct({ ...e, status: !statusLiked }));
  }

  function addToCart(e: IProductLiked) {
    setCount(count + 1);
    dispath(addProduct({ ...e, count: count }));
  }

  return (
    <motion.article
      className={styles.product_block}
      ref={inputRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={blockAnimation}
    >
      <TextUnderline children={props.title} />
      <ImageProduct
        title={props.title}
        path={props.image}
        class="product-image"
      />
      <p>
        <span className={styles.product_block__category}>Категория: </span>
        {props.category}
      </p>
      <p>
        <span className={styles.product_block__category}>Цена: </span>{" "}
        <span className="text-bold">{props.price}</span>
      </p>
      <div className={styles.product_block__bottom}>
        <div className={styles.product_block__btnBlock}>
          <Button
            type="button"
            onClick={() => addLikeProduct(props)}
            liked_btn
            disabled={statusLiked}
            children={
              <>
                <Icon type="Heart" className={statusLiked ? "active" : "no"} />
                <span className={styles.liked_btn__text}>
                  {statusLiked ? "Добавлен" : "Добавить в избранные"}
                </span>
              </>
            }
          />
          <Button
            onClick={() => setDetails((prev) => !prev)}
            primary
            type="button"
            children={details ? "Скрыть описание" : "Показать описание"}
          />
        </div>
        <Button
          type="button"
          onClick={() => addToCart(props)}
          secondary
          children="В корзину"
        />
      </div>
      {details && <p>{props.description}</p>}
    </motion.article>
  );
};

export const MProduct = motion(Product);
