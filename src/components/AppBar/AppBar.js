import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function PrimarySearchAppBar({ cartCount }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#83547e" }}>
        <Toolbar>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                color: "#FFF",
              }}
            >
              <button style={{ padding: "0.5rem" }}>TeeRex Store</button>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                color: "#FFF",
              }}
            >
              <button style={{ padding: "0.5rem" }}>Products</button>
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="#FFF"
              >
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
