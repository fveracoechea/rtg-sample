const fetch = require("node-fetch");
const path = require("path");

exports.createPages = async ({ actions: { createPage } }) => {
  const skuResponse = await fetch("http://localhost:3333/skus");
  const { data: SKUs } = await skuResponse.json();

  const promises = SKUs.map(async (sku) => {
    const response = await fetch(`http://localhost:3333/products?sku=${sku}`);
    const { data: product } = await response.json();

    createPage({
      path: `/product/${sku.toUpperCase()}`,
      component: path.resolve(`./src/components/PDP/index.jsx`),
      context: {
        product,
      },
    });
  });

  await Promise.all(promises);
};
