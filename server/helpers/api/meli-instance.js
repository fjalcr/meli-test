const axios = require("axios");

const apiMELI = process.env.API_MELI || "";

const instance = axios.create({
  baseURL: apiMELI,
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = instance;
