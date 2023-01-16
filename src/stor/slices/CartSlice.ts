import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

interface CartState {
  products: IProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
