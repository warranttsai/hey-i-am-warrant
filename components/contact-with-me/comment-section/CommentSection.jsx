// modules
import React, { useState, useEffect } from "react";
import { Button, TextareaAutosize } from "@mui/material";
// utils
import {
  fetchingComments,
  saveComment,
} from "../../../utils/commentSectionUtils";
// styled-components
import { FlexColumnCenteredContainer } from "../../styled-component/Container";
// components
import CommentComponent from "../comment-component/CommentComponent";
import WarningBalloon from "../../warning-ballon/WarningBalloon";

export default function CommentSection() {
  const [inputUserName, setInputUserName] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  // loading
  const [submitingNewComment, setSubmitingNewComment] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [onShowBallon, setOnShowBallon] = useState(false);
  const [ballonMessage, setBallonMessage] = useState("404 Not Found!");
  const [ballonColour, setBacllonColour] = useState("red");

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
        .catch((err) => {
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
        .catch((err) => {
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
      .catch((err) => {
        console.log("Fetching Comments Error!", err);
        setOnShowBallon(true);
        setBallonMessage(err.toString());
        setBacllonColour("red");
      });
  }, []);

  // show boaalon debounce
  useEffect(() => {
    console.log({
      ballonMessage: ballonMessage,
    });
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
        <div
          className="d-flex flex-column justify-content-center"
          style={{ width: "50%", gap: 5 }}
        >
          <TextareaAutosize
            className="w-100"
            style={{ minHeight: 25, padding: 0 }}
            value={inputUserName}
            placeholder="What is your name?"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmitComment();
            }}
            onChange={(e) => {
              setInputUserName(e.target.value);
            }}
          />
          <TextareaAutosize
            className="w-100"
            style={{ minHeight: 50, padding: 0 }}
            value={inputComment}
            onChange={(e) => {
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
          commentList.map((comment, index) => {
            return (
              <React.Fragment key={comment.id}>
                <CommentComponent index={index} comment={comment} />
              </React.Fragment>
            );
          })
        )}
      </FlexColumnCenteredContainer>

      {onShowBallon && (
        <WarningBalloon message={ballonMessage} colour={ballonColour} />
      )}
    </>
  );
}
