import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductsSlice";
import likeProductReducer from "./slices/LikedPriductSlice";

const rootReducer = combineReducers({
  product: productReducer,
  likedProduct: likeProductReducer,
});

export function setupStor() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStor>;
export type AppDispatch = AppStore["dispatch"];
