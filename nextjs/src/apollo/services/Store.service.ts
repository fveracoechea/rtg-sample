import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

class StoreService extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = "https://stores.rtg-dev.com/v1";
  }

  async getStoreInfo(storeNumber: string) {
    return this.get(`/stores/${storeNumber}`);
  }
}

export default StoreService;
