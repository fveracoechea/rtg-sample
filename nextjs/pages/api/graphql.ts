import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import responseCachePlugin from "apollo-server-plugin-response-cache";
import Cors from "micro-cors";

import { schema } from "../../src/apollo/schema";
import { context } from "../../src/apollo/context";

const cors = Cors();
const server = new ApolloServer({
  context,
  schema,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground,
    responseCachePlugin(),
  ],
});
const startServer = server.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
