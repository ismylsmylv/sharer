"use client";
import "./style.scss";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

function SearchPage({}: Props) {
  const searchParams = useSearchParams();
  return <div className="SearchPage">{searchParams.get("in")}</div>;
}

export default SearchPage;
