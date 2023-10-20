import axios from "axios";

export const fetchingComments = async () => {
  let result: Array<{
    comment: string;
    comment_date: string;
    comment_time: string;
    id: string;
    user_name: string;
  }> = [];
  await axios
    .post(
      "https://dc2my8iwv4.execute-api.ap-southeast-2.amazonaws.com/prod/comments",
      {
        endpoint: "getComments",
      }
    )
    .then(
      (res: {
        data: {
          Items: [
            {
              comment: string;
              comment_date: string;
              comment_time: string;
              id: string;
              user_name: string;
            }
          ];
        };
      }) => {
        result = res?.data?.Items;
        result.sort((a, b) => {
          const dateA: any = new Date(`${a.comment_date} ${a.comment_time}`);
          const dateB: any = new Date(`${b.comment_date} ${b.comment_time}`);
          return dateB - dateA; // Sort in descending order (newest to oldest)
        });
      }
    )
    .catch(() => {
      throw Error("Fetching comments error!");
    });
  return result;
};

export const saveComment = async (userName: string, comment: string) => {
  const today = new Date();
  const commentDate = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;
  const getMinute =
    today.getMinutes() < 10
      ? "0" + today.getMinutes().toString()
      : today.getMinutes();
  const getSecond =
    today.getSeconds() < 10
      ? "0" + today.getSeconds().toString()
      : today.getSeconds();
  const commentTime = `${today.getHours()}:${getMinute}:${getSecond}`;

  const payload = {
    endpoint: "saveComment",
    params: {
      user_name: userName,
      comment: comment,
      comment_date: commentDate,
      comment_time: commentTime,
    },
  };

  await axios
    .post(
      "https://dc2my8iwv4.execute-api.ap-southeast-2.amazonaws.com/prod/comment",
      payload
    )
    .catch(() => {
      throw Error("Saving comments error!");
    });

  return "Successfully saved comment!";
};
