import ProductService from "./services/Product.service";
import StoreService from "./services/Store.service";

export const context = {
  productAPI: new ProductService(),
  storeAPI: new StoreService(),
};

export type Context = typeof context;
