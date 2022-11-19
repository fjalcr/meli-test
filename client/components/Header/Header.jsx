import React from "react";
import Logo from "../Logo/Logo";
import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <ContentWrapper>
          <Logo />
          <SearchBar />
        </ContentWrapper>
      </header>
    </>
  );
};

export default Header;
