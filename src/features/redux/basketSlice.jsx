import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

const initialState = {
  products: getBasketFromStorage(),
};

const writeFromBasketToStorage = (basket) => {
  console.log("Updating localStorage:", basket);
  localStorage.setItem("basket", JSON.stringify(basket));
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.count += action.payload.count;
      } else {
        state.products.push(action.payload);
      }
      writeFromBasketToStorage(state.products);
    },
    updateBasket: (state, action) => {
      const { id, count } = action.payload;
      console.log(action.payload);
      const index = state.products.findIndex((item) => item.id == id);
      state.products[index].count = count;
    },
    removeFromBasket: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      writeFromBasketToStorage(state.products);
    },
  },
});

export const { addToBasket, removeFromBasket, updateBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
