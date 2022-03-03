import { gql } from "apollo-server-micro";

import Product from "./Product.gql";
import StoreInfo from "./StoreInfo.gql";

export const typeDefs = gql`
  # generated with https://github.com/walmartlabs/json-to-simple-graphql-schema
  ${Product}
  ${StoreInfo}

  type Query {
    product(sku: String!): Product
    allProducts: [Product!]
    storeInfo(storeNumber: String!): StoreInfo
  }
`;
