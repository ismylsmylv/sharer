import "./style.scss";
type Props = {
  head: string;
  apps: Elem[];
  type: string;
  selectedCount: number;
};
interface Elem {
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
        app.type == type && count < 5 && count++;
        return (
          app.type == type &&
          count < 5 && (
            <div className="item" key={app.name}>
              <img src={app.icon} alt="icon" />
              <div className="name">{app.name}</div>
              <div className="price">
                {app.price ? <>${app.price}</> : <>Free</>}
              </div>
              <div className="info">
                {app.inAppPurchases == "true" && <>in-App Purchases</>}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default ItemGrid;
