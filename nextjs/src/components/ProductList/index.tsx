import React, { FC } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  useAllProductsQuery,
  useStoreInfoQuery,
} from "../../apollo/types/generated";

type Props = {
  navigate: (path: string) => void;
};

const ProductList: FC<Props> = ({ navigate }) => {
  const { data, loading } = useAllProductsQuery();
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
