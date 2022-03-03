import React, { FC } from "react";
import { Grid, Container } from "@mui/material";
import Link from "next/link";
import ProductView from "../../src/components/ProducView";
import { initializeApollo } from "../../src/apollo/client";
import {
  ProductDetail,
  AllProducts,
} from "../../src/apollo/queries/product";

// This function gets called at build time
export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  // Get the paths we want to pre-render based on products
  const { data } = await apolloClient.query({
    query: AllProducts,
  });
  return {
    paths: data.allProducts.map(({ sku }) => ({
      params: { sku },
    })),
    fallback: true,
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: ProductDetail,
    variables: {
      sku: context.params.sku,
    },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      sku: context.params.sku,
    },
    revalidate: 10,
  };
}

type Props = {
  sku: string;
};

const Product: FC<Props> = ({ sku }) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid component="nav" item xs={12} sx={{ my: 4 }}>
          <Link href="/">RTG Next.js</Link>
        </Grid>
      </Grid>
      <ProductView sku={sku} />
    </Container>
  );
};

export default Product;
