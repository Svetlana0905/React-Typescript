import { useState } from "react";
import { CreateProductForm } from "../components/CreateProductForm";
import { ErrorMessage } from "../components/ErrorMessage";
import { useProducts } from "../components/hooks/products";
import { Loading } from "../components/Loading";
import { Modal } from "../components/Modal";
import { Product } from "../components/product/Product";
import { RoundButton } from "../components/ui/buttons/buttons";

import { IProduct } from "../types/types";

export const ProductPage = () => {
  const { loading, products, error, addProduct } = useProducts();
  const [openModal, setOpenModal] = useState(false);

  const createHandler = (product: IProduct) => {
    setOpenModal(false);
    addProduct(product);
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
      {openModal && (
        <Modal title="Title for modal" onClose={() => setOpenModal(false)}>
          <CreateProductForm onCreate={createHandler} />{" "}
        </Modal>
      )}
      <RoundButton
        children={"+"}
        type="button"
        handleClick={() => setOpenModal(true)}
      />
    </>
  );
};
