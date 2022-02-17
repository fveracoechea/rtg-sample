import React from "react";
import { Grid, Container } from "@mui/material";
import Link from "next/link";
import ProductDetail from "../../src/components/ProductDetail";

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on products
  const response = await fetch("http://localhost:3333/skus");
  const { data } = await response.json();
  return {
    paths: data.map((sku) => ({
      params: { sku },
    })),
    fallback: true,
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3333/products?sku=${context.params.sku}`
  );
  const { data: product } = await res.json();

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        // statusCode: 301
      },
    };
  }

  return {
    props: {
      product,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

const Product = ({ product }) => {
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
