import React from "react";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import classes from "../../styles/NameSearch.module.css";

export function NameSearch({}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryRef = useRef();

  const searchTerm = searchParams.get("query") || "";

  const handleSearch = () => {
    const query = queryRef.current.value;

    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={classes["search-section"]}>
      <h2>Search by name:</h2>
      <input
        ref={queryRef}
        type="search"
        placeholder="Recipe name..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
