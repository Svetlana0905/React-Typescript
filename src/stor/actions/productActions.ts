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
export const fetchAddProduct = (productData: IProduct) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.fetching());
      const response = await axios.post<IProduct>("products", productData);
      dispatch(productsSlice.actions.addProduct(response.data));
    } catch (e) {
      dispatch(productsSlice.actions.fetchisError(e as Error));
    }
  };
};
export const fetchDeleteProduct = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.fetching());
      const response = await axios.delete<IProduct>(`products/${id}`);
      dispatch(productsSlice.actions.deleteProduct(response.data));
    } catch (e) {
      dispatch(productsSlice.actions.fetchisError(e as Error));
    }
  };
};
export const fetchEditProduct = (id: number, productData: IProduct) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(productsSlice.actions.fetching());
      const response = await axios.put<IProduct>(`products/${id}`, productData);
      dispatch(productsSlice.actions.editProduct(response.data));
    } catch (e) {
      dispatch(productsSlice.actions.fetchisError(e as Error));
    }
  };
};
export const clearNotice = (s: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(productsSlice.actions.clearMessage(s));
  };
};
