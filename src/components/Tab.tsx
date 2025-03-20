import React from "react";

function Tab() {
  return (
    <div className="tabs w-full" style={{ width: "100%" }}>
      <ul>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
  );
}

export default Tab;
