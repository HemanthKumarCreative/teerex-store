import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/material";
import axios from "axios";
import NoProducts from "../NoProducts/NoProducts";
const ProductListingContainer = ({
  filtersApplied,
  filteredProducts,
  setFilteredProducts,
  products,
  setProducts,
  setFiltersApplied,
  initialProducts,
}) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
      setLoading(false);
    }
  };

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
    fetchProducts();
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
          />
        ))}

      {!filteredProducts?.length && <NoProducts />}
    </Box>
  );
};

export default ProductListingContainer;
