import { AppDispatch } from "..";
import { IProduct } from "../../types/types";
import { cartSlice } from "../slices/CartSlice";

export const addProduct = (productData: IProduct) => {
  return (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.addProduct(productData));
  };
};
export const removeProductCart = (id: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.deleteProduct(id));
  };
};
