import React, { useState } from "react";
import Modalbox from "./Modalbox";
import cn from "classnames";

const Sidebar = () => {
  const topics = ["#general", "#random"];
  const [activeButton, setActiveButton] = useState(0);

  return (
    <>
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>Channels</span>
        <button
          className="p-0 text-primary btn btn-group-vertical"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
        <Modalbox />
      </div>
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {topics.map((topic, index) => (
          <li key={index} className="nav-item w-100">
            <button
              className={cn("w-100 text-start btn btn", {
                "btn-primary": activeButton === index,
              })}
              onClick={() => setActiveButton(index)}
            >
              {topic}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
