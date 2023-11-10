// modules
import React from "react";
import Image from "next/image";
// images
import ProfilePicPlaceholder from "../../../public/profile-pic-placeholder.jpg";
// styled-components
import { FlexRowCenteredContainer } from "../../styled-component/Container";
import { SpeechBubble } from "../../styled-component/SpeechBubble";

export default function CommentComponent({ index, comment }) {
  return (
    <>
      <FlexRowCenteredContainer
        style={{ gap: 30, minWidth: "40vw", flexWrap: "nowrap" }}
      >
        <div className="flex-1 text-right">
          <Image
            src={ProfilePicPlaceholder}
            className="w-100 h-100"
            style={{ maxWidth: 200, maxHeight: 320 }}
            width={500}
            height={500}
            layout="responsive"
            alt="Picture of the commentor"
          />
        </div>
        <div className="flex-2 text-left">
          <SpeechBubble>
            <span
              className="flex-1 w-100"
              style={{ fontWeight: 900, fontSize: 20 }}
            >
              {comment.user_name !== "" ? comment.user_name : "<unknown>"},{" "}
              {comment.comment_date !== "" ? comment.comment_date : "<no date>"}
              ,{" "}
              {comment.comment_time !== "" ? comment.comment_time : "<no time>"}
            </span>
            <span
              style={{
                display: "block",
                width: "100%",
                wordWrap: "break-word",
              }}
            >
              {comment.comment !== "" ? comment.comment : "<no comment>"}
            </span>
          </SpeechBubble>
        </div>
      </FlexRowCenteredContainer>
    </>
  );
}
