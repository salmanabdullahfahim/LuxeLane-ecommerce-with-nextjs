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
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (product) => product._id !== action.payload._id
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = shopSlice.actions;

export default shopSlice.reducer;
