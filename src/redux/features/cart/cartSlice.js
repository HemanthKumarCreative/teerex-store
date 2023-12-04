import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  products: [],
  totalAmount: 0,
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
      state.totalAmount += parseInt(action.payload.price);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
