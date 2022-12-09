import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
  message?: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
  message: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchisSuccsess(state, action: PayloadAction<IProduct[]>) {
      state.loading = false;
      state.error = "";
      state.products = action.payload;
      state.message = "";
    },
    fetchisError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
      state.message = "";
    },
  },
});

export default productsSlice.reducer;
