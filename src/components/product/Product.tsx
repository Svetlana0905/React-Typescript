import "./product.scss";
import { useState, useEffect } from "react";
import { IProduct } from "../../types/types";
import {
  ProductButton,
  DeleteButton,
  LikedProductButton,
} from "../ui/buttons/buttons";
import { TextUnderline } from "../ui/text/Text";
import { Modal } from "../../components/ui/modal/Modal";
import { EditProduct } from "./EditProduct";
import { DeleteProduct } from "./DeleteProduct";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addLikedProduct } from "../../stor/actions/likedProductActions";
import { Icon } from "../ui/icon/icon";

interface ProductProps {
  props: IProduct;
}

export const Product: React.FC<ProductProps> = ({ props }) => {
  let likeArr = useAppSelector((state) => state.likedProduct.products);
  const dispath = useAppDispatch();
  const [details, setDetails] = useState(false);
  const [isOpenModalEdit, setOpenModalEdit] = useState(false);
  const [isOpenModalDelite, setOpenModalDelite] = useState(false);
  const [statusBut, setStatus] = useState(false);

  useEffect(() => {
    if (likeArr.length) {
      const item = likeArr.filter(
        (item) => item.status && item.id === props.id
      );
      if (item.length) setStatus(true);
    }
  }, [likeArr, props.id]);

  function toggleLikedProduct(e: IProduct) {
    setStatus(true);
    dispath(addLikedProduct({ ...e, status: !statusBut }));
  }

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
        <div className="flex flex-col gap-5 relative">
          <LikedProductButton
            type="button"
            handleClick={() => toggleLikedProduct(props)}
            triggerStyle={statusBut}
            ariaLabel="Добавить в избранное"
            children={
              <Icon type="Heart" className={statusBut ? "active" : ""} />
            }
          />

          <ProductButton
            handleClick={() => setDetails((prev) => !prev)}
            triggerStyle={details}
            type="button"
            children={details ? "Скрыть описание" : "Показать описание"}
          />
        </div>
        <div className="flex gap-7 self-end">
          <ProductButton
            triggerStyle={isOpenModalEdit}
            children="Редактировать"
            type="button"
            handleClick={() => setOpenModalEdit((prev) => !prev)}
            ariaLabel="Редактировать продукт"
          />
          <DeleteButton
            triggerStyle={isOpenModalDelite}
            children="Удалить"
            type="button"
            handleClick={() => setOpenModalDelite((prev) => !prev)}
            ariaLabel="Удалить продукт"
          />
        </div>
      </div>
      {details && <p>{props.description}</p>}
    </article>
  );
};
