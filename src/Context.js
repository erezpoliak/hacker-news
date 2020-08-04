import React, { useState, createContext } from "react";

const NewsContext = createContext();
const { Provider } = NewsContext;

const NewsProvider = ({ children }) => {
  const [typeOfFeed, setTypeOfFeed] = useState("Top");

  const state = {
    typeOfFeed,
  };

  const actions = {
    setTypeOfFeed,
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { NewsProvider, NewsContext };
