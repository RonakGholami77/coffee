import { Pizza } from "./Pizza";
import { pizzaData } from "../Shared";

const Layout = () => {
  return (
    <ul className="pizzas">
      {pizzaData &&
        pizzaData.map((p) => {
          return <Pizza key={p.id} {...p} />;
        })}
    </ul>
  );
};

export { Layout };
