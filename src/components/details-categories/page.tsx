import React from "react";
import "./style.scss";
type Props = {
  app: App;
};
interface App {
  data: Data[];
}
interface Data {
  category: object[];
}
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
