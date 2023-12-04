import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = {
        id: uuid(),
        name: action.payload.name,
        productId: action.payload.id,
        price: action.payload.price,
        imageURL: action.payload.imageURL,
        quantity: action.payload.quantity,
      };
      state.products.push(product);
      state.totalAmount += product.price;
    },
    deleteFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalAmount -=
        parseInt(action.payload.price) * parseInt(action.payload.cartQuantity);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
