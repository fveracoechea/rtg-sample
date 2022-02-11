import React, { useState } from "React";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ProductList = ({ items, navigate }) => {
  // const [search, setSearch] = useState("...");
  return (
    <Grid item md>
      <Typography variant="h5">
        Products: 
      </Typography>
      <List sx={{ display: "flex", flexWrap: "wrap" }}>
        {items.sort().map((sku) => (
          <ListItem disablePadding sx={{ width: 'auto' }}>
            <ListItemButton
              onClick={() => navigate(`/product/${sku.toUpperCase()}`)}
            >
              <ListItemText primary={sku} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default ProductList;
