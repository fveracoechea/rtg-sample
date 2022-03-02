import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { ProductPaths } from "../../graphql/product";

const ProductList = ({ navigate }) => {
  const { data, loading } = useQuery(ProductPaths);
  if (loading || !data) return <p>Loading...</p>;
  return (
    <Grid item md>
      <Typography variant="h5">Products:</Typography>
      <Typography variant="h6">Total: {data.allProducts.length}</Typography>
      <List sx={{ display: "flex", flexWrap: "wrap" }}>
        {data.allProducts.map(({ sku }) => (
          <ListItem key={sku} disablePadding sx={{ width: "auto" }}>
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
