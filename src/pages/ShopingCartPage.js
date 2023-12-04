import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "../components/AppBar/AppBar";
import Cart from "../components/Cart/Cart";

const ShopingCartPage = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar cartCount={cartCount} />
        </Grid>
        <Grid item xs={12}>
          <Cart cartCount={cartCount} setCartCount={setCartCount} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopingCartPage;
