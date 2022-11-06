import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchProducts } from "../../stor/actions/productActions";
import { CreateProductForm } from "../../components/product/CreateProductForm";
import { ErrorMessage } from "../../components/error/ErrorMessage";
import { Loading } from "../../components/ui/loading/Loading";
import { Modal } from "../../components/ui/modal/Modal";
import { Product } from "../../components/product/Product";
import { RoundButton } from "../../components/ui/buttons/buttons";

export const ProductPage: React.FC = () => {
  const { error, loading, products } = useAppSelector((state) => state.product);
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const openModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        {products.map((product) => (
          <Product props={product} key={product.id} />
        ))}
      </div>
      {isOpenModal && (
        <Modal title="Title for modal" onClose={() => setOpenModal(false)}>
          <CreateProductForm onCreate={openModal} />
        </Modal>
      )}
      <RoundButton
        children="+"
        type="button"
        handleClick={() => setOpenModal(true)}
      />
    </>
  );
};
