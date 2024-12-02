import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { bagsApi } from "./services/bagApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bagsApi.reducerPath]: bagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bagsApi.middleware),
});
