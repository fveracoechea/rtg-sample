import { gql } from "@apollo/client";

export const StoreInfo = gql`
  query StoreInfo($storeNumber: String!) {
    storeInfo(storeNumber: $storeNumber) {
      address1
      city
      storeName
      state
    }
  }
`;