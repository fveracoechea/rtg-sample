import { gql } from "@apollo/client";

export const ProductDetailQuery = gql`
  query ProductDetailQuery($sku: String!) {
    product(sku: $sku) {
      title
      sku
      category_c
      primary_image
      free_shipping
      description
      catalog
      type
      sub_category
      warehouseAvailability {
        SE {
          isAvailable
        }
      }
    }
  }
`;

export const ProductPaths = gql`
  query ProductPaths {
    allProducts {
      sku
    }
  }
`;
