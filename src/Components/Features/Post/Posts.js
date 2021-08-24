import React from "react";
import { Post } from "./post";
export const Posts = ({ data }) => {
  const prod = true;

  if (prod) {
    return (
      <div>
        {console.log(
          data.map((value) => {
            return value;
          })
        )}
        {data.map((value) => {
          return (
            <Post
              score={value.score}
              totalComments={value.numComments}
              title={value.title}
              key={value.id}
              author={value.author}
              subreddit={value.subReddit}
              originalPost={value.originalLink}
              imgSource={value.source}
            />
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};
