import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";

const initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find((product: Products) => {
        product._id === action.payload._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      }

      state.productData.push(action.payload);
    },
  },
});

export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;
