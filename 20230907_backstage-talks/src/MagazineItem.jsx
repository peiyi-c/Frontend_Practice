import { useState, useContext, useEffect } from "react";
import { ColorContext } from "./App";
import "./MagazineItem.scss";

export function MagazineItem({ name, number, image, storage, link }) {
  const [aColor, setAColor] = useState(() => {
    return "#ffffff";
  });
  const currentBgColor = useContext(ColorContext);

  useEffect(() => {
    return currentBgColor === "#ffffff"
      ? setAColor("#f6618d")
      : setAColor("#ffffff");
  }, [currentBgColor]);

  return (
    <>
      <section id={number} className="magazine">
        <img
          className="magazine__img"
          // src={`./src/assets/${image}`}
          src={`${image}`}
          alt={number}
        />
        <div className="magazine__text">
          <p className="magazine__text__name">
            {name}
            {!storage && <span> is sold out.</span>}
          </p>

          {storage && (
            <>
              <p className="magazine__text__link" style={{ fontSize: "15px" }}>
                <a style={{ color: aColor }} className="link" href={link}>
                  BUY HERE
                </a>
              </p>
              <p className="magazine__text__link2" style={{ fontSize: "15px" }}>
                or in&nbsp;
                <a
                  style={{ color: aColor }}
                  className="link"
                  href="https://backstagetalks.com/stocklist.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  selected stores
                </a>
              </p>
            </>
          )}
          {!storage && (
            <p className="magazine__text__link" style={{ fontSize: "15px" }}>
              If you are lucky, you may get the last pieces in &nbsp;
              <a
                style={{ color: aColor }}
                className="link"
                href="https://backstagetalks.com/stocklist.php"
                target="_blank"
                rel="noreferrer"
              >
                selected stores
              </a>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
