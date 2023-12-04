import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CartCard from "../CartCard/CartCard";
import NoProducts from "../NoProducts/NoProducts";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { products, totalAmount } = cart;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const groupByProductId = (arr) => {
      return arr.reduce((acc, obj) => {
        const productId = obj.productId;
        if (!acc[productId]) {
          acc[productId] = [];
        }
        acc[productId].push(obj);
        return acc;
      }, {});
    };
    const groupedByProductId = groupByProductId(products);
    const cartItems = [];
    for (let key in groupedByProductId) {
      const cartQuantity = groupedByProductId[key].length;
      const cartItem = { ...groupedByProductId[key][0], cartQuantity };
      cartItems.push(cartItem);
    }
    setCartProducts(cartItems);
  }, [products]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cartProducts?.map((product) => (
            <CartCard
              product={product}
              key={product.id}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          ))}
          {!products?.length && <NoProducts />}
        </Box>
      </Box>
      {products?.length && (
        <Box
          sx={{
            backgroundColor: "#83547e",
            width: "60vw",
            height: "0.25rem",
          }}
        ></Box>
      )}
      {products?.length && (
        <Box
          sx={{
            display: "flex",
            width: "30vw",
            height: "8vh",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box>Total Amount</Box>
          <Box>{`Rs. ${totalAmount}`}</Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
