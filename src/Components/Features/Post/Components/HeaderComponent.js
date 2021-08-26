import React from "react";
import "../post.css";
import { baseLink, REDDIT as reddit } from "../../../../REDDIT";
export const HeaderComponent = ({ author, subreddit, awards }) => {
  const redditLink = `${baseLink}${subreddit}`;
  return (
    <div className="header">
      <p>
        <a href={redditLink} target="_blank">
          {subreddit}
        </a>
      </p>
      <div className="flairs">
        <p>
          posted by{" "}
          <a href={`${reddit.profileLink}${author}`} target="_blank">
            {author}
          </a>{" "}
          hours ago
        </p>
        <div className="flairsDiv">
          {/* render awards */}
          {awards.map((value) => {
            return <img className="headerimg" src={value.icon_url} />;
          })}
        </div>
      </div>
    </div>
  );
};
