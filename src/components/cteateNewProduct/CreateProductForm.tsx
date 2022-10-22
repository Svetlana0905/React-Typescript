import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../../types/types";
import { ErrorMessage } from "../error/ErrorMessage";
import { StandartButton } from "../ui/buttons/buttons";
import { StandartInput } from "../ui/inputs/inputs";

const productData: IProduct = {
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

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProductForm = ({ onCreate }: CreateProductProps) => {
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (valueTitle.trim().length === 0) {
      setError("Введите корректный title");
      return;
    }
    if (valueDescription.trim().length === 0) {
      setError("Введите описание");
      return;
    }
    productData.title = valueTitle;
    productData.description = valueDescription;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data);
  };

  return (
    <form onSubmit={submitHandler}>
      <StandartInput value={valueTitle} setValue={setValueTitle} />
      <StandartInput value={valueDescription} setValue={setValueDescription} />
      {error && <ErrorMessage error={error} />}
      <StandartButton type="submit">Создать</StandartButton>
    </form>
  );
};
