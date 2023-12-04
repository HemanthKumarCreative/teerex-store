import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/material";
import NoProducts from "../NoProducts/NoProducts";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/product/productSlice";
const ProductListingContainer = ({
  filtersApplied,
  filteredProducts,
  setFilteredProducts,
}) => {
  const product = useSelector((state) => state.product);
  const { products, loading, error } = product;
  const dispatch = useDispatch();

  const filtersPassed = (product, filterCriteria, fields) => {
    if (filterCriteria === "price") {
      const productPrice = product.price;

      if (fields.includes("0 - Rs250")) {
        if (productPrice <= 250) {
          return true;
        }
      }
      if (fields.includes("Rs251 - 450")) {
        if (productPrice > 250 && productPrice <= 450) {
          return true;
        }
      }
      if (fields.includes("Rs451 and above")) {
        if (productPrice > 450) {
          return true;
        }
      }
      return false;
    }
    return fields.includes(product[filterCriteria]);
  };

  const filterProducts = () => {
    let filteredProducts = [...products];
    for (let criteria in filtersApplied) {
      if (filtersApplied[criteria].length !== 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filtersPassed(product, criteria, filtersApplied[criteria])
        );
      }
    }
    return filteredProducts;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setFilteredProducts(filterProducts());
    console.log({ filtersApplied, products });
  }, [filtersApplied]);

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexWrap: "wrap",
        maxHeight: "75vh",
        overflowY: "auto",
        width: "80vw",
      }}
    >
      {loading && <Box>Loading...</Box>}
      {!loading && error ? <Box>Error: {error}</Box> : null}
      {!loading &&
        filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            productPrice={product.price}
            productImage={product.imageURL}
            product={product}
          />
        ))}

      {!filteredProducts?.length && <NoProducts />}
    </Box>
  );
};

export default ProductListingContainer;
