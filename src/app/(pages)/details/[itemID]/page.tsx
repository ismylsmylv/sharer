import React from "react";

type Props = {};

function Details({ params }: { params: { itemID: string } }) {
  return <div>Details {params.itemID}</div>;
}

export default Details;
