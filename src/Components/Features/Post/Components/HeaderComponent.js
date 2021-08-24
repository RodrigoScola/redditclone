import React from "react";

export const HeaderComponent = ({ author, subreddit }) => {
  return (
    <div>
      <p>{subreddit}</p>
      <p>posted by {author} hours ago</p>
      <p>some flares here</p>
      <p>spoilers</p>
    </div>
  );
};
