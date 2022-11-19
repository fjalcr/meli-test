import React from "react";
import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import LoadingImage from "../Loading/LoadingImage/LoadingImage";
import styles from "./styles.module.scss";

const ProductResumePlaceholder = ({ keyItem }) => {
  return (
    <a href={``} className={`${styles.productLink}`}>
      <ContentWrapper keyItem={keyItem}>
        <div className={`${styles.productWrap}`}>
          <LoadingImage size={`xxxl`} color="gray" className={`${styles.productImage}`} />
          <div className={`${styles.productDetailsWrap}`}>
            <div className={`${styles.productDetails}`}>
              <div className={`${styles.productDetailsTop}`}>
                <div className={`${styles.wrapPriceFreeShipping}`}>
                  <p className={`${styles.productPrice}`}></p>
                  <div className={`${styles.freeShipping}`} />
                </div>
                <p className={`${styles.productCity}`}></p>
              </div>
              <div className={`${styles.productDetailsBottom}`}>
                <p className={`${styles.productDescription}`}></p>
                <p className={`${styles.productDescription}`}></p>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </a>
  );
};
export default ProductResumePlaceholder;
