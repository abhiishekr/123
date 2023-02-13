import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();
  function handleOnClick() {
    return (console.log("button"));
  }

  return (
    <div>
      <div className="navbar">
        <p>Shoppo</p>
        <button className="addbtn"
          onClick={() =>{return (handleOnClick)}}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Navbar;
