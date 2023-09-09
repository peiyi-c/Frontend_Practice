import { useState, createContext, useEffect } from "react";
import { Header } from "./Header";
import { Magazine } from "./Magazine";
import { Footer } from "./Footer";
import { issues } from "./issues";
import "./App.scss";

export const DataContext = createContext({ issues });
export const ColorContext = createContext(null);

const colors = issues.map((issue) => {
  return issue.color;
});
const tags = issues.map((issue) => {
  return issue.number;
});
const issueHeight = 900;

export default function App() {
  const [color, setColor] = useState(colors[0]);
  const [hash, setHash] = useState("");

  const handleScroll = () => {
    let currentYOffset = Math.round(window.pageYOffset / issueHeight);
    setColor(colors[currentYOffset]);
    setHash(tags[currentYOffset]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  useEffect(() => {
    if (hash) {
      window.location.href = "#" + hash;
    }
  }, [hash]);

  return (
    <>
      <DataContext.Provider value={issues}>
        <Header />
        <ColorContext.Provider value={color}>
          <Magazine />
        </ColorContext.Provider>
        <Footer />
      </DataContext.Provider>
    </>
  );
}
