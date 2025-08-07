import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Products/ProductSlice";
import cartReducer from "./Cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
