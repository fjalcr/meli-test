const { getProductsFromAPI } = require("../models/ProductsModel");

const { getProductDataFiltered } = require("../helpers/products/filters");

const apiAuthor = {
  name: process.env.AUTHOR_NAME || "Javier",
  lastname: process.env.AUTHOR_LASTNAME || "Alcocer",
};

const getProducts = async (req, res) => {
  const limit = req.query.limit || 4;
  let productData = [];
  let categories = [];
  if (req.query.q) {
    try {
      const { results } = await getProductsFromAPI(req.query.q, limit);
      for (let i = 0; i < limit; i += 1) {
        const dataProductById = await getProductDataFiltered(results[i].id, true);
        productData.push(dataProductById);
        categories.push(results[i].category_id);
      }
      res
        .status(200)
        .json({ author: apiAuthor, categories: [...categories], items: [...productData] });
    } catch {
      res.status(500).json({ error: "Failed to connect" });
    }
  } else {
    res.status(404).json({ error: "No products found" });
  }
};

const getProductById = async (req, res) => {
  if (req.params.id) {
    try {
      const dataProduct = await getProductDataFiltered(req.params.id);
      if (dataProduct !== false) {
        res.status(200).json({ author: apiAuthor, item: dataProduct });
      } else {
        res.status(404).json({ error: "Something went wrong, try later" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to connect with the API" });
    }
  } else {
    res.status(404).json({ error: "No product found" });
  }
};

module.exports = {
  getProducts,
  getProductById,
};
