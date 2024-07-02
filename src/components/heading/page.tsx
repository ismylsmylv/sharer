import React from "react";
import "./style.scss";
type Props = { head: string };

function Heading({ head }: Props) {
  return (
    <div className="heading">
      <h1>{head}</h1>
      <button>see all</button>
    </div>
  );
}

export default Heading;
