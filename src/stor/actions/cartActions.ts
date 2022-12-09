import { AppDispatch } from "..";
import { IProductLiked } from "../../types/types";
import { cartSlice } from "../slices/CartSlice";

export const addProduct = (productData: IProductLiked) => {
  return (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.addProduct(productData));
  };
};
