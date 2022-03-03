import { gql } from "@apollo/client";

export const ProductDetail = gql`
  query ProductDetail($sku: String!) {
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

export const AllProducts = gql`
  query AllProducts {
    allProducts {
      sku
    }
  }
`;
