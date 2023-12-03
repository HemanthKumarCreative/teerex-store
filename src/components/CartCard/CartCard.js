import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function MediaCard({ product }) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "40vw",
        alignItems: "center",
        padding: "0.5rem",
        margin: "0.5rem",
        backgroundColor: "#83547e",
      }}
    >
      <CardMedia
        sx={{ height: 140, width: 140 }}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="caption"
          component="div"
          sx={{ color: "#FFF" }}
        >
          {product.name}
        </Typography>
        <Chip
          label={`Rs. ${product.price}`}
          variant="outlined"
          size="small"
          sx={{ color: "#FFF" }}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          sx={{ color: "#FFF" }}
          color="secondary"
        >
          {`Quantity : 2`}
        </Button>
        <Button
          size="small"
          variant="outlined"
          sx={{ color: "#FFF" }}
          color="secondary"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
