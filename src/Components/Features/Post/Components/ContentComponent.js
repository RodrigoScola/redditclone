import React from "react";
import "../post.css";
export const ContentComponent = ({ title, imgSource }) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <img src={imgSource} alt="" />
    </div>
  );
};
