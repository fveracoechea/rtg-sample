import { Resolvers } from "./types/generated";

const isTesting = false;

export const resolvers: Resolvers = {
  Query: {
    /**
     * product by sku
     */
    async product(parent, args, context) {
      const sku = args.sku.toLowerCase();
      const response = await fetch(
        isTesting
          ? `http://localhost:3333/products?sku=${sku}`
          : `https://s3.amazonaws.com/dev-roomstogo-products/${sku}.json`
      );
      if (!response.ok) return null;
      const data = await response.json();
      return data;
    },
    /**
     * all products
     */
    async allProducts() {
      const response = await fetch(
        isTesting
          ? `http://localhost:3333/products`
          : "https://dev-roomstogo-products.s3.amazonaws.com/pdp_products_mini.json"
      );
      if (!response.ok) return null;
      const products = await response.json();
      return products;
    },
    /**
     * store info query
     */
    async storeInfo(parent, args) {
      const storeNumber = args.storeNumber;
      const response = await fetch(
        `https://stores.rtg-dev.com/v1/stores/${storeNumber}`
      );
      if (!response.ok) return null;
      const data = await response.json();
      return data;
    },
  },
  /**
   * Product field resolvers
   */
  Product: {
    sku(product) {
      return product.sku.toUpperCase();
    },
    free_shipping(product) {
      return product?.free_shipping ? "Yes" : "No";
    },
  },
};
