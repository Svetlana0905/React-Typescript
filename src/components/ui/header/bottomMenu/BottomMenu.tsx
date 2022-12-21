import styles from "./BottomMenu.module.scss";
import { useAppSelector } from "../../../../hook";
import { Link } from "react-router-dom";
import { headerBottomNavTree } from "../../../../config/headerMenuConfig";
import { useState, useEffect } from "react";
import { BurgerBtn } from "../../buttons/buttons";

export const BottomMenu: React.FC = () => {
  const { products } = useAppSelector((state) => state.likedProduct);
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const [countLiked, setNum] = useState(0);
  const [countCard, setCart] = useState(0);

  useEffect(() => {
    setNum(products.length);
  }, [products]);

  useEffect(() => {
    setCart(cartProducts.length);
  }, [cartProducts]);

  return (
    <article className={styles.bottomMenu}>
      <span className={styles.bottomMenu__title}>React Typescript 2022</span>
      <BurgerBtn type="button" />
      <nav className={styles.bottomMenu__nav}>
        {headerBottomNavTree.map((item) => (
          <Link
            to={item.path}
            className={styles[`${item.styleLink}`]}
            key={item.key}
          >
            <span className={styles[`${item.visibilityTitle}`]}>
              {item.title}
            </span>
            {item.icon}
            {item.visibleBadje && (
              <span className={styles.badje}>
                {item.key === "basket" ? countCard : countLiked}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </article>
  );
};
