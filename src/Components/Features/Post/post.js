import React from "react";
import { ContentComponent } from "./Components/ContentComponent";
import { ScoreComponent } from "./Components/ScoreComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
import { ShareComponent } from "./Components/shareComponent";
import "./post.css";

export const Post = ({
  awards,
  originalPost,
  imgSource,
  title,
  score,
  subreddit,
  author,
  totalComments,
}) => {
  return (
    <div className="post">
      <ScoreComponent score={score} />
      <HeaderComponent
        awards={awards}
        className="header"
        author={author}
        subreddit={subreddit}
      />
      <ContentComponent title={title} imgSource={imgSource} />
      <ShareComponent totalComments={totalComments} />
      <br />
      <br />
    </div>
  );
};
