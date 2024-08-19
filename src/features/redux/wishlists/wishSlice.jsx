import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: localStorage.getItem("wishListItems")
    ? JSON.parse(localStorage.getItem("wishListItems"))
    : [],
};

const wishSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const exists = state.wishListItems.some(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.wishListItems.push(action.payload);
        localStorage.setItem(
          "wishListItems",
          JSON.stringify(state.wishListItems)
        );
      }
    },
    removeWishItem: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "wishListItems",
        JSON.stringify(state.wishListItems)
      );
    },
  },
});

export const { addToWishList, clearWishList, removeWishItem } =
  wishSlice.actions;

export default wishSlice.reducer;
