import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToCart as productAddedToCart } from "../cart/cartSlice";
const initialState = {
  loading: false,
  products: [],
  error: "",
};

const URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios.get(URL).then((response) => response.data);
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
    builder.addCase(productAddedToCart, (state, action) => {
      const productFound = action.payload;
      const products = state.products;
      // productFound.quantity--;
      // const filteredProducts = state.products
      // state.products = [...state.products.filter((pro)), productFound];
      // console.log({ productFound, products });
    });
  },
});

export default productSlice.reducer;
