import React from "react";
import styled from "styled-components";
import Articles from "./Articles";
import TopBar from "./TopBar";

const Feed = () => {
  return (
    <Grid>
      <TopBar />
      <Articles />
    </Grid>
  );
};

export default Feed;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 12vh 88vh;
`;
