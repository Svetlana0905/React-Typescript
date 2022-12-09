import { useAppSelector } from "../../../../hook";
import "./bottomMenu.scss";
import { Link } from "react-router-dom";
import { headerBottomNavTree } from "../../../../config/headerMenuConfig";
import { useState, useEffect } from "react";

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
    <article className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white shadow-slate-400/50 shadow-md">
      <span className="font-bold">React Typescript 2022</span>
      <div className="flex flex-row gap-7">
        {headerBottomNavTree.map((item) => (
          <Link to={item.path} className={item.styleLink} key={item.key}>
            <span className={item.visibilityTitle}>{item.title}</span>
            {item.icon}
            {item.visibleBadje && (
              <span className="badje">
                {item.key === "basket" ? countCard : countLiked}
              </span>
            )}
          </Link>
        ))}
      </div>
    </article>
  );
};
