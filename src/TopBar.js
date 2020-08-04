import React, { useContext } from "react";
import styled from "styled-components";
import { NewsContext } from "./Context";

const TopBar = () => {
  const { setTypeOfFeed, setPageNumber, setArticles } = useContext(NewsContext);

  const FeedSelectorClicked = (type) => {
    setPageNumber(1);
    setArticles([]);
    setTypeOfFeed(type);
  };

  return (
    <Container>
      <HackerLogo src="/hackerLogo.gif" />
      <Title>Hacker News</Title>
      <FeedSelectorContainer>
        <FeedSelector
          onClick={() => {
            FeedSelectorClicked("topstories");
          }}
        >
          Top
        </FeedSelector>
        <FeedSelector
          onClick={() => {
            FeedSelectorClicked("newstories");
          }}
        >
          New
        </FeedSelector>
        <FeedSelector
          onClick={() => {
            FeedSelectorClicked("beststories");
          }}
        >
          Best
        </FeedSelector>
        <FeedSelector
          onClick={() => {
            FeedSelectorClicked("askstories");
          }}
        >
          Ask
        </FeedSelector>
        <FeedSelector
          onClick={() => {
            FeedSelectorClicked("showstories");
          }}
        >
          Show
        </FeedSelector>
        <FeedSelector
          onClick={() => {
            FeedSelectorClicked("jobstories");
          }}
        >
          Job
        </FeedSelector>
      </FeedSelectorContainer>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ff5722;
`;

const HackerLogo = styled.img`
  margin-left: 1vw;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 2vw;
`;

const FeedSelector = styled.div`
  padding-left: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  cursor: pointer;
`;

const FeedSelectorContainer = styled.div`
  display: flex;
  padding-left: 4vw;
`;
