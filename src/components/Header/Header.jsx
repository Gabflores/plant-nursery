import React from "react";
import logo from "../../img/logo.svg";
import searchIcon from "../../img/search.svg";
import cartIcon from "../../img/cart.svg";
import loginIcon from "../../img/login.svg"
import menuIcon from "../../img/menu.svg";
import "./Header.css";

function Header() {

  return (
    <>
    <header className="flex justify-between w-screen items-end px-4 md:px-12 py-3 md:py-6 fixed bg-white z-100 shadow-md shadow-gray-200">
      <img className=" w-32 " src={logo} alt="logo "/>
      <nav className="hidden md:block">
        <ul className="flex">
          <li className=" menuItem mr-7 md:mr-8 hover:underline decoration-gray-700 ">Plant</li>
          <li className="menuItem mr-7 md:mr-8 hover:underline decoration-gray-800 ">For offices</li>
          <li className="menuItem mr-7 md:mr-8 hover:underline decoration-gray-900 ">Plants care</li>
          <li className="menuItem hover:underline decoration-gray-500 lg:text-sm">About</li>
          
        </ul> 
      </nav>
      <div className="flex mb-1 ">
        <img className="w-5 mr-8"src={searchIcon} alt="search"/>
        <img className="w-5 mr-8" src={loginIcon} alt="login"/>
        <img className="w-5" src={cartIcon} alt="cart"/>
      </div>
      <div className="block md:hidden">
        <img src={menuIcon} alt="menu"/>
      </div>
    </header>
    </>
  )
}

export default Header;