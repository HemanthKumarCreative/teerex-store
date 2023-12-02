import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Chip from "@mui/material/Chip";

export default function ProductCard({
  productName,
  productPrice,
  productImage,
}) {
  return (
    <Card sx={{ margin: "0.5rem", padding: "0.5rem", alignSelf: "flex-start" }}>
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {productName}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={productImage}
        title={productName}
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Chip
          label={`Rs. ${productPrice}`}
          variant="outlined"
          color="warning"
          size="small"
        />
        <IconButton size="small">
          <AddShoppingCartIcon color="success" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
