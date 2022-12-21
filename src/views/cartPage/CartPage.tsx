import { useAppSelector } from "../../hook";
import { CartProduct } from "../../components/cardProduct/CartProduct";
import { BasketForm } from "../../components/basketForm/BasketForm";

export const CartPage: React.FC = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <section className="flex flex-row flex-nowrap gap-6 p-4">
      <div className="flex flex-col gap-6 mx-auto max-w-5xl">
        {products?.length
          ? products.map((product) => (
              <CartProduct props={product} key={product.id} />
            ))
          : "Нет товаров в корзине"}
      </div>
      <BasketForm />
    </section>
  );
};
