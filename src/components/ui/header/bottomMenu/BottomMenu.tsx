import styles from "./BottomMenu.module.scss";
import { useAppSelector, useAppDispatch } from "../../../../hook";
import { Link } from "react-router-dom";
import { headerBottomNavTree } from "../../../../config/headerMenuConfig";
import { useState, useEffect } from "react";
import Button from "../../buttons/buttons";
import { toggleSidebar } from "../../../../stor/actions/sidebarActions";

export const BottomMenu: React.FC = () => {
  const dispath = useAppDispatch();
  const { products } = useAppSelector((state) => state.likedProduct);
  const { products: cartProducts } = useAppSelector((state) => state.cart);
  const [triggerStyle, setTrigger] = useState(
    useAppSelector((state) => state.sidebar.status)
  );
  const [countLiked, setNum] = useState(0);
  const [countCard, setCart] = useState(0);

  useEffect(() => {
    setNum(products.length);
  }, [products]);

  useEffect(() => {
    setCart(cartProducts.length);
  }, [cartProducts]);

  useEffect(() => {
    dispath(toggleSidebar(triggerStyle));
  }, [triggerStyle, dispath]);

  return (
    <article className={styles.bottom_menu}>
      <span className={styles.bottom_menu__title}>React Typescript 2022</span>
      <Button
        type="button"
        burger_btn
        triggerStyle={triggerStyle}
        onClick={() => setTrigger(!triggerStyle)}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </Button>
      <nav className={styles.bottom_menu__nav}>
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
