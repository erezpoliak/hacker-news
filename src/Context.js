import React, { useState, createContext } from "react";

const NewsContext = createContext();
const { Provider } = NewsContext;

const NewsProvider = ({ children }) => {
  const [typeOfFeed, setTypeOfFeed] = useState("topstories");
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postId, setPostId] = useState();

  const state = {
    typeOfFeed,
    articles,
    pageNumber,
    postId,
  };

  const actions = {
    setTypeOfFeed,
    setArticles,
    setPageNumber,
    setPostId,
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { NewsProvider, NewsContext };
