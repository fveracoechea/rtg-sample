import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Strikethrough {
    FL: Boolean
    SE: Boolean
    TX: Boolean
  }

  type OnSale {
    FL_0: Boolean
    FL_1: Boolean
    FL_2: Boolean
    FL_3: Boolean
    FL_4: Boolean
    FL_5: Boolean
    FL_6: Boolean
    SE_0: Boolean
    SE_1: Boolean
    SE_2: Boolean
    SE_3: Boolean
    SE_4: Boolean
    SE_5: Boolean
    SE_6: Boolean
    TX_0: Boolean
    TX_1: Boolean
    TX_2: Boolean
    TX_3: Boolean
    TX_4: Boolean
    TX_5: Boolean
    TX_6: Boolean
  }

  type Pricing {
    FL_0_list_price: Float
    FL_0_sale_price: Float
    default_price: Float
    FL_1_list_price: Float
    FL_1_sale_price: Float
    FL_2_list_price: Float
    FL_2_sale_price: Float
    FL_3_list_price: Float
    FL_3_sale_price: Float
    FL_4_list_price: Float
    FL_4_sale_price: Float
    FL_5_list_price: Float
    FL_5_sale_price: Float
    FL_6_list_price: Float
    FL_6_sale_price: Float
    SE_0_list_price: Float
    SE_0_sale_price: Float
    SE_1_list_price: Float
    SE_1_sale_price: Float
    SE_2_list_price: Float
    SE_2_sale_price: Float
    SE_3_list_price: Float
    SE_3_sale_price: Float
    SE_4_list_price: Float
    SE_4_sale_price: Float
    SE_5_list_price: Float
    SE_5_sale_price: Float
    SE_6_list_price: Float
    SE_6_sale_price: Float
    TX_0_list_price: Float
    TX_0_sale_price: Float
    TX_1_list_price: Float
    TX_1_sale_price: Float
    TX_2_list_price: Float
    TX_2_sale_price: Float
    TX_3_list_price: Float
    TX_3_sale_price: Float
    TX_4_list_price: Float
    TX_4_sale_price: Float
    TX_5_list_price: Float
    TX_5_sale_price: Float
    TX_6_list_price: Float
    TX_6_sale_price: Float
  }

  type CatalogAvailability {
    FL: Boolean
    SE: Boolean
    TX: Boolean
    OOM: Boolean
  }

  type YouMayAlsoLikeItems {
    sku: String
    title: String
    quantity: Int
    label: String
    addon_required: Boolean
    delivery_type: String
    category: String
    sell_individually: Boolean
    image: String
    route: String
    catalog_availability: CatalogAvailability
    pricing: Pricing
  }

  type BreadCrumbs {
    level: Int
    url: String
    label: String
    category: String
  }

  type Breadcrumb {
    breadcrumb_url: String
    breadcrumb_label: String
  }

  type Closeout {
    FL: Boolean
    SE: Boolean
    TX: Boolean
    OOM: Boolean
  }

  type Tx {
    inStock: String
    isAvailable: Boolean
    availabilityDate: String
    availableDateTimestamp: Int
  }

  type Se {
    inStock: String
    isAvailable: Boolean
    availabilityDate: String
    availableDateTimestamp: Int
  }

  type Fl {
    inStock: String
    isAvailable: Boolean
    availabilityDate: String
    availableDateTimestamp: Int
  }

  type WarehouseAvailability {
    TX: Tx
    SE: Se
    FL: Fl
  }

  type ShippingCostCode {
    SE: String
    TX: String
  }

  type Product {
    free_shipping: Boolean
    category: String
    dimensions: String
    tipping_restraint_included: Boolean
    type: String
    title: String
    description: String
    delivery_type: String
    catalog: String
    room_type_code: String
    single_item_room: Boolean
    sell_individually: Boolean
    mpn: String
    swatch_request_flag: Boolean
    generic_name: String
    monogram: Boolean
    customer_assembly_required: Boolean
    title_slug: String
    vendorId: String
    primary_image: String
    grid_image: String
    high_res_image: String
    swatch_image: String
    dimension_image: String
    primary_image_item: String
    grid_image_item: String
    route: String
    lastModified: String
    createdAt: String
    sku: String
    category_c: String
    lastModified_c: String
    main_category_c: String
    strikethrough: Strikethrough
    alternate_images: [String]
    on_sale: OnSale
    pricing: Pricing
    in_stores: [String]
    you_may_also_like_items: [YouMayAlsoLikeItems]
    finish_family: [String]
    finish: [String]
    decor: [String]
    sub_category: [String]
    catalog_availability: CatalogAvailability
    breadCrumbs: [BreadCrumbs]
    breadcrumb: Breadcrumb
    closeout: Closeout
    warehouseAvailability: WarehouseAvailability
    shipping_cost_code: ShippingCostCode
  }

  type Query {
    product(sku: String!): Product
    allProducts: [Product!]
  }
`;