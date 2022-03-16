import { gql } from "@apollo/client";

export const Homepage = gql`
  query Homepage($storeNumber: String!) {
    storeInfo(storeNumber: $storeNumber) {
      address1
      city
      storeName
      state
    }
    allProducts {
      sku
    }
  }
`;
