import "./product.css";
import { useState } from "react";
import { IProduct } from "../../types/types";
import { ProductButton } from "../ui/buttons/buttons";

interface ProductProps {
  props: IProduct;
}

export const Product: React.FC<ProductProps> = ({ props }) => {
  const [details, setDetails] = useState(false);

  return (
    <div className="product-block">
      <img src={props.image} alt={props.title} className="product-image" />
      <p>{props.title}</p>
      <p className="font-bold">{props.price}</p>
      <ProductButton
        handleClick={() => setDetails((prev) => !prev)}
        triggerStyle={details}
        type="button"
        children={details ? "Скрыть описание" : "Показать описание"}
      />
      {details && <p>{props.description}</p>}
    </div>
  );
};
