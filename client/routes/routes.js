const express = require("express");

const router = express.Router();

module.exports = (app) => {
  router.route(["/"]).get((req, res) => {
    return app.render(req, res, "/products/product-search", {});
  });
  router.route(["/items"]).get((req, res) => {
    return app.render(req, res, "/products/search-result", {});
  });
  router.route(["/items/:id"]).get((req, res) => {
    return app.render(req, res, "/products/product-details", {});
  });

  return router;
};
