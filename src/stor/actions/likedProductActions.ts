import { AppDispatch } from "..";
import { IProductLiked } from "../../types/types";
import { likedProductSlice } from "../slices/LikedPriductSlice";

export const addLikedProduct = (productData: IProductLiked) => {
  return (dispatch: AppDispatch) => {
    dispatch(likedProductSlice.actions.addLikedProduct(productData));
  };
};
export const removeLikedProduct = (id: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(likedProductSlice.actions.removeLikedProduct(id));
  };
};
