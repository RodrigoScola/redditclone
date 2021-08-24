import React from "react";

export const ShareComponent = ({ totalComments }) => {
  return (
    <div>
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
