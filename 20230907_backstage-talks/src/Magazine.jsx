import { useContext } from "react";
import { MagazineItem } from "./MagazineItem";
import "./Magazine.scss";
import { DataContext } from "./App";

export function Magazine() {
  const data = useContext(DataContext);

  return (
    <>
      <main className="magazines">
        {data.map((element) => {
          return <MagazineItem {...element} key={element.id} />;
        })}
      </main>
    </>
  );
}
