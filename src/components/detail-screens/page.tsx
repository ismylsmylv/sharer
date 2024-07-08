import React from "react";
import "./style.scss";
type Props = {};

function Screens({ app }: Props) {
  return (
    <div className="screens">
      {app.data?.screenshots?.toReversed().map((screen) => {
        return <img src={screen} alt="" key={screen} />;
      })}
    </div>
  );
}

export default Screens;
