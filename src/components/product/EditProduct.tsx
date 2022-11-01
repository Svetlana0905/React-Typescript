import React, { useState } from "react";
import { StandartButton } from "../ui/buttons/buttons";
import { StandartInput } from "../ui/inputs/inputs";
import { IProduct } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hook";

import {
  fetchEditProduct,
  clearNotice,
} from "../../stor/actions/productActions";
import { Loading } from "../ui/loading/Loading";
import { ErrorMessage } from "../error/ErrorMessage";

const productData: IProduct = {
  id: 1,
  title: "",
  price: 13.5,
  description: "",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 12,
    count: 5,
  },
};

interface EditProductProps {
  props: IProduct;
}

export const EditProduct: React.FC<EditProductProps> = ({ props }) => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.product);
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    valueTitle.trim()
      ? (productData.title = valueTitle.trim())
      : (productData.title = props.title);

    valueDescription.trim()
      ? (productData.description = valueDescription.trim())
      : (productData.description = props.description);

    await dispatch(fetchEditProduct(props.id, productData));
    setTimeout(() => dispatch(clearNotice("")), 4000);
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}

      <form onSubmit={submitHandler}>
        <StandartInput
          value={valueTitle}
          setValue={setValueTitle}
          placeholder={props.title}
          label="Изменить название"
        />
        <StandartInput
          value={valueDescription}
          setValue={setValueDescription}
          placeholder={props.description}
          label="Изменить описание"
        />
        <StandartButton type="submit">Изменить</StandartButton>
      </form>
    </div>
  );
};
