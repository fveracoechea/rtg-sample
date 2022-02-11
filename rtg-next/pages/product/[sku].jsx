import { Typography, Grid, Container, Box } from "@mui/material";
import Link from "next/link";
import data from "../../src/SKUs";

const getProductService = (sku) =>
  `https://s3.amazonaws.com/dev-roomstogo-products/${sku.toUpperCase()}.json`;

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on products
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
  const res = await fetch(getProductService(context.params.sku));
  const product = await res.json();

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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" color="primary">
            {product.title}
          </Typography>
        </Grid>

        <Grid item display="flex" justifyContent="center" xs={12}>
          <Box sx={{ maxWidth: "800px", minHeight: "400px" }}>
            <img
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
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
            <b>Brand:</b> {product.brand}
          </Typography>
          <Typography variant="body1">
            <b>SKU:</b> {product.sku}
          </Typography>
          <Typography variant="body1">
            <b>Category:</b> {product.category_c}
          </Typography>
          <Typography variant="body1">
            <b>Free Shipping:</b> {product.free_shipping ? "Yes" : "No"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
