import React from "react";
import "../post.css";
export const ContentComponent = ({ title, imgSource, media, isVideo }) => {
  if (!isVideo) {
    return (
      <div className="content">
        <h3>{title}</h3>
        <img
          onClick={() => {
            window.open(imgSource, "_blank");
          }}
          src={imgSource}
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="content">
        {console.log(media)}
        <h3>{title}</h3>
        <h1>{isVideo}</h1>
        <video width="320" height="1020" autoplay constrols>
          <source src={media} type="video/mp4" />
          your navigator does not support videos lulw
        </video>
      </div>
    );
  }
};
