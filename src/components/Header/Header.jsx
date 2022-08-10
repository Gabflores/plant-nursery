import React from "react";
import logo from "../../img/logo.svg";
import searchIcon from "../../img/search.svg";
import cartIcon from "../../img/cart.svg";
import loginIcon from "../../img/login.svg"
import menuIcon from "../../img/menu.svg";
import Cart from "../Cart/Cart";
import PlantsCategories from "../PlantsCategories/PlantsCategories";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState(false);

  return (
    <>
    <header className="flex justify-between w-screen items-end px-4 md:px-12 py-3 md:py-6 fixed bg-white z-100 shadow-md shadow-gray-200">
      <Link to="/"><img className=" w-32 cursor-pointer" src={logo} alt="logo "/></Link>
      <nav className="hidden md:block">
        <ul className="flex">
          <li className=" menuItem mr-7 md:mr-8 hover:underline  decoration-gray-700 cursor-pointer"><button onClick={() => setCategories(!categories)}>Plant</button>
          { categories ? <PlantsCategories/> : null}
          </li>
          <li className="menuItem mr-7 md:mr-8 hover:underline decoration-gray-700 cursor-pointer">For offices</li>
          <li className="menuItem mr-7 md:mr-8 hover:underline decoration-gray-700 cursor-pointer">Plants care</li>
          <li className="menuItem hover:underline  decoration-gray-700 cursor-pointer">About</li>
        </ul>
      </nav>
      <div className="flex mb-1 ">
        <img className="w-5 mr-8 hover:animate-bounce cursor-pointer"src={searchIcon} alt="search"/>
        <img className="w-5 mr-8 hover:animate-bounce cursor-pointer" src={loginIcon} alt="login"/>
        <button onClick={() => setShow(!show)}><img className="w-5 hover:animate-bounce cursor-pointer" src={cartIcon} alt="cart"/></button>
      </div>
      <div className="block md:hidden">
        <img src={menuIcon} alt="menu"/>
      </div>
    </header>
    { show ? <Cart/> : null }
    </>
  );
}

export default Header;