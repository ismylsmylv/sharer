"use client";
import ItemList from "@/components/item-list/page";
import "./style.scss";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchApps, searchByName } from "@/redux/slice";

function SearchPage() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const apps = useAppSelector((state) => state.apps.apps);
  const result = useAppSelector((state) => state.apps.result);

  useEffect(() => {
    const searchTerm = searchParams.get("in");
    if (searchTerm) {
      dispatch(fetchApps()).then(() => {
        dispatch(searchByName(searchTerm));
      });
    }
  }, [dispatch, searchParams]);

  return (
    <div className="SearchPage">
      {result && result.length > 0 && (
        <ItemList
          head={`Search results for "${searchParams.get("in")}"`}
          apps={result}
          type={["game", "app"]}
          selectedCount={5}
          button={false}
        />
      )}
    </div>
  );
}

export default SearchPage;
