import React from "react";
import { Grid, Container } from "@mui/material";
import { Link } from "gatsby";
import ProductDetail from "../ProductDetail";

const Product = ({ pageContext: { product } }) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid component="nav" item xs={12} sx={{ my: 4 }}>
          <Link href="/">RTG Next.js</Link>
        </Grid>
      </Grid>
      {product && <ProductDetail product={product} />}
    </Container>
  );
};

export default Product;
