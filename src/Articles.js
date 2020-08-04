import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import * as Api from "./Api";
import { NewsContext } from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

const Articles = () => {
  const {
    typeOfFeed,
    pageNumber,
    articles,
    setPageNumber,
    setArticles,
  } = useContext(NewsContext);

  useEffect(() => {
    const fetchArticles = async () => {
      const index = (pageNumber - 1) * 20;
      const fetchedArticles = await Api.getArticles(index, typeOfFeed);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, [typeOfFeed, pageNumber, setArticles]);

  const leftArrowClicked = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setArticles([]);
    }
  };

  const rightArrowClicked = () => {
    if (pageNumber < 500 / 20) {
      setPageNumber(pageNumber + 1);
      setArticles([]);
    }
  };

  return (
    <>
      {articles.length > 0 ? (
        <ArticlesContainer>
          {articles.map((article, i) => {
            return (
              <Article key={Math.random()} href={article.url}>
                <ArticleNumber>{`${
                  (pageNumber - 1) * 20 + i + 1
                }.`}</ArticleNumber>
                <ArticleTitle>${article.title}</ArticleTitle>
              </Article>
            );
          })}
          <PageSelector>
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              style={{ fontSize: "4.5vh", cursor: "pointer" }}
              onClick={leftArrowClicked}
            />
            <PageNumber>{pageNumber}</PageNumber>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              style={{ fontSize: "4.5vh", cursor: "pointer" }}
              onClick={rightArrowClicked}
            />
          </PageSelector>
        </ArticlesContainer>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </>
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
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNumber = styled.div`
  padding: 1vh;
  font-size: 2.5vh;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
