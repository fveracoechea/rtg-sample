import { gql } from "apollo-server-micro";

import Product from "./Product.gql";
import StoreInfo from "./StoreInfo.gql";
import StoreFeed from "./StoreFeed.gql";

export const typeDefs = gql`
  # generated with https://github.com/walmartlabs/json-to-simple-graphql-schema
  ${Product}
  ${StoreInfo}
  ${StoreFeed}

  input StoreFeedInput {
    id: String
    city: String
    state: String
    storeTypeId: String
  }

  type Query {
    product(sku: String!): Product
    allProducts: [Product!]!
    storeInfo(storeNumber: String!): StoreInfo
    storeFeed(input: StoreFeedInput): [StoreFeed]!
  }
`;
