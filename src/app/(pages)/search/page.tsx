"use client";
import SearchPage from "@/components/search-page/page";
import { Suspense } from "react";
import "./style.scss";

function Search() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}

export default Search;
