import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <a className={`${styles.logoLink}`} href="/">
      <Image
        src={`/assets/Logo_ML.png`}
        alt={`Logo Mercado Libre`}
        height={36}
        width={53}
        priority
      />
    </a>
  );
};
export default Logo;
