import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import Spinner from "./Spinner";
import { NewsContext } from "./Context";
import * as Api from "./Api";
import Comments from "./Comments";

const Post = () => {
  const { postId } = useContext(NewsContext);
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await Api.getItem(postId);
      setPost(fetchedPost);
    };

    fetchPost();
  }, [postId]);

  return (
    <Grid>
      <TopBar />
      <div>
        {post ? (
          <>
            <Title>{post.title}</Title>
            <Text>{post.text}</Text>
            <Text>comments:</Text>
            <Comments post={post} />
          </>
        ) : (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        )}
      </div>
    </Grid>
  );
};

export default Post;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 12vh 88vh;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 2vh;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.div`
  padding: 2vh;
  font-size: 1.05rem;
`;
