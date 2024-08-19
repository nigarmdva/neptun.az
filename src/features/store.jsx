import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/redux/basketSlice";
import wishSlice from "../features/redux/wishlists/wishSlice";
const store = configureStore({
  reducer: {
    basket: basketReducer,
    wishLists: wishSlice,
  },
});
export default store;
