import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/material";

const PRODUCTS = [
  {
    id: "uvhufhvu",
    name: "Black polo",
    price: 300,
    image: "",
  },
  {
    id: "fufvfbvu",
    name: "Black polo",
    price: 300,
    image: "",
  },
  {
    id: "edfndeuhfueh",
    name: "Black polo",
    price: 300,
    image: "",
  },
  {
    id: "yuidjjj",
    name: "Black polo",
    price: 300,
    image: "",
  },
];

const getProducts = () => {
  const products = PRODUCTS.map((product) => (
    <ProductCard
      key={product.id}
      productName={product.name}
      productPrice={product.price}
      productImage={product.image}
    />
  ));
  return products;
};

const ProductListingContainer = () => {
  return <Box>{getProducts()}</Box>;
};

export default ProductListingContainer;
