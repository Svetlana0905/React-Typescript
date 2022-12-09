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
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        {products.map((product) => (
          <Product props={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
