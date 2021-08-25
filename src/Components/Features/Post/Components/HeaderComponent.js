import React from "react";
import "../post.css";
export const HeaderComponent = ({ author, subreddit, awards }) => {
  return (
    <div className="header">
      <p>{subreddit}</p>
      <div className="flairs">
        <p>posted by {author} hours ago</p>
        {/* render awards */}
        {awards.map((value) => {
          return <img className="headerimg" src={value.icon_url} />;
        })}
        <p>spoilers</p>
      </div>
    </div>
  );
};
