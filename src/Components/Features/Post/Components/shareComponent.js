import React from "react";
import { baseLink } from "../../../../REDDIT";
import "../post.css";
export const ShareComponent = ({ originalPost, totalComments }) => {
  return (
    <div className="footer">
      <ul>
        <li>
          {/* comments svg */}
          <p>({totalComments}) total comments</p>
        </li>
        <li>{/* share icon */}</li>
        <button
          onClick={() => {
            window.open(`${baseLink}${originalPost}`);
          }}
        >
          Click to see the full post
        </button>
      </ul>
    </div>
  );
};
