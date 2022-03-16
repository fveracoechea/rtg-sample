import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers";
import { applyMiddleware } from "graphql-middleware";
import { setCacheHint } from "./middlewares";

export const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  setCacheHint
);
