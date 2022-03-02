import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { storeProducts, readProducts } from "./functions/products.js";
import { catchError } from "./functions/error.js";
import SKUs from "./data/SKUs.js";

const app = express();
const port = 3333;

app.use(morgan("dev"));
app.use(cors());

app.get("/skus", (req, res) => {
  res.status(200).json({ data: SKUs });
});

app.post("/products", (req, res) => {
  storeProducts(SKUs)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(catchError(res));
});

app.get("/products", (req, res) => {
  const sku = req.query.sku;
  readProducts()
    .then((products) => {
      const data = sku
        ? products.find((product) => product.sku === sku) || null
        : products;
      res.status(200).json(data);
    })
    .catch(catchError(res));
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
