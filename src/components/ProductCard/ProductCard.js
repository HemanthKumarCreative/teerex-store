import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({
  productName,
  productPrice,
  productImage,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={productImage}
        title={productName}
      />
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {productPrice}
        </Typography>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
