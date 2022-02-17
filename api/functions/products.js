import fetch from "node-fetch";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const filepath = path.resolve(dirname, "..", "data", "products.json");

const getProductService = (sku) =>
  `https://s3.amazonaws.com/dev-roomstogo-products/${sku.toUpperCase()}.json`;

const writeFile = (products) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, JSON.stringify(products, null, 2), (err) => {
      if (err) reject(err);
      resolve(products);
    });
  });
};

export const readProducts = () => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filepath)) {
      fs.readFile(filepath, (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data.toString()));
      });
    } else {
      resolve(null);
    }
  });
};

export const storeProducts = async (SKUs = []) => {
  const data = await readProducts();
  if (data) {
    return data;
  }

  const promises = SKUs.map(async (sku) => {
    const res = await fetch(getProductService(sku));
    const product = await res.json();
    return product;
  });

  const products = await Promise.all(promises);
  const results = await writeFile(products);
  return results;
};
