import React from "react";

export const ContentComponent = ({ title, imgSource }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={imgSource} alt="" />
    </div>
  );
};
