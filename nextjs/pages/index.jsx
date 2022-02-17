import React from "react";
import { useQuery } from "react-query";
import { Grid, Typography, Container } from "@mui/material";
import { useRouter } from "next/router";
import ProductList from "../src/components/ProductList";

const fetchSkus = () =>
  fetch("http://localhost:3333/skus")
    .then((response) => response.json())
    .then(({ data }) => data);

export default function Home() {
  const { data, isLoading } = useQuery("skus", fetchSkus);
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
        <ProductList items={data} isLoading={isLoading} navigate={router.push} />
      </Grid>
    </Container>
  );
}
