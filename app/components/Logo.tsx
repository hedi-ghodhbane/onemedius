import React from "react";

function Icon() {
  return (
    <svg
      className="fixed w-screen md:w-[60%] lg:w-1/2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 335 335"
    >
      <circle
        cx="167.5"
        cy="167.5"
        r="157.5"
        stroke="#000"
        strokeWidth="20"
      ></circle>
      <circle
        cx="167.5"
        cy="167.5"
        r="63.5"
        fill="#D92127"
        stroke="#D92127"
        strokeWidth="20"
      ></circle>
    </svg>
  );
}

export default Icon;
