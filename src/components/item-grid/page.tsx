import "./style.scss";
type Props = {};

function ItemGrid({ apps }: Props) {
  let count = 0;
  return (
    <div className="ItemGrid">
      {apps.map((app) => {
        app.type == "game" && count < 5 && count++;
        return (
          app.type == "game" &&
          count < 5 && (
            <div className="item" key={app.title}>
              <img src={app.icon} alt="Stardew" />
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
