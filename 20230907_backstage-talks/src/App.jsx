import { useState, createContext, useEffect, useMemo } from "react";
import { Header } from "./Header";
import { Magazine } from "./Magazine";
import { Footer } from "./Footer";
import { issues } from "./issues";
import "./App.scss";

export const DataContext = createContext({ issues });
export const ColorContext = createContext(null);

const issueHeight = 900;

export default function App() {
  const colors = useMemo(() => {
    return issues.map((issue) => {
      return issue.color;
    });
  }, []);
  const tags = useMemo(() => {
    return issues.map((issue) => {
      return issue.number;
    });
  }, []);

  const [color, setColor] = useState(colors[0]);
  const [tag, setTag] = useState("");

  const handleScroll = () => {
    let currentYOffset = Math.round(window.pageYOffset / issueHeight);
    setColor(colors[currentYOffset]);
    setTag(tags[currentYOffset]);
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
    if (tag) {
      window.location.href = "#" + tag;
    }
  }, [tag]);

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
