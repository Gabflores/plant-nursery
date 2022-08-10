import React from "react";
import bannerImg from "../../img/banner.jpg";
import "./Banner.css";

function Banner(){
//<img  classname="bannerImg  h-4/6" src={bannerImg} alt="banner"/>
  return (
    <>
    <div 
    className="flex pt-10 h-auto md:h-screen overflow-hidden z-10" 
    style={
      {backgroundImage: `url(${bannerImg})`, 
      backgroundSize:"cover", 
      backgroundRepeat:"no-repeat", 
      backgroundPosition:"right bottom"}
      }>
      
      <div className="py-12 pl-4 w-full  md:pl-9 md:py-20 xl:pl-40 lg:py-36" >
        <h2 className="bannerText text-2xl md:text-6xl lg:text-8xl">Best house</h2>
        <h2 className="bannerText text-2xl md:text-6xl lg:text-8xl  md:mb-12">plants varieties</h2>

        <p className="hidden text-white text-center px-5 py-2 bg-black rounded-3xl md:inline md:text-xl md:px-11 md:py-3.5 cursor-pointer text-center">Shop me</p>
        <h3 className="mt-7 text-sm md:mt-16 md:font-medium md:text-2xl lg:text-2xl">Beautiful living greenery</h3>
        <h3 className="text-sm md:font-medium md:text-2xl lg:text-2xl">for homes and offices</h3>

        <p className="mt-5 text-xs font-extralight mb-4 md:mb-2.5 md:text-base xlg:text-sm">We've been mentioned in press</p>
        <p className="inline text-white text-center  px-5 py-2 bg-black rounded-3xl md:hidden cursor-pointer" >Shop me</p>
        <div className="mt-6 flex"> 
          <p className="text-sm text-gray-500 md:text-2xl lg:text-4xl">Kodigo</p>
          <p className="ml-3 text-sm text-gray-500 md:text-2xl md:ml-20 lg:text-4xl">Applaudo Studios</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner;