import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Select, MenuItem, InputLabel, FormControl, Icon } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/features/cart/cartSlice";

export default function MediaCard({ product, cartProducts, setCartProducts }) {
  const [selectedQuantity, setSelectedQuantity] = React.useState(
    product.cartQuantity
  );
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedQuantity(event.target.value);
    setCartProducts([
      ...cartProducts.filter((cartProduct) => cartProduct.id !== product.id),
      { ...product, cartQuantity: event.target.value },
    ]);
  };

  const handleDelete = () => {
    dispatch(
      deleteFromCart({
        id: product.id,
        price: product.price,
        cartQuantity: product.cartQuantity,
      })
    );
    console.log("Deleted");
  };

  const getMenuItems = () => {
    const menu = [];

    for (let i = 1; i <= product.quantity; i++) {
      menu.push(i);
    }
    return menu.map((p) => (
      <MenuItem key={p} value={p}>
        {p}
      </MenuItem>
    ));
  };

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-around",
        width: "40vw",
        alignItems: "center",
        padding: "0.5rem",
        margin: "0.5rem",
        backgroundColor: "#83547e",
      }}
      key={product.key}
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
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "12vw",
        }}
      >
        <FormControl
          variant="outlined"
          sx={{
            width: 100,
            color: "#FFF",
          }}
        >
          <InputLabel
            shrink
            sx={{
              color: "#FFF",
            }}
          >
            Quantity
          </InputLabel>
          <Select
            sx={{
              color: "#FFF",
            }}
            label="Quantity"
            value={selectedQuantity}
            onChange={handleChange}
            size="small"
          >
            {getMenuItems()}
          </Select>
        </FormControl>

        <IconButton
          size="small"
          variant="outlined"
          sx={{ color: "#FFF" }}
          color="secondary"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
