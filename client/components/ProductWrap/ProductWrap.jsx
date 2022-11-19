import React from "react";
import Image from "next/image";
import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styles from "./styles.module.scss";

const ProductWrap = ({ product }) => {
  return (
    <ContentWrapper>
      {product?.item?.breadcrumbs && <BreadCrumbs items={product?.item?.breadcrumbs} />}
      <div className={`${styles.productWrap}`}>
        <div className={`${styles.productDetails}`}>
          <div className={`${styles.productImage}`}>
            <Image
              src={product?.item?.picture}
              alt={product?.item?.title}
              height={400}
              className={`${styles.productImagePhoto}`}
              width={680}
              priority
              layout="responsive"
            />
          </div>
          {product?.item?.description && (
            <div className={`${styles.productDescriptionWrap}`}>
              <h2 className={`${styles.productDescriptionTitle}`}>Descripción del producto</h2>
              {product?.item?.description && (
                <p className={`${styles.productDescription}`}>{product.item.description}</p>
              )}
            </div>
          )}
        </div>
        <div className={`${styles.productPrice}`}>
          {product?.item?.condition && (
            <p className={`${styles.productCondition}`}>
              {product?.item?.condition}
              {product?.item?.sold_quantity ? ` - ${product.item.sold_quantity} vendidos` : ""}
            </p>
          )}
          {product?.item?.title && (
            <p className={`${styles.productTitle}`}>
              <strong>{product?.item.title}</strong>
            </p>
          )}
          {product?.item?.price?.amount && (
            <p className={`${styles.productPriceAmount}`}>
              <strong>{`$ ${product.item.price.amount}`}</strong>
              {product.item.price.decimals > 0 && `.${product.item.price.decimals}`}
            </p>
          )}
          <button type="button" className={`${styles.productBuyButton}`}>
            Comprar
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};
export default ProductWrap;
