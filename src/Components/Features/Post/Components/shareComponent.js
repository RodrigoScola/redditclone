import React from "react";
import "../post.css";
export const ShareComponent = ({ totalComments }) => {
  return (
    <div className="footer">
      <ul>
        <li>
          {/* comments svg */}
          <p>({totalComments}) total comments</p>
        </li>
        <li>
          {/* share icon */}
          <p>share</p>
        </li>
      </ul>
    </div>
  );
};
