import "./product.scss";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { IProduct, IProductLiked } from "../../types/types";
import {
  ProductButton,
  LikedProductButton,
  AddToCartButton,
} from "../ui/buttons/buttons";
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
    x: -500,
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
  const [statusButton, setStatus] = useState(false);
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
    dispath(addLikedProduct({ ...e, status: !statusButton }));
  }
  function addToCart(e: IProductLiked) {
    setCount(count + 1);
    dispath(addProduct({ ...e, count: count }));
  }

  return (
    <motion.article
      className="product-block"
      ref={inputRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={blockAnimation}
    >
      <TextUnderline children={props.title} />
      {/* <img src={props.image} alt={props.title} className="product-image" /> */}
      <ImageProduct
        title={props.title}
        path={props.image}
        class={"product-image"}
      />
      <p>
        <span className="text-sky-900/70">Категория:</span> {props.category}
      </p>
      <p className="font-bold">
        <span className="text-sky-900/70 font-normal">Цена:</span> {props.price}
      </p>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-5 self-end">
          <LikedProductButton
            type="button"
            handleClick={() => addLikeProduct(props)}
            triggerStyle={statusButton}
            ariaLabel="Добавить в избранное"
            children={
              <Icon type="Heart" className={statusButton ? "active" : "no"} />
            }
          />
          <ProductButton
            handleClick={() => setDetails((prev) => !prev)}
            triggerStyle={details}
            type="button"
            children={details ? "Скрыть описание" : "Показать описание"}
          />
        </div>
        <AddToCartButton
          type="button"
          handleClick={() => addToCart(props)}
          children="В корзину"
          ariaLabel="Добавить в корзину"
        />
      </div>
      {details && <p>{props.description}</p>}
    </motion.article>
  );
};

export const MProduct = motion(Product);
