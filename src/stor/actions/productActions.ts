import { AppDispatch } from "..";
import axios from "../../axios";
import { productSlice } from "../slices/ProductSlice";

export const fetchProduct = () => {
  return async (dispath: AppDispatch) => {
    try {
      dispath(productSlice.actions.fetching());
      const response = await axios.get("products");
      dispath(productSlice.actions.fetchiSuccsess(response.data));
    } catch (e) {
      dispath(productSlice.actions.fetchiError(e as Error));
    }
  };
};
