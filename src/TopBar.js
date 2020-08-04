import React, { useContext } from "react";
import styled from "styled-components";
import { NewsContext } from "./Context";

const TopBar = () => {
  const { setTypeOfFeed } = useContext(NewsContext);

  return (
    <Container>
      <HackerLogo src="/hackerLogo.gif" />
      <Title>Hacker News</Title>
      <div>Top</div>
      <div>New</div>
      <div>Jobs</div>
      <div>Polls</div>
      <div>Comments</div>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  height: 12vh;
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
