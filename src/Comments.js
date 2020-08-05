import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import * as Api from "./Api";

const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const fetchedComments = await Promise.all(
        post.kids.map(async (commentId) => {
          return await Api.getItem(commentId);
        })
      );

      //   setComments(fetchedComments);
      const newCommentsWithKids = await Promise.all(
        fetchedComments.map(async (comment) => {
          if (comment.kids) {
            const kids = await Promise.all(
              comment.kids.map(async (kidCommentId) => {
                return await Api.getItem(kidCommentId);
              })
            );
            return { comment, kidComments: kids };
          } else return { comment };
        })
      );

      setComments(newCommentsWithKids);
    };

    getComments();
  }, [post.kids]);

  const generateId = () => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < 13; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <Container>
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <CommentContainer key={generateId()}>
              <h3>{comment.comment.by}</h3>
              <CommentText
                dangerouslySetInnerHTML={{ __html: comment.comment.text }}
              />
              {comment.kidComments
                ? comment.kidComments.map((comment) => {
                    return (
                      <KidCommentsContainer key={generateId()}>
                        <h3>{comment.by}</h3>
                        <CommentText
                          dangerouslySetInnerHTML={{
                            __html: comment.text,
                          }}
                        />
                      </KidCommentsContainer>
                    );
                  })
                : ""}
            </CommentContainer>
          );
        })
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  padding-left: 2vw;
  padding-top: 4vh;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CommentContainer = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 5px 10px 18px #888888;
  padding: 1.5vh;
`;

const KidCommentsContainer = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 5px 10px 18px #888888;
  margin: 0.5vh 0 0.5vh 6vw;
  padding: 0.5vh;
`;

const CommentText = styled.div`
  font-size: 1.1rem;
`;
