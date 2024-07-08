import React from "react";
import "./style.scss";
type AppData = {
  size?: number;
  releaseDate?: string;
  updateDate?: string;
  publisher?: string;
  email?: string;
  supportContact?: string;
  screenshots?: object[] | string[];
};

type Props = {
  app: {
    data?: AppData;
  };
};

function Screens({ app }: Props) {
  return (
    <div className="screens">
      {app.data?.screenshots?.toReversed().map((screen) => {
        return <img src={screen as string} alt="" key={screen as string} />;
      })}
    </div>
  );
}

export default Screens;
