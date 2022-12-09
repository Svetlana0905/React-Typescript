import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductLiked } from "../../types/types";

interface CartState {
  products: IProductLiked[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProductLiked>) {
      state.products.push(action.payload);
    },
    deliteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
