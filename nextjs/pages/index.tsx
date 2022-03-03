import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import { useRouter } from "next/router";
import { initializeApollo } from "../src/apollo/client";
import { AllProducts } from "../src/apollo/queries/product";
import { StoreInfo } from "../src/apollo/queries/store";
import ProductList from "../src/components/ProductList";
import {
  useHomepageQuery,
  HomepageDocument,
} from "../src/apollo/types/generated";

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HomepageDocument,
    variables: { storeNumber: "1201" },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 10,
  };
}

export default function Home() {
  const { data } = useHomepageQuery({ variables: { storeNumber: "1201" } });
  const router = useRouter();
  return (
    <Container maxWidth="lg">
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
        <Grid item md sx={{ my: 2 }}>
          <Typography variant="h5">
            Store: {data?.storeInfo?.storeName}
          </Typography>
          <Typography variant="h5">
            Store: {data?.storeInfo?.address1}
          </Typography>
          <Typography variant="h5">Store: {data?.storeInfo?.city}</Typography>
        </Grid>
        <ProductList navigate={router.push} />
      </Grid>
    </Container>
  );
}
