import {
  HTTPCache,
  RESTDataSource,
  RequestOptions,
} from "apollo-datasource-rest";
import { filterBy } from "../../helpers/data";
import { StoreFeed } from "../types/generated";


class StoreService extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
  }

  async resolveURL(request: RequestOptions) {
    if (request.path === "/store-hours-feed.json") {
      this.baseURL = "https://misc.rtg-dev.com";
    } else {
      this.baseURL = "https://stores.rtg-dev.com/v1";
    }
    return super.resolveURL(request);
  }

  async getStoreFeed(
    filters: {
      id?: string;
      city?: string;
      state?: string;
      storeTypeId?: string;
    } = {}
  ): Promise<any[]> {
    const feed = Object.values<StoreFeed>(
      JSON.parse(await this.get("/store-hours-feed.json"))
    );

    if (filters.id || filters.city || filters.state || filters.storeTypeId) {
      return filterBy(feed, filters)
    }

    return feed;
  }

  async getStoreInfo(storeNumber: string) {
    return this.get(`/stores/${storeNumber}`);
  }
}

export default StoreService;
