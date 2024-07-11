"use client";
import ItemList from "@/components/item-list/page";
import "./style.scss";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

function SearchPage({}: Props) {
  const searchParams = useSearchParams();
  return (
    <div className="SearchPage">
      <ItemList
        head={`Search results for "${searchParams.get("in")}"`}
        apps={[]}
        type={["game"]}
        selectedCount={5}
        button={false}
      />
    </div>
  );
}

export default SearchPage;
