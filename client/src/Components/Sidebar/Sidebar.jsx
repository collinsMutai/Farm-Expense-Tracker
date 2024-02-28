import React from "react";
import "./Sidebar.css";

const Sidebar = ({ avatar }) => {
  return (
    <>
      <div className="sidebar">
        <div className="avatar">
          <img src={avatar} alt="" />
          <p>Hello Admin</p>
        </div>
        <button className="logout-btn">
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
