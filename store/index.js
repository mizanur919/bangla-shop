import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slices/wishlistSlice";
import bannersReducer from "./slices/bannerSlice";

const store = configureStore({
  reducer: {
    wishList: wishlistReducer,
    banners: bannersReducer,
  },
});

export default store;
