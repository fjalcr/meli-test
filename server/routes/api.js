const express = require("express");

const router = express.Router();
const { getProducts, getProductById } = require("../controllers/ProductsController");

module.exports = () => {
  router.get("/api/", (req, res) => {
    res.status(200).send({ message: "server is up" });
  });
  router.get("/api/items/", getProducts);
  router.get("/api/items/:id", getProductById);

  return router;
};
