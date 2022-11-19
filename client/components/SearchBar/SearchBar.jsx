import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const SearchBar = () => {
  const [currentSearch, setCurrentSearch] = useState("");
  const inputSearchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/items/?search=${inputSearchRef.current.value}`);
  };

  return (
    <form onSubmit={handleSearch} className={`${styles.searchBar}`}>
      <input
        ref={inputSearchRef}
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
        type="text"
        placeholder="Buscar productos, marcas y más..."
        className={`${styles.inputSearch}`}
      />
      <button type="submit" className={`${styles.wrapSearchIcon}`}>
        <picture>
          <source srcSet="/assets/ic_Search@2x.png.png" type="image/png" />
          <img src="/assets/ic_Search.png" alt="Search Icon" width={20} height={20} />
        </picture>
      </button>
    </form>
  );
};

export default SearchBar;
