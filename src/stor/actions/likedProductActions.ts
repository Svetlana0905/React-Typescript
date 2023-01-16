import { AppDispatch } from "..";
import { IProduct } from "../../types/types";
import { likedProductSlice } from "../slices/LikedPriductSlice";

export const addLikedProduct = (productData: IProduct) => {
  return (dispatch: AppDispatch) => {
    dispatch(likedProductSlice.actions.addLikedProduct(productData));
  };
};
export const removeLikedProduct = (id: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(likedProductSlice.actions.removeLikedProduct(id));
  };
};
