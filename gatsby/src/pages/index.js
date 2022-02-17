import React, { useEffect, useState } from "react";
import { Grid, Typography, Container } from "@mui/material";
import { navigate } from "gatsby";
import ProductList from "../components/ProductList";

const useSKUs = () => {
  const [skus, setSkus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/skus")
      .then((response) => response.json())
      .then(({ data }) => setSkus(data));
  }, []);

  return skus;
};

export default function Home() {
  const data = useSKUs();
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
            RTG Gatsby
          </Typography>
        </Grid>
        <ProductList items={data} navigate={navigate} />
      </Grid>
    </Container>
  );
}
