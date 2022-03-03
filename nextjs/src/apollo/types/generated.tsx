import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BreadCrumbs = {
  __typename?: 'BreadCrumbs';
  category?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  breadcrumb_label?: Maybe<Scalars['String']>;
  breadcrumb_url?: Maybe<Scalars['String']>;
};

export type CatalogAvailability = {
  __typename?: 'CatalogAvailability';
  FL?: Maybe<Scalars['Boolean']>;
  OOM?: Maybe<Scalars['Boolean']>;
  SE?: Maybe<Scalars['Boolean']>;
  TX?: Maybe<Scalars['Boolean']>;
};

export type Closeout = {
  __typename?: 'Closeout';
  FL?: Maybe<Scalars['Boolean']>;
  OOM?: Maybe<Scalars['Boolean']>;
  SE?: Maybe<Scalars['Boolean']>;
  TX?: Maybe<Scalars['Boolean']>;
};

export type Fl = {
  __typename?: 'Fl';
  availabilityDate?: Maybe<Scalars['String']>;
  availableDateTimestamp?: Maybe<Scalars['Int']>;
  inStock?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};

export type Hours = {
  __typename?: 'Hours';
  regularHours?: Maybe<Array<Maybe<RegularHours>>>;
};

export type Last1Year = {
  __typename?: 'Last1Year';
  count1Star?: Maybe<Scalars['String']>;
  count2Stars?: Maybe<Scalars['String']>;
  count3Stars?: Maybe<Scalars['String']>;
  count4Stars?: Maybe<Scalars['String']>;
  count5Stars?: Maybe<Scalars['String']>;
  negativeScore?: Maybe<Scalars['String']>;
  neutralScore?: Maybe<Scalars['String']>;
  overallScore?: Maybe<Scalars['String']>;
  positiveScore?: Maybe<Scalars['String']>;
};

export type Last3Months = {
  __typename?: 'Last3Months';
  count1Star?: Maybe<Scalars['String']>;
  count2Stars?: Maybe<Scalars['String']>;
  count3Stars?: Maybe<Scalars['String']>;
  count4Stars?: Maybe<Scalars['String']>;
  count5Stars?: Maybe<Scalars['String']>;
  negativeScore?: Maybe<Scalars['String']>;
  neutralScore?: Maybe<Scalars['String']>;
  overallScore?: Maybe<Scalars['String']>;
  positiveScore?: Maybe<Scalars['String']>;
};

export type Last30Days = {
  __typename?: 'Last30Days';
  count1Star?: Maybe<Scalars['String']>;
  count2Stars?: Maybe<Scalars['String']>;
  count3Stars?: Maybe<Scalars['String']>;
  count4Stars?: Maybe<Scalars['String']>;
  count5Stars?: Maybe<Scalars['String']>;
  negativeScore?: Maybe<Scalars['String']>;
  neutralScore?: Maybe<Scalars['String']>;
  overallScore?: Maybe<Scalars['String']>;
  positiveScore?: Maybe<Scalars['String']>;
};

export type Lifetime = {
  __typename?: 'Lifetime';
  count1star?: Maybe<Scalars['String']>;
  count2Stars?: Maybe<Scalars['String']>;
  count3Stars?: Maybe<Scalars['String']>;
  count4Stars?: Maybe<Scalars['String']>;
  count5Stars?: Maybe<Scalars['String']>;
  negativeScore?: Maybe<Scalars['String']>;
  neutralScore?: Maybe<Scalars['String']>;
  overallScore?: Maybe<Scalars['String']>;
  positiveScore?: Maybe<Scalars['String']>;
};

export type OnSale = {
  __typename?: 'OnSale';
  FL_0?: Maybe<Scalars['Boolean']>;
  FL_1?: Maybe<Scalars['Boolean']>;
  FL_2?: Maybe<Scalars['Boolean']>;
  FL_3?: Maybe<Scalars['Boolean']>;
  FL_4?: Maybe<Scalars['Boolean']>;
  FL_5?: Maybe<Scalars['Boolean']>;
  FL_6?: Maybe<Scalars['Boolean']>;
  SE_0?: Maybe<Scalars['Boolean']>;
  SE_1?: Maybe<Scalars['Boolean']>;
  SE_2?: Maybe<Scalars['Boolean']>;
  SE_3?: Maybe<Scalars['Boolean']>;
  SE_4?: Maybe<Scalars['Boolean']>;
  SE_5?: Maybe<Scalars['Boolean']>;
  SE_6?: Maybe<Scalars['Boolean']>;
  TX_0?: Maybe<Scalars['Boolean']>;
  TX_1?: Maybe<Scalars['Boolean']>;
  TX_2?: Maybe<Scalars['Boolean']>;
  TX_3?: Maybe<Scalars['Boolean']>;
  TX_4?: Maybe<Scalars['Boolean']>;
  TX_5?: Maybe<Scalars['Boolean']>;
  TX_6?: Maybe<Scalars['Boolean']>;
};

export type Pricing = {
  __typename?: 'Pricing';
  FL_0_list_price?: Maybe<Scalars['Float']>;
  FL_0_sale_price?: Maybe<Scalars['Float']>;
  FL_1_list_price?: Maybe<Scalars['Float']>;
  FL_1_sale_price?: Maybe<Scalars['Float']>;
  FL_2_list_price?: Maybe<Scalars['Float']>;
  FL_2_sale_price?: Maybe<Scalars['Float']>;
  FL_3_list_price?: Maybe<Scalars['Float']>;
  FL_3_sale_price?: Maybe<Scalars['Float']>;
  FL_4_list_price?: Maybe<Scalars['Float']>;
  FL_4_sale_price?: Maybe<Scalars['Float']>;
  FL_5_list_price?: Maybe<Scalars['Float']>;
  FL_5_sale_price?: Maybe<Scalars['Float']>;
  FL_6_list_price?: Maybe<Scalars['Float']>;
  FL_6_sale_price?: Maybe<Scalars['Float']>;
  SE_0_list_price?: Maybe<Scalars['Float']>;
  SE_0_sale_price?: Maybe<Scalars['Float']>;
  SE_1_list_price?: Maybe<Scalars['Float']>;
  SE_1_sale_price?: Maybe<Scalars['Float']>;
  SE_2_list_price?: Maybe<Scalars['Float']>;
  SE_2_sale_price?: Maybe<Scalars['Float']>;
  SE_3_list_price?: Maybe<Scalars['Float']>;
  SE_3_sale_price?: Maybe<Scalars['Float']>;
  SE_4_list_price?: Maybe<Scalars['Float']>;
  SE_4_sale_price?: Maybe<Scalars['Float']>;
  SE_5_list_price?: Maybe<Scalars['Float']>;
  SE_5_sale_price?: Maybe<Scalars['Float']>;
  SE_6_list_price?: Maybe<Scalars['Float']>;
  SE_6_sale_price?: Maybe<Scalars['Float']>;
  TX_0_list_price?: Maybe<Scalars['Float']>;
  TX_0_sale_price?: Maybe<Scalars['Float']>;
  TX_1_list_price?: Maybe<Scalars['Float']>;
  TX_1_sale_price?: Maybe<Scalars['Float']>;
  TX_2_list_price?: Maybe<Scalars['Float']>;
  TX_2_sale_price?: Maybe<Scalars['Float']>;
  TX_3_list_price?: Maybe<Scalars['Float']>;
  TX_3_sale_price?: Maybe<Scalars['Float']>;
  TX_4_list_price?: Maybe<Scalars['Float']>;
  TX_4_sale_price?: Maybe<Scalars['Float']>;
  TX_5_list_price?: Maybe<Scalars['Float']>;
  TX_5_sale_price?: Maybe<Scalars['Float']>;
  TX_6_list_price?: Maybe<Scalars['Float']>;
  TX_6_sale_price?: Maybe<Scalars['Float']>;
  default_price?: Maybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  alternate_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  breadCrumbs?: Maybe<Array<Maybe<BreadCrumbs>>>;
  breadcrumb?: Maybe<Breadcrumb>;
  catalog?: Maybe<Scalars['String']>;
  catalog_availability?: Maybe<CatalogAvailability>;
  category?: Maybe<Scalars['String']>;
  category_c?: Maybe<Scalars['String']>;
  closeout?: Maybe<Closeout>;
  createdAt?: Maybe<Scalars['String']>;
  customer_assembly_required?: Maybe<Scalars['Boolean']>;
  decor?: Maybe<Array<Maybe<Scalars['String']>>>;
  delivery_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimension_image?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  finish?: Maybe<Array<Maybe<Scalars['String']>>>;
  finish_family?: Maybe<Array<Maybe<Scalars['String']>>>;
  free_shipping: Scalars['String'];
  generic_name?: Maybe<Scalars['String']>;
  grid_image?: Maybe<Scalars['String']>;
  grid_image_item?: Maybe<Scalars['String']>;
  high_res_image?: Maybe<Scalars['String']>;
  in_stores?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastModified?: Maybe<Scalars['String']>;
  lastModified_c?: Maybe<Scalars['String']>;
  main_category_c?: Maybe<Scalars['String']>;
  monogram?: Maybe<Scalars['Boolean']>;
  mpn?: Maybe<Scalars['String']>;
  on_sale?: Maybe<OnSale>;
  pricing?: Maybe<Pricing>;
  primary_image?: Maybe<Scalars['String']>;
  primary_image_item?: Maybe<Scalars['String']>;
  room_type_code?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  sell_individually?: Maybe<Scalars['Boolean']>;
  shipping_cost_code?: Maybe<ShippingCostCode>;
  single_item_room?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  strikethrough?: Maybe<Strikethrough>;
  sub_category?: Maybe<Array<Maybe<Scalars['String']>>>;
  swatch_image?: Maybe<Scalars['String']>;
  swatch_request_flag?: Maybe<Scalars['Boolean']>;
  tipping_restraint_included?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['String']>;
  warehouseAvailability?: Maybe<WarehouseAvailability>;
  you_may_also_like_items?: Maybe<Array<Maybe<YouMayAlsoLikeItems>>>;
};

export type Query = {
  __typename?: 'Query';
  allProducts?: Maybe<Array<Product>>;
  product?: Maybe<Product>;
  storeInfo?: Maybe<StoreInfo>;
};


export type QueryProductArgs = {
  sku: Scalars['String'];
};


export type QueryStoreInfoArgs = {
  storeNumber: Scalars['String'];
};

export type Ratings = {
  __typename?: 'Ratings';
  last1Year?: Maybe<Last1Year>;
  last3Months?: Maybe<Last3Months>;
  last30Days?: Maybe<Last30Days>;
  lifetime?: Maybe<Lifetime>;
};

export type RegularHours = {
  __typename?: 'RegularHours';
  closeTime?: Maybe<Scalars['String']>;
  dayIndex?: Maybe<Scalars['String']>;
  openTime?: Maybe<Scalars['String']>;
};

export type Se = {
  __typename?: 'Se';
  availabilityDate?: Maybe<Scalars['String']>;
  availableDateTimestamp?: Maybe<Scalars['Int']>;
  inStock?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};

export type ShippingCostCode = {
  __typename?: 'ShippingCostCode';
  SE?: Maybe<Scalars['String']>;
  TX?: Maybe<Scalars['String']>;
};

export type StoreInfo = {
  __typename?: 'StoreInfo';
  address1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  hours?: Maybe<Hours>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  market?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ratings?: Maybe<Ratings>;
  state?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  storeNumber?: Maybe<Scalars['String']>;
  storeType?: Maybe<Scalars['String']>;
  storeTypeId?: Maybe<Scalars['String']>;
  temporarilyClosed?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type Strikethrough = {
  __typename?: 'Strikethrough';
  FL?: Maybe<Scalars['Boolean']>;
  SE?: Maybe<Scalars['Boolean']>;
  TX?: Maybe<Scalars['Boolean']>;
};

export type Tx = {
  __typename?: 'Tx';
  availabilityDate?: Maybe<Scalars['String']>;
  availableDateTimestamp?: Maybe<Scalars['Int']>;
  inStock?: Maybe<Scalars['String']>;
  isAvailable?: Maybe<Scalars['Boolean']>;
};

export type WarehouseAvailability = {
  __typename?: 'WarehouseAvailability';
  FL?: Maybe<Fl>;
  SE?: Maybe<Se>;
  TX?: Maybe<Tx>;
};

export type YouMayAlsoLikeItems = {
  __typename?: 'YouMayAlsoLikeItems';
  addon_required?: Maybe<Scalars['Boolean']>;
  catalog_availability?: Maybe<CatalogAvailability>;
  category?: Maybe<Scalars['String']>;
  delivery_type?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  pricing?: Maybe<Pricing>;
  quantity?: Maybe<Scalars['Int']>;
  route?: Maybe<Scalars['String']>;
  sell_individually?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type HomepageQueryVariables = Exact<{
  storeNumber: Scalars['String'];
}>;


export type HomepageQuery = { __typename?: 'Query', storeInfo?: { __typename?: 'StoreInfo', address1?: string | null, city?: string | null, storeName?: string | null, state?: string | null } | null, allProducts?: Array<{ __typename?: 'Product', sku?: string | null }> | null };

export type ProductDetailQueryVariables = Exact<{
  sku: Scalars['String'];
}>;


export type ProductDetailQuery = { __typename?: 'Query', product?: { __typename?: 'Product', title?: string | null, sku?: string | null, category_c?: string | null, primary_image?: string | null, free_shipping: string, description?: string | null, catalog?: string | null, type?: string | null, sub_category?: Array<string | null> | null, warehouseAvailability?: { __typename?: 'WarehouseAvailability', SE?: { __typename?: 'Se', isAvailable?: boolean | null } | null } | null } | null };

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'Query', allProducts?: Array<{ __typename?: 'Product', sku?: string | null }> | null };

export type StoreInfoQueryVariables = Exact<{
  storeNumber: Scalars['String'];
}>;


export type StoreInfoQuery = { __typename?: 'Query', storeInfo?: { __typename?: 'StoreInfo', address1?: string | null, city?: string | null, storeName?: string | null, state?: string | null } | null };


export const HomepageDocument = gql`
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

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *      storeNumber: // value for 'storeNumber'
 *   },
 * });
 */
export function useHomepageQuery(baseOptions: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
      }
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
        }
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;
export const ProductDetailDocument = gql`
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

/**
 * __useProductDetailQuery__
 *
 * To run a query within a React component, call `useProductDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDetailQuery({
 *   variables: {
 *      sku: // value for 'sku'
 *   },
 * });
 */
export function useProductDetailQuery(baseOptions: Apollo.QueryHookOptions<ProductDetailQuery, ProductDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductDetailQuery, ProductDetailQueryVariables>(ProductDetailDocument, options);
      }
export function useProductDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductDetailQuery, ProductDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductDetailQuery, ProductDetailQueryVariables>(ProductDetailDocument, options);
        }
export type ProductDetailQueryHookResult = ReturnType<typeof useProductDetailQuery>;
export type ProductDetailLazyQueryHookResult = ReturnType<typeof useProductDetailLazyQuery>;
export type ProductDetailQueryResult = Apollo.QueryResult<ProductDetailQuery, ProductDetailQueryVariables>;
export const AllProductsDocument = gql`
    query AllProducts {
  allProducts {
    sku
  }
}
    `;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const StoreInfoDocument = gql`
    query StoreInfo($storeNumber: String!) {
  storeInfo(storeNumber: $storeNumber) {
    address1
    city
    storeName
    state
  }
}
    `;

/**
 * __useStoreInfoQuery__
 *
 * To run a query within a React component, call `useStoreInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreInfoQuery({
 *   variables: {
 *      storeNumber: // value for 'storeNumber'
 *   },
 * });
 */
export function useStoreInfoQuery(baseOptions: Apollo.QueryHookOptions<StoreInfoQuery, StoreInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoreInfoQuery, StoreInfoQueryVariables>(StoreInfoDocument, options);
      }
export function useStoreInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoreInfoQuery, StoreInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoreInfoQuery, StoreInfoQueryVariables>(StoreInfoDocument, options);
        }
export type StoreInfoQueryHookResult = ReturnType<typeof useStoreInfoQuery>;
export type StoreInfoLazyQueryHookResult = ReturnType<typeof useStoreInfoLazyQuery>;
export type StoreInfoQueryResult = Apollo.QueryResult<StoreInfoQuery, StoreInfoQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BreadCrumbs: ResolverTypeWrapper<BreadCrumbs>;
  Breadcrumb: ResolverTypeWrapper<Breadcrumb>;
  CatalogAvailability: ResolverTypeWrapper<CatalogAvailability>;
  Closeout: ResolverTypeWrapper<Closeout>;
  Fl: ResolverTypeWrapper<Fl>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Hours: ResolverTypeWrapper<Hours>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Last1Year: ResolverTypeWrapper<Last1Year>;
  Last3Months: ResolverTypeWrapper<Last3Months>;
  Last30Days: ResolverTypeWrapper<Last30Days>;
  Lifetime: ResolverTypeWrapper<Lifetime>;
  OnSale: ResolverTypeWrapper<OnSale>;
  Pricing: ResolverTypeWrapper<Pricing>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  Ratings: ResolverTypeWrapper<Ratings>;
  RegularHours: ResolverTypeWrapper<RegularHours>;
  Se: ResolverTypeWrapper<Se>;
  ShippingCostCode: ResolverTypeWrapper<ShippingCostCode>;
  StoreInfo: ResolverTypeWrapper<StoreInfo>;
  Strikethrough: ResolverTypeWrapper<Strikethrough>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tx: ResolverTypeWrapper<Tx>;
  WarehouseAvailability: ResolverTypeWrapper<WarehouseAvailability>;
  YouMayAlsoLikeItems: ResolverTypeWrapper<YouMayAlsoLikeItems>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  BreadCrumbs: BreadCrumbs;
  Breadcrumb: Breadcrumb;
  CatalogAvailability: CatalogAvailability;
  Closeout: Closeout;
  Fl: Fl;
  Float: Scalars['Float'];
  Hours: Hours;
  Int: Scalars['Int'];
  Last1Year: Last1Year;
  Last3Months: Last3Months;
  Last30Days: Last30Days;
  Lifetime: Lifetime;
  OnSale: OnSale;
  Pricing: Pricing;
  Product: Product;
  Query: {};
  Ratings: Ratings;
  RegularHours: RegularHours;
  Se: Se;
  ShippingCostCode: ShippingCostCode;
  StoreInfo: StoreInfo;
  Strikethrough: Strikethrough;
  String: Scalars['String'];
  Tx: Tx;
  WarehouseAvailability: WarehouseAvailability;
  YouMayAlsoLikeItems: YouMayAlsoLikeItems;
};

export type BreadCrumbsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BreadCrumbs'] = ResolversParentTypes['BreadCrumbs']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['Breadcrumb'] = ResolversParentTypes['Breadcrumb']> = {
  breadcrumb_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breadcrumb_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CatalogAvailabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogAvailability'] = ResolversParentTypes['CatalogAvailability']> = {
  FL?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  OOM?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CloseoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Closeout'] = ResolversParentTypes['Closeout']> = {
  FL?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  OOM?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fl'] = ResolversParentTypes['Fl']> = {
  availabilityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableDateTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inStock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HoursResolvers<ContextType = any, ParentType extends ResolversParentTypes['Hours'] = ResolversParentTypes['Hours']> = {
  regularHours?: Resolver<Maybe<Array<Maybe<ResolversTypes['RegularHours']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Last1YearResolvers<ContextType = any, ParentType extends ResolversParentTypes['Last1Year'] = ResolversParentTypes['Last1Year']> = {
  count1Star?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count2Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count3Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count4Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count5Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  negativeScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neutralScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overallScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positiveScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Last3MonthsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Last3Months'] = ResolversParentTypes['Last3Months']> = {
  count1Star?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count2Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count3Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count4Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count5Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  negativeScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neutralScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overallScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positiveScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Last30DaysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Last30Days'] = ResolversParentTypes['Last30Days']> = {
  count1Star?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count2Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count3Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count4Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count5Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  negativeScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neutralScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overallScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positiveScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LifetimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lifetime'] = ResolversParentTypes['Lifetime']> = {
  count1star?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count2Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count3Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count4Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count5Stars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  negativeScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neutralScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overallScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positiveScore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnSaleResolvers<ContextType = any, ParentType extends ResolversParentTypes['OnSale'] = ResolversParentTypes['OnSale']> = {
  FL_0?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  FL_1?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  FL_2?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  FL_3?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  FL_4?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  FL_5?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  FL_6?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_0?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_1?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_2?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_3?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_4?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_5?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE_6?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_0?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_1?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_2?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_3?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_4?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_5?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX_6?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pricing'] = ResolversParentTypes['Pricing']> = {
  FL_0_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_0_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_1_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_1_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_2_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_2_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_3_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_3_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_4_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_4_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_5_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_5_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_6_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  FL_6_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_0_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_0_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_1_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_1_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_2_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_2_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_3_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_3_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_4_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_4_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_5_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_5_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_6_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  SE_6_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_0_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_0_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_1_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_1_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_2_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_2_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_3_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_3_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_4_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_4_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_5_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_5_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_6_list_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  TX_6_sale_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  default_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  alternate_images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  breadCrumbs?: Resolver<Maybe<Array<Maybe<ResolversTypes['BreadCrumbs']>>>, ParentType, ContextType>;
  breadcrumb?: Resolver<Maybe<ResolversTypes['Breadcrumb']>, ParentType, ContextType>;
  catalog?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catalog_availability?: Resolver<Maybe<ResolversTypes['CatalogAvailability']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  closeout?: Resolver<Maybe<ResolversTypes['Closeout']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer_assembly_required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  decor?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  delivery_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimension_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  finish?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  finish_family?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  free_shipping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  generic_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grid_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  grid_image_item?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  high_res_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  in_stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lastModified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastModified_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  main_category_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  monogram?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mpn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  on_sale?: Resolver<Maybe<ResolversTypes['OnSale']>, ParentType, ContextType>;
  pricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType>;
  primary_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary_image_item?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room_type_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sell_individually?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  shipping_cost_code?: Resolver<Maybe<ResolversTypes['ShippingCostCode']>, ParentType, ContextType>;
  single_item_room?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  strikethrough?: Resolver<Maybe<ResolversTypes['Strikethrough']>, ParentType, ContextType>;
  sub_category?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  swatch_image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch_request_flag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tipping_restraint_included?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vendorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warehouseAvailability?: Resolver<Maybe<ResolversTypes['WarehouseAvailability']>, ParentType, ContextType>;
  you_may_also_like_items?: Resolver<Maybe<Array<Maybe<ResolversTypes['YouMayAlsoLikeItems']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allProducts?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'sku'>>;
  storeInfo?: Resolver<Maybe<ResolversTypes['StoreInfo']>, ParentType, ContextType, RequireFields<QueryStoreInfoArgs, 'storeNumber'>>;
};

export type RatingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ratings'] = ResolversParentTypes['Ratings']> = {
  last1Year?: Resolver<Maybe<ResolversTypes['Last1Year']>, ParentType, ContextType>;
  last3Months?: Resolver<Maybe<ResolversTypes['Last3Months']>, ParentType, ContextType>;
  last30Days?: Resolver<Maybe<ResolversTypes['Last30Days']>, ParentType, ContextType>;
  lifetime?: Resolver<Maybe<ResolversTypes['Lifetime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularHoursResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularHours'] = ResolversParentTypes['RegularHours']> = {
  closeTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dayIndex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  openTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Se'] = ResolversParentTypes['Se']> = {
  availabilityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableDateTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inStock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingCostCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingCostCode'] = ResolversParentTypes['ShippingCostCode']> = {
  SE?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TX?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreInfo'] = ResolversParentTypes['StoreInfo']> = {
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hours?: Resolver<Maybe<ResolversTypes['Hours']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ratings?: Resolver<Maybe<ResolversTypes['Ratings']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  temporarilyClosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  timeZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StrikethroughResolvers<ContextType = any, ParentType extends ResolversParentTypes['Strikethrough'] = ResolversParentTypes['Strikethrough']> = {
  FL?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  SE?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  TX?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TxResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tx'] = ResolversParentTypes['Tx']> = {
  availabilityDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availableDateTimestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inStock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WarehouseAvailabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['WarehouseAvailability'] = ResolversParentTypes['WarehouseAvailability']> = {
  FL?: Resolver<Maybe<ResolversTypes['Fl']>, ParentType, ContextType>;
  SE?: Resolver<Maybe<ResolversTypes['Se']>, ParentType, ContextType>;
  TX?: Resolver<Maybe<ResolversTypes['Tx']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YouMayAlsoLikeItemsResolvers<ContextType = any, ParentType extends ResolversParentTypes['YouMayAlsoLikeItems'] = ResolversParentTypes['YouMayAlsoLikeItems']> = {
  addon_required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  catalog_availability?: Resolver<Maybe<ResolversTypes['CatalogAvailability']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  delivery_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pricing?: Resolver<Maybe<ResolversTypes['Pricing']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sell_individually?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BreadCrumbs?: BreadCrumbsResolvers<ContextType>;
  Breadcrumb?: BreadcrumbResolvers<ContextType>;
  CatalogAvailability?: CatalogAvailabilityResolvers<ContextType>;
  Closeout?: CloseoutResolvers<ContextType>;
  Fl?: FlResolvers<ContextType>;
  Hours?: HoursResolvers<ContextType>;
  Last1Year?: Last1YearResolvers<ContextType>;
  Last3Months?: Last3MonthsResolvers<ContextType>;
  Last30Days?: Last30DaysResolvers<ContextType>;
  Lifetime?: LifetimeResolvers<ContextType>;
  OnSale?: OnSaleResolvers<ContextType>;
  Pricing?: PricingResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ratings?: RatingsResolvers<ContextType>;
  RegularHours?: RegularHoursResolvers<ContextType>;
  Se?: SeResolvers<ContextType>;
  ShippingCostCode?: ShippingCostCodeResolvers<ContextType>;
  StoreInfo?: StoreInfoResolvers<ContextType>;
  Strikethrough?: StrikethroughResolvers<ContextType>;
  Tx?: TxResolvers<ContextType>;
  WarehouseAvailability?: WarehouseAvailabilityResolvers<ContextType>;
  YouMayAlsoLikeItems?: YouMayAlsoLikeItemsResolvers<ContextType>;
};

