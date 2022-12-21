import { useAppDispatch, useAppSelector } from "../../hook";
import { IProduct } from "../../types/types";
import { DeleteButton } from "../../components/ui/buttons/buttons";
import { removeLikedProduct } from "../../stor/actions/likedProductActions";
import { TextUnderline } from "../../components/ui/text/Text";
import { ImageProduct } from "../../components/ui/images/Images";

interface ProductProps {
  props?: IProduct[];
}

export const LikedProductPage: React.FC<ProductProps> = () => {
  const dispath = useAppDispatch();
  const { products } = useAppSelector((state) => state.likedProduct);
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products?.length > 0 ? (
        products.map((item) => (
          <section className="product-block" key={item.id}>
            <p className="font-bold">
              <span className="text-sky-900/70 font-normal">Id:</span> {item.id}
            </p>
            <TextUnderline children={item.title} />
            {/* <img src={item.image} alt={item.title} className="product-image" /> */}
            <ImageProduct
              title={item.title}
              path={item.image}
              class={"product-image"}
            />
            <p>{item.description}</p>
            <DeleteButton
              type="button"
              handleClick={() => dispath(removeLikedProduct(item.id))}
            >
              Удалить из избранных
            </DeleteButton>
          </section>
        ))
      ) : (
        <span>Нет избранных товаров</span>
      )}
    </div>
  );
};
