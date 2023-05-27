import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BaseForm = () => {
  const [isclicked, setIsclicked] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    setIsclicked(false);
  };

  const display = (
    <div className="display-message">
      <div className="py-2">DO YOU HAVE AN ACCOUNT ALREADY?</div>
      <div className="text-center">IF NO, THEN SIGN ON HERE</div>
      <div className="text-center py-5">
        {" "}
        <button
          className="border-2 border-cyan-500/75 rounded-lg px-8 py-2 shadow-md bg-stone-400"
          onClick={(e) => handleClick(e)}
        >
          <Link to="/createprofile"> SIGN ON </Link>
        </button>
      </div>
    </div>
  );
  return <div className="homepage">{isclicked ? display : ""}</div>;
};

export default BaseForm;
