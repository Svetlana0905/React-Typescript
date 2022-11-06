import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductLiked } from "../../types/types";

interface LikedProdState {
  products: IProductLiked[];
}

const initialState: LikedProdState = {
  products: [],
};

export const likedProductSlice = createSlice({
  name: "likedProd",
  initialState,
  reducers: {
    addLikedProduct(state, action: PayloadAction<IProductLiked>) {
      state.products.push(action.payload);
    },
    removeLikedProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default likedProductSlice.reducer;
