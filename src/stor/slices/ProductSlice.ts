import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchiSuccsess(state, action: PayloadAction<IProduct[]>) {
      state.loading = false;
      console.log(action.payload);
      state.products = action.payload;
      // console.log(state.products);
    },
    fetchiError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default productSlice.reducer;
