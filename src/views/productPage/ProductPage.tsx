import styles from "./ProductPage.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchProducts } from "../../stor/actions/productActions";
import { ErrorMessage } from "../../components/error/ErrorMessage";
import { Loading } from "../../components/ui/loading/Loading";
import { Product } from "../../components/product/Product";

export const ProductPage: React.FC = () => {
  const { error, loading, products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.product_page}>
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}

      {products.map((product) => (
        <Product props={product} key={product.id} />
      ))}
    </div>
  );
};
