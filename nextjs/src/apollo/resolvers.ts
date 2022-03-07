import { Resolvers } from "./types/generated";
import { Context } from "./context";

export const resolvers: Resolvers<Context> = {
  Query: {
    /**
     * product by sku
     */
    product(parent, args, ctx) {
      const sku = args.sku.toUpperCase();
      return ctx.productAPI.getProduct(sku);
    },
    /**
     * all products query
     */
    async allProducts(parent, args, ctx) {
      return ctx.productAPI.getAllProducts();
    },
    /**
     * store info query
     */
    async storeInfo(parent, args, ctx) {
      const storeNumber = args.storeNumber;
      return ctx.storeAPI.getStoreInfo(storeNumber);
    },
    /**
     * Store hours feed
     */
    async storeFeed(parent, args, ctx) {
      return ctx.storeAPI.getStoreFeed(args.input)
    }
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
