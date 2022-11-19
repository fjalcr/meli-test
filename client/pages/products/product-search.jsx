import React from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/layout";
import Header from "../../components/Header/Header";

const ProducSearch = () => {
  const router = useRouter();
  const metas = {
    title: "Mercado Libre - Envíos Gratis",
    description:
      "Compre productos con Envío Gratis. Encuentre miles de marcas y productos a precios increíbles.",
    or: {
      title: "Mercado Libre - Env√≠os Gratis",
      description:
        "Compre productos con Env√≠o Gratis. Encuentre miles de marcas y productos a precios incre√≠bles.",
      image: "",
      url: router.asPath,
    },
  };
  return (
    <Layout metas={metas}>
      <Header />
    </Layout>
  );
};

export default ProducSearch;
