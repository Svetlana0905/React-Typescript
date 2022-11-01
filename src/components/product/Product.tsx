import "./product.scss";
import { useState } from "react";
import { IProduct } from "../../types/types";
import { ProductButton, DeleteButton } from "../ui/buttons/buttons";
import { TextUnderline } from "../ui/text/Text";
import { Modal } from "../../components/ui/modal/Modal";
import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";

interface ProductProps {
  props: IProduct;
}

export const Product: React.FC<ProductProps> = ({ props }) => {
  const [details, setDetails] = useState(false);
  const [isOpenModalEdit, setOpenModalEdit] = useState(false);
  const [isOpenModalDelite, setOpenModalDelite] = useState(false);

  const closeModal = (e: boolean) => {
    if (isOpenModalEdit) setOpenModalEdit(e);
    if (isOpenModalDelite) setOpenModalDelite(e);
  };

  return (
    <article className="product-block">
      <TextUnderline children={props.title} />
      <img src={props.image} alt={props.title} className="product-image" />
      <p>
        <span className="text-sky-900/70">Категория:</span> {props.category}
      </p>
      <p className="font-bold">
        <span className="text-sky-900/70 font-normal">Цена:</span> {props.price}
      </p>
      <p className="font-bold">
        <span className="text-sky-900/70 font-normal">Id:</span> {props.id}
      </p>
      {isOpenModalEdit || isOpenModalDelite ? (
        <Modal
          title={isOpenModalEdit ? "Редактировать товар" : "Удаление товара"}
          onClose={() => closeModal(false)}
        >
          {isOpenModalEdit && <EditProduct props={props} />}
          {isOpenModalDelite && <DeleteProduct props={props} />}
        </Modal>
      ) : null}
      <div className="flex justify-between w-full">
        <ProductButton
          handleClick={() => setDetails((prev) => !prev)}
          triggerStyle={details}
          type="button"
          children={details ? "Скрыть описание" : "Показать описание"}
        />
        <div className="flex gap-7">
          <ProductButton
            triggerStyle={isOpenModalEdit}
            children={"Редактировать"}
            type="button"
            handleClick={() => setOpenModalEdit((prev) => !prev)}
          />
          <DeleteButton
            triggerStyle={isOpenModalDelite}
            children={"Удалить"}
            type="button"
            handleClick={() => setOpenModalDelite((prev) => !prev)}
          />
        </div>
      </div>
      {details && <p>{props.description}</p>}
    </article>
  );
};
