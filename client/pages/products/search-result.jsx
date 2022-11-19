import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/layout";
import Header from "../../components/Header/Header";
import ProductResume from "../../components/ProductResume/ProductResume";
import { getProductsSearch } from "../../services/products";

const SearchResult = ({ search }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const metas = {
    title: `${search} | Mercado Libre`,
    description:
      "Compre productos con Envío Gratis. Encuentre miles de marcas y productos a precios increíbles.",
    or: {
      title: `${search} | Mercado Libre`,
      description:
        "Compre productos con Env√≠o Gratis. Encuentre miles de marcas y productos a precios incre√≠bles.",
      image: "",
      url: router.asPath,
    },
  };

  useEffect(() => {
    const getProductsFromAPI = async () => {
      const productsBySeach = await getProductsSearch(search);
      setProducts(productsBySeach);
    };
    getProductsFromAPI();
  }, []);

  return (
    <Layout metas={metas}>
      <Header />
      {products?.items &&
        products.items.map((item, index) => (
          <ProductResume key={index} keyItem={index} item={item} />
        ))}
    </Layout>
  );
};

SearchResult.getInitialProps = async ({ req }) => {
  const { search } = req.query;
  return {
    search: search || "",
  };
};

export default SearchResult;
