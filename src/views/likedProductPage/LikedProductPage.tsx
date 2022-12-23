import styles from "./LikedProduct.module.scss";

import { useAppDispatch, useAppSelector } from "../../hook";
import { IProduct } from "../../types/types";
import Button from "../../components/ui/buttons/buttons";
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
    <div className={styles.liked_product}>
      {products?.length > 0 ? (
        products.map((item) => (
          <section className={styles.liked_product__inner} key={item.id}>
            <TextUnderline children={item.title} />
            <p className={styles.liked_product__category}>
              Категория: <span> {item.category}</span>
            </p>
            <ImageProduct
              title={item.title}
              path={item.image}
              class="product-image"
            />
            <p>{item.description}</p>
            <div className={styles.liked_product__bottom}>
              <p className={styles.liked_product__price}>
                Цена: <span>{item.price}</span> ₽
              </p>
              <Button
                type="button"
                onClick={() => dispath(removeLikedProduct(item.id))}
                delete_btn
                children="Удалить из избранных"
              />
            </div>
          </section>
        ))
      ) : (
        <h4>Нет избранных товаров</h4>
      )}
    </div>
  );
};
