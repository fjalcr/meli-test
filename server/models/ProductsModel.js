const apiMELI = require("../helpers/api/meli-instance");

const baseUrl = process.env.API_MELI;
const getProductsFromAPI = async (search, limit = 10) => {
  try {
    const response = await apiMELI.get(`${baseUrl}/sites/MLA/search?q=${search}&&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductByIdFromAPI = async (id) => {
  try {
    const response = await apiMELI.get(`${baseUrl}/items/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductDescriptionFromAPI = async (id) => {
  try {
    const response = await apiMELI.get(`${baseUrl}/items/${id}/description`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getProductCategoriesFromAPI = async (id) => {
  try {
    const response = await apiMELI.get(`${baseUrl}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProductsFromAPI,
  getProductByIdFromAPI,
  getProductDescriptionFromAPI,
  getProductCategoriesFromAPI,
};
