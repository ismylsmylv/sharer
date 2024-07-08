import Link from "next/link";
import "./style.scss";
type Props = {
  head: string;
  apps: Elem[] | any;
  type: string;
  selectedCount: number;
};
interface Elem {
  id: any;
  data: any;
  name: string;
  info: string;
  type: string;
  icon: string;
  price: number;
  inAppPurchases: string;
  title: string;
}
function ItemGrid({ apps, type }: Props) {
  let count = 0;
  return (
    <div className="ItemGrid">
      {apps.map((app: Elem) => {
        app.data.type == type && count < 5 && count++;
        return (
          app.data.type == type &&
          count < 5 && (
            <Link
              href={`/details/${app.id}`}
              className="item"
              key={app.data.name}
            >
              <img src={app.data.icon} alt="icon" />
              <div className="name">{app.data.name}</div>
              <div className="price">
                {app.data.price ? <>${app.data.price}</> : <>Free</>}
              </div>
              <div className="info">
                {app.data.inAppPurchases == "true" && <>in-App Purchases</>}
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
}

export default ItemGrid;
