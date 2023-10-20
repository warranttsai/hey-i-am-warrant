// modules
import React, { useState, useEffect } from "react";
import { Button, TextareaAutosize } from "@mui/material";
// utils
import { fetchingComments, saveComment } from "../../utils/commentSectionUtils";
// styled-components
import { FlexColumnCenteredContainer } from "../../../components/styled-component/Container";
// components
import CommentComponent from "../comment-component/CommentComponent";
import WarningBalloon from "../../WarningBalloon";

export default function CommentSection() {
  const [inputUserName, setInputUserName] = useState<string>("");
  const [inputComment, setInputComment] = useState<string>("");
  const [commentList, setCommentList] = useState<
    Array<{
      comment: string;
      comment_date: string;
      comment_time: string;
      id: string;
      user_name: string;
    }>
  >([]);
  // loading
  const [submitingNewComment, setSubmitingNewComment] =
    useState<boolean>(false);
  const [refreshComments, setRefreshComments] = useState<boolean>(false);
  const [onShowBallon, setOnShowBallon] = useState<boolean>(false);
  const [ballonMessage, setBallonMessage] = useState<string>("404 Not Found!");
  const [ballonColour, setBacllonColour] = useState<string>("red");

  const handleSubmitComment = () => {
    if (inputComment) {
      setSubmitingNewComment(true);
      saveComment(inputUserName, inputComment)
        .then(() => {
          console.log("Saving comment success!");
          setInputUserName("");
          setInputComment("");
          setSubmitingNewComment(false);
          setRefreshComments(true);
        })
        .catch((err: string) => {
          console.log("Save comment error!", err);
          setSubmitingNewComment(false);
          setOnShowBallon(true);
          setBallonMessage(err.toString());
          setBacllonColour("red");
        });
    } else {
      setOnShowBallon(true);
      setBallonMessage("Please fill in your comment!");
      setBacllonColour("red");
    }
  };

  useEffect(() => {
    if (refreshComments) {
      fetchingComments()
        .then((res) => {
          setCommentList(res);
          setRefreshComments(false);
        })
        .catch((err: string) => {
          console.log("Fetching Comments Error!", err);
          setRefreshComments(false);
          setOnShowBallon(true);
          setBallonMessage(err.toString());
          setBacllonColour("red");
        });
    }
  }, [refreshComments]);
  useEffect(() => {
    fetchingComments()
      .then((res) => {
        setCommentList(res);
        setRefreshComments(false);
      })
      .catch((err: string) => {
        console.log("Fetching Comments Error!", err);
        setOnShowBallon(true);
        setBallonMessage(err.toString());
        setBacllonColour("red");
      });
  }, []);

  // show boaalon debounce
  useEffect(() => {
    if (onShowBallon) {
      // After 3 seconds, hide the message again
      setTimeout(() => {
        setOnShowBallon(false);
      }, 1000);
    }
  }, [onShowBallon]);

  return (
    <>
      <FlexColumnCenteredContainer>
        <div style={{ width: "50%" }}>
          <TextareaAutosize
            className="w-100"
            style={{ minHeight: 25, padding: 0 }}
            value={inputUserName}
            placeholder="What is your name?"
            onKeyDown={(e: any) => {
              if (e.key === "Enter") handleSubmitComment();
            }}
            onChange={(e: any) => {
              setInputUserName(e.target.value);
            }}
          />
          <TextareaAutosize
            className="w-100"
            style={{ minHeight: 50, padding: 0 }}
            value={inputComment}
            onChange={(e: any) => {
              setInputComment(e.target.value);
            }}
            placeholder="Anything you want to say..."
          />
          {submitingNewComment ? (
            <span>Submitting...</span>
          ) : (
            <Button variant="contained" onClick={handleSubmitComment}>
              Submit
            </Button>
          )}
        </div>
        <br />
        {refreshComments ? (
          <span>Loading...</span>
        ) : (
          commentList &&
          commentList.map(
            (
              comment: {
                comment: string;
                comment_date: string;
                comment_time: string;
                id: string;
                user_name: string;
              },
              index: number
            ) => {
              return (
                <React.Fragment key={comment.id}>
                  <CommentComponent index={index} comment={comment} />
                </React.Fragment>
              );
            }
          )
        )}
      </FlexColumnCenteredContainer>

      {onShowBallon && (
        <WarningBalloon message={ballonMessage} colour={ballonColour} />
      )}
    </>
  );
}
