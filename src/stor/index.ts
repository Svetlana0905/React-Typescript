import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlice";

const rootReducer = combineReducers({
  product: productReducer,
});

export function setupStor() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStor>;
export type AppDispatch = AppStore["dispatch"];
