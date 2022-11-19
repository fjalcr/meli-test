import React, { useEffect, useState } from "react";
import { getProductById } from "../../services/products.js";
import Layout from "../../layouts/layout";
import Header from "../../components/Header/Header";
import ProductWrap from "../../components/ProductWrap/ProductWrap";

const ProductDetails = ({ id }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductsFromAPI = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };
    getProductsFromAPI();
  }, []);

  const metas = {
    title: product?.item?.title,
    description: product?.item?.description,
    or: {
      title: product?.item?.title,
      description: product?.item?.description,
      image: product?.item?.picture,
      url: "",
    },
  };

  return (
    <Layout metas={metas}>
      <Header />
      <ProductWrap product={product} />
    </Layout>
  );
};

ProductDetails.getInitialProps = async ({ req }) => {
  const { id } = req.params;
  return {
    id,
  };
};

export default ProductDetails;
