import React from "react";
import "./styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import {PlusIcon} from "@heroicons/react/24/outline"


const Navbar = () => {
  const navigateTo=useNavigate();
  function handleOnClick() {
    return navigateTo("/AddProduct");
  }
  function loginHandler() {
    return navigateTo("/Login");
  }
  function registerHandler() {
    return navigateTo("/Register");
  }


  return (
    <div>
      <div className="navbar">
        <p>SHOPPO</p>
        <button className="loginbtn" onClick={()=>{loginHandler();}}>Login</button>
        <button className="registerbtn" onClick={()=>{registerHandler();}}>Register</button>
        <PlusIcon className="addbtn"
          onClick={() => {
            handleOnClick();
          }}
        >
          Add Item
        </PlusIcon>
      </div>
    </div>
  );
};

export default Navbar;
