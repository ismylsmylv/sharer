import React from "react";
import "./style.scss";
type AppData = {
  size?: number;
  releaseDate?: string;
  updateDate?: string;
  publisher?: string;
  email?: string;
  supportContact?: string;
  category?: any;
};

type Props = {
  app: {
    data?: AppData;
  };
};
function DetailsCategory({ app }: Props) {
  return (
    <div className="categories">
      {app.data?.category.map((cat: string) => {
        return (
          <div className="category" key={cat}>
            {cat}
          </div>
        );
      })}
    </div>
  );
}

export default DetailsCategory;
