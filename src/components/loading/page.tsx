import React from "react";
import "./style.scss";
type Props = {};

function Loading({}: Props) {
  return (
    <div className="Loading">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
