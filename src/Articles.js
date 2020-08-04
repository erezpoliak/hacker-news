import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import * as Api from "./Api";
import { NewsContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { typeOfFeed } = useContext(NewsContext);

  useEffect(() => {
    const fetchArticles = async () => {
      if (typeOfFeed === "Top") {
        const fetchedarticles = await Api.getTopArticles(0);
        setArticles(fetchedarticles);
      }
    };

    fetchArticles();
  }, [typeOfFeed]);

  return (
    <ArticlesContainer>
      {articles.map((article, i) => {
        return (
          <Article id={Math.random()} href={article.url}>
            <ArticleNumber>{`${i + 1}.`}</ArticleNumber>
            <ArticleTitle>${article.title}</ArticleTitle>
          </Article>
        );
      })}
      <PageSelector></PageSelector>
    </ArticlesContainer>
  );
};

export default Articles;

const Article = styled.a`
  display: flex;
  align-items: center;
  padding-left: 1vw;
  text-decoration: none;
  color: inherit;
`;

const ArticleTitle = styled.div`
  font-weight: bold;
  font-size: 1.11rem;
  padding-left: 1.2vw;
`;

const ArticlesContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(20, 5vh);
`;

const ArticleNumber = styled.div`
  font-size: 1.05rem;
`;

const PageSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
