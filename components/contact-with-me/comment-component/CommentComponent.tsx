// images
import ProfilePicPlaceholder from "../../../public/profile-pic-placeholder.jpg";
// styled-components
import { FlexRowCenteredContainer } from "../../styled-component/Container";
import {
  SpeechBubbleLeft,
  SpeechBubbleRight,
} from "../../styled-component/SpeechBubble";

interface CommentComponentProps {
  index: number;
  comment: {
    comment: string;
    comment_date: string;
    comment_time: string;
    id: string;
    user_name: string;
  };
}
export default function CommentComponent({
  index,
  comment,
}: CommentComponentProps) {
  return (
    <>
      <FlexRowCenteredContainer
        style={{ gap: 30, minWidth: "40vw", flexWrap: "nowrap" }}
      >
        {index % 2 === 0 ? (
          <>
            <img className="flex-1 w-100" src={ProfilePicPlaceholder} />
            <SpeechBubbleLeft className="flex-2 text-left w-100">
              <span
                className="flex-1 w-100"
                style={{ fontWeight: 900, fontSize: 20 }}
              >
                {comment.user_name !== "" ? comment.user_name : "<unknown>"},{" "}
                {comment.comment_date !== ""
                  ? comment.comment_date
                  : "<no date>"}
                ,{" "}
                {comment.comment_time !== ""
                  ? comment.comment_time
                  : "<no time>"}
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
            </SpeechBubbleLeft>
          </>
        ) : (
          <>
            <SpeechBubbleRight className="flex-2 d-flex flex-column text-left">
              <span
                className="flex-1"
                style={{ fontWeight: 900, fontSize: 20 }}
              >
                {comment.user_name !== "" ? comment.user_name : "<unknown>"},{" "}
                {comment.comment_date !== ""
                  ? comment.comment_date
                  : "<no date>"}
                ,{" "}
                {comment.comment_time !== ""
                  ? comment.comment_time
                  : "<no time>"}
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
            </SpeechBubbleRight>
            <img className="flex-1 w-100" src={ProfilePicPlaceholder} />
          </>
        )}
      </FlexRowCenteredContainer>
    </>
  );
}
