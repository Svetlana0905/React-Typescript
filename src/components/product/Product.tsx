import styles from "./Product.module.scss";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IProduct } from "../../types/types";
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

export const Product: React.FC<ProductProps> = ({ props }) => {
  let likeArr = useAppSelector((state) => state.likedProduct.products);
  let cartProductArr = useAppSelector((state) => state.cart.products);
  const dispath = useAppDispatch();
  const [details, setDetails] = useState(false);
  const [statusLiked, setStatus] = useState(false);
  const [statusCart, setStatusCart] = useState(false);
  console.log(cartProductArr);

  useEffect(() => {
    if (likeArr.length) {
      const item = likeArr.filter(
        (item) => item.status && item.id === props.id
      );
      if (item.length) setStatus(true);
    }
  }, [likeArr, props.id]);

  useEffect(() => {
    if (cartProductArr.length) {
      const item = cartProductArr.filter(
        (item) => item.cart && item.id === props.id
      );
      if (item.length) setStatusCart(true);
    }
  }, [cartProductArr, props.id]);

  function addLikeProduct(e: IProduct) {
    setStatus(true);
    dispath(addLikedProduct({ ...e, status: !statusLiked }));
  }

  function addToCart(e: IProduct) {
    setStatusCart(true);
    dispath(addProduct({ ...e, cart: !statusCart }));
  }

  return (
    <article className={styles.product_block}>
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
          disabled={statusCart}
          children={statusCart ? "В корзине" : "В корзину"}
        />
      </div>
      {details && <p>{props.description}</p>}
    </article>
  );
};

export const MProduct = motion(Product);
