import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/material";
import { fetchProducts } from "../../redux/features/product/productSlice";

const getProducts = (products) => {
  const productsView = products.map((product) => (
    <ProductCard
      key={product.id}
      productName={product.name}
      productPrice={product.price}
      productImage={product.imageURL}
    />
  ));
  return productsView;
};

const ProductListingContainer = () => {
  const product = useSelector((state) => state.product);
  const { loading, products, error } = product;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexWrap: "wrap",
        maxHeight: "70vh",
        overflowY: "auto",
      }}
    >
      {loading && <Box>Loading...</Box>}
      {!loading && error ? <Box>Error : {error}</Box> : null}
      {!loading && products.length ? getProducts(products) : null}
    </Box>
  );
};

export default ProductListingContainer;
