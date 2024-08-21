import Link from "next/link";
import React from "react";

type Props = {};

function NotFound({}: Props) {
  return (
    <div className="container flex items-center justify-center h-full p-10">
      <div style={{ margin: "0 auto", width: "100%" }}>
        <h1 className="font-semibold mb-4">Page not found</h1>
        <Link
          href={"/"}
          className="py-2 px-5 text-white rounded"
          style={{ backgroundColor: "#25F4BC" }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
