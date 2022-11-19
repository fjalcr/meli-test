import React from "react";
import Head from "next/head";

const Layout = ({ metas, children }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <title>{metas?.title}</title>
        {metas?.title && <meta name="title" content={metas.title} />}
        {metas?.description && <meta name="description" content={metas.description} />}

        <meta property="og:type" content="website" />
        {metas?.og?.title && <meta property="og:title" content={metas.og.title} />}
        {metas?.og?.description && <meta property="og:title" content={metas.og.description} />}
        {metas?.og?.image && <meta property="og:image" content={metas.og.image} />}
        {metas?.og?.url && <meta property="og:url" content={metas.og.url} />}
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
