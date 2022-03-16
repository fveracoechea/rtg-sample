import React, { FC } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { useProductDetailQuery } from "../../apollo/generated";

type Props = {
  sku: string;
};

const ProducView: FC<Props> = ({ sku }) => {
  const { data, loading } = useProductDetailQuery({ variables: { sku } });

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  const product = data?.product;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" color="primary">
          {product.title}
        </Typography>
      </Grid>

      <Grid item display="flex" justifyContent="center" xs={12}>
        <Box sx={{ maxWidth: "800px", minHeight: "400px" }}>
          <img
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "500px",
            }}
            src={product.primary_image}
            alt="Product"
          />
        </Box>
      </Grid>

      <Grid item md={8}>
        <Typography variant="h5" component="h4">
          Description:
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
      </Grid>

      <Grid item md={4}>
        <Typography variant="body1">
          <b>Available:</b>{" "}
          {product?.warehouseAvailability?.SE?.isAvailable ? "Yes" : "No"}
        </Typography>
        <Typography variant="body1">
          <b>SKU:</b> {product.sku}
        </Typography>
        <Typography variant="body1">
          <b>Category:</b> {product.sub_category[0]}
        </Typography>
        <Typography variant="body1">
          <b>Free Shipping:</b> {product?.free_shipping}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProducView;
