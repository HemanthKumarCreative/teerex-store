import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const PRODUCTS = [
  {
    name: "Black polo",
    price: 300,
    image: "",
  },
  {
    name: "Black polo",
    price: 300,
    image: "",
  },
  {
    name: "Black polo",
    price: 300,
    image: "",
  },
  {
    name: "Black polo",
    price: 300,
    image: "",
  },
];

const getProducts = () => {
  const products = PRODUCTS.map((product) => (
    <ProductCard
      productName={product.name}
      productPrice={product.price}
      productImage={product.image}
    />
  ));
  return products;
};

const ProductListingContainer = () => {
  return <div>{getProducts()}</div>;
};

export default ProductListingContainer;
