import { AppDispatch } from "..";
import axios from "../../axios";
import { IProduct } from "../../types/types";
import { productsSlice } from "../slices/ProductsSlice";

export const fetchProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.fetching());
      const response = await axios.get<IProduct[]>("products");
      dispatch(productsSlice.actions.fetchisSuccsess(response.data));
    } catch (e) {
      dispatch(productsSlice.actions.fetchisError(e as Error));
    }
  };
};
