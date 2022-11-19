const API_URL = process.env.API_PRODUCTS;
const getProductsSearch = async (search) => {
  try {
    const response = await fetch(`${API_URL}?q=${search}`)
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.log("Error", err));
    return response;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}`)
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.log("Error", err));
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getProductsSearch,
  getProductById,
};
