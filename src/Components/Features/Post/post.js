import React from "react";
import { ContentComponent } from "./Components/ContentComponent";
import { ScoreComponent } from "./Components/ScoreComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
import { ShareComponent } from "./Components/shareComponent";
import "./post.css";
{
  /* <button
  title="button to see full post"
  onClick={() => {
    window.open(`https://reddit.com${originalPost}`, "_blank");
  }}
>
  click to see the full post
</button> */
}
export const Post = ({
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
      <div>
        <ScoreComponent score={score} />
      </div>
      <div className="headerComponent">
        <HeaderComponent author={author} subreddit={subreddit} />
      </div>
      <div>
        <ContentComponent title={title} imgSource={imgSource} />
      </div>

      <div>
        <ShareComponent totalComments={totalComments} />
        <br />
        <br />
      </div>
    </div>
  );
};
