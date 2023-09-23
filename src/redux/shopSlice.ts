import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface storeState {
  productData: Products[];
  userInfo: null | string;
  orderData: [];
}

const initialState: storeState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (product: Products) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (product: Products) => product._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (product: Products) => product._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      }
      existingProduct && existingProduct.quantity--;
    },
  },
});

export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;
