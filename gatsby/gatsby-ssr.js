const React = require("react");
const { QueryClient, QueryClientProvider } = require("react-query");

const client = new QueryClient();

exports.wrapRootElement = ({ element }) => {
  return <QueryClientProvider client={client}>{element}</QueryClientProvider>;
};
