import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.totalAmount += parseInt(action.payload.price);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
