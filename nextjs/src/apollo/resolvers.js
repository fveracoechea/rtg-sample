const TEST = false;

async function product(parent, args) {
  const sku = args.sku.toUpperCase();
  const response = await fetch(
    TEST
      ? `http://localhost:3333/products?sku=${sku}`
      : `https://s3.amazonaws.com/dev-roomstogo-products/${sku}.json`
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data;
}

async function allProducts(parent, args) {
  const response = await fetch(
    TEST
      ? `http://localhost:3333/products`
      : "https://dev-roomstogo-products.s3.amazonaws.com/pdp_products_mini.json"
  );
  if (!response.ok) return null;
  const products = await response.json();
  return products;
}

export const resolvers = {
  Query: {
    product,
    allProducts,
  },
};
