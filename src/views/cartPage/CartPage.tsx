import { useAppSelector } from "../../hook";
import { CartProduct } from "../../components/cardProduct/CartProduct";
import { BasketForm } from "../../components/basketForm/BasketForm";
import { useEffect, useState } from "react";

export const CartPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart);
  const [arr, setArr] = useState();

  useEffect(() => {
    console.log(products);
   //  let res = products.reduce((accum, item) => {
   //    accum.push(item);
   //    return accum;
   //  }, []);
   //  console.log(res);

    // products.filter((item)=> )
  }, [products]);

  return (
    <section className="flex flex-row flex-nowrap gap-6 p-4">
      <div className="flex flex-col gap-6 mx-auto max-w-5xl">
        {products?.length
          ? products.map((product) => <CartProduct props={product} />)
          : "nnnnn"}
      </div>
      <BasketForm />
    </section>
  );
};
