import React from "react";
import styles from "./styles.module.scss";

const BreadCrumbs = ({ items }) => {
  const len = items.length;
  return (
    <>
      {len > 0 ? (
        <div className={`${styles.breadCrumbsWrap}`}>
          {items.map((item, index) => (
            <span key={index} className={`${styles.breadCrumbsItem}`}>
              {item.name}
              {index < len - 1 && " » "}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
};
export default BreadCrumbs;
