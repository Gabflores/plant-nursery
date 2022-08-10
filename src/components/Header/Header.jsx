import React from "react";
import logo from "../../img/logo.svg";
import searchIcon from "../../img/search.svg";
import cartIcon from "../../img/cart.svg";
import loginIcon from "../../img/login.svg"
import menuIcon from "../../img/menu.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css";


function Header() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  }

  return (
    <>
      <header className="flex justify-between w-screen items-end px-4 md:px-12 py-3 md:py-6 fixed bg-white z-50 shadow-md shadow-gray-200">
        <img className=" w-32 cursor-pointer" src={logo} alt="logo " />
        <nav className="hidden md:block">
          <ul className="flex">
            <li className=" menuItem mr-7 md:mr-8 hover:underline  decoration-gray-700 cursor-pointer">Plant</li>
            <li className="menuItem mr-7 md:mr-8 hover:underline decoration-gray-700 cursor-pointer">For offices</li>
            <li className="menuItem mr-7 md:mr-8 hover:underline decoration-gray-700 cursor-pointer">Plants care</li>
            <li className="menuItem hover:underline  decoration-gray-700 cursor-pointer">About</li>

          </ul>
        </nav>
        <div className="flex mb-1 ">
          <img className="w-5 mr-8 hover:animate-bounce cursor-pointer" src={searchIcon} alt="search" />
          <img
            onClick={handleLogin}
            className="w-5 mr-8 hover:animate-bounce cursor-pointer"
            src={loginIcon}
            alt="login" />
          <img className="w-5 hover:animate-bounce cursor-pointer" src={cartIcon} alt="cart" />
        </div>
        <div className="block md:hidden">
          <img src={menuIcon} alt="menu" />
        </div>
      </header>
    </>
  )
}

export default Header;