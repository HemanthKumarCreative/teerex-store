import React from "react";
import { Box, Typography } from "@mui/material";

const NoProduct = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
        height: "60vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px", // Set a minimum height for visibility
          padding: "20px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ddd",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: "60vw",
        }}
      >
        <Typography variant="h5" color="textSecondary">
          No Products Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NoProduct;
