import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

const isTesting = false;

class ProductService extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = isTesting
      ? "http://localhost:3333"
      : "https://s3.amazonaws.com/dev-roomstogo-products";
  }

  async getProduct(sku: string) {
    return this.get(`/${sku}.json`);
  }

  async getAllProducts() {
    return this.get("/pdp_products_mini.json");
  }
}

export default ProductService;
