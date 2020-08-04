import React, { useState, createContext } from "react";

const NewsContext = createContext();
const { Provider } = NewsContext;

const NewsProvider = ({ children }) => {
  const [typeOfFeed, setTypeOfFeed] = useState("topstories");
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const state = {
    typeOfFeed,
    articles,
    pageNumber,
  };

  const actions = {
    setTypeOfFeed,
    setArticles,
    setPageNumber,
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { NewsProvider, NewsContext };
