"use client";
import ItemList from "@/components/item-list/page";
import "./style.scss";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchApps, searchByName } from "@/redux/slice";
import SearchPage from "@/components/search-page/page";

function Search() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}

export default Search;
