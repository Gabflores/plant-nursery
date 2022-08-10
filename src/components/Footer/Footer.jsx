import React from "react";
import logo from "../../img/logo.svg";
import fbImg from "../../img/fb.svg";
import twImg from "../../img/twitter.svg";
import instImg from "../../img/instagram.svg";


function Footer() {

  return (
    <footer className="flex flex-col items-center py-9 bg-stone-100">
      <img className="w-1/2" src={logo} alt="logo"/>
      <ul className="flex flex-col items-center w-full">
        <li className="pt-11 text-lg">Help</li>
        <li className="pt-11 text-lg">Contact Us</li>
        <li className="pt-11 pb-9 text-lg">Privacy {"&"} Terms</li>
      </ul>
      <div className="flex w-full justify-evenly pt-8 border-t-2">
      <img src={fbImg} alt="Fb"/>
      <img src={twImg} alt="Twitter"/>
      <img src={instImg} alt="Instagram"/>
      </div>
    </footer>
  )
}

export default Footer;