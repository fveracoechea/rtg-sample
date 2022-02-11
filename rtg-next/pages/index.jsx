import * as React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { useRouter } from "next/router";
import ProductList from "../src/components/ProductList";
// data
import data from "../src/SKUs";

export default function Home() {
  const router = useRouter();
  return (
    <Container maxWidth="md">
      <Grid container sx={{ display: "block" }}>
        <Grid item md sx={{ my: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            RTG Next.js
          </Typography>
        </Grid>
        <ProductList items={data} navigate={router.push} />
      </Grid>
    </Container>
  );
}
