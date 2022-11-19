import React from "react";
import Image from "next/image";
import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import styles from "./styles.module.scss";

const ProductResume = ({ keyItem, item }) => {
  const urlProductDescription = "/items/";
  return (
    <a href={`${urlProductDescription}${item.id}`} className={`${styles.productLink}`}>
      <ContentWrapper keyItem={keyItem}>
        <div className={`${styles.productWrap}`}>
          <Image
            src={item.picture}
            alt={item.title}
            width={180}
            height={180}
            className={`${styles.productImage}`}
            priority
          />
          <div className={`${styles.productDetailsWrap}`}>
            <div className={`${styles.productDetails}`}>
              <div className={`${styles.productDetailsTop}`}>
                <div className={`${styles.wrapPriceFreeShipping}`}>
                  <p className={`${styles.productPrice}`}>{`$${item.price.amount}${
                    item.price.decimal > 0 ? item.price.decimal : ""
                  }`}</p>
                  {item.free_shipping && (
                    <img
                      src={`/assets/ic_shipping@2x.png.png`}
                      alt={`free shipirng`}
                      className={`${styles.freeShipping}`}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <p className={`${styles.productCity}`}>{item.state}</p>
              </div>
              <div className={`${styles.productDetailsBottom}`}>
                <p className={`${styles.productDescription}`}>{item.title}</p>
                <p className={`${styles.productDescription}`}>{item.condition}</p>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </a>
  );
};
export default ProductResume;
