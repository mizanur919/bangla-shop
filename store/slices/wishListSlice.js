import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlistItems.push(...wishlistItems, action.payload);
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
