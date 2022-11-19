import React from "react";
import styles from "./styles.module.scss";

const ContentWrapper = ({ keyItem, children }) => {
  return (
    <div key={keyItem || ""} className={`${styles.content}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
