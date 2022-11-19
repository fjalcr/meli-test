const {
  getProductByIdFromAPI,
  getProductDescriptionFromAPI,
  getProductCategoriesFromAPI,
} = require("../../models/ProductsModel");

const getProductDataFiltered = async (id, isList = false) => {
  try {
    const productResult = await getProductByIdFromAPI(id);
    if (!productResult.message) {
      const cleanDataProduct = await filterProduct(productResult, isList);
      return cleanDataProduct;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

const filterProduct = async (data, isList = false) => {
  const newOjectData = {
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
    picture: "",
    condition: "",
    free_shipping: false,
  };

  newOjectData.id = data.id;
  newOjectData.title = data.title;
  newOjectData.price.amount = Number(FormatPrice(data.price)[0]);
  newOjectData.price.decimals = Number(FormatPrice(data.price)[1]) || 0;
  newOjectData.price.currency = data.currency_id;
  newOjectData.picture = data.pictures[0].url;
  newOjectData.condition = data.condition;
  newOjectData.free_shipping = data.shipping.free_shipping;
  if (!isList) {
    newOjectData.sold_quantity = data.sold_quantity;
    newOjectData.description = await getDescription(data.id);
    newOjectData.breadcrumbs = await getCategory(data.category_id);
  } else {
    newOjectData.state = data.seller_address.state.name;
  }

  return newOjectData;
};

const getDescription = async (id) => {
  const description = await getProductDescriptionFromAPI(id);
  return description.plain_text || "";
};

const FormatPrice = (priceItem) => {
  return priceItem.toString().split(".");
};

const getCategory = async (id) => {
  const { path_from_root } = await getProductCategoriesFromAPI(id);
  if (path_from_root.length > 0) {
    return path_from_root;
  }
  return [];
};

module.exports = {
  getProductDataFiltered,
};
