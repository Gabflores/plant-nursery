import React from "react";
import arrow from "../../img/arrow.svg";
import Slider from "react-slick";
import "./ExtraInformation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ExtraInformation() {

  const handleUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PlantNurseryProject");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/plant-nursery/image/upload",
      {

        method: "POST",
        body: data
      }
    )
    const file = await res.json();
    console.log(file.secure_url)
  }


  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col md:flex-row z-0">
        <div className="text-center pt-8 px-14 md:py-20 md:px-12 md:text-left  xl:pt-40 xl:px-32 ">
          <p className="text-xs md:text-lg xl:text-xl 2xl:text-2xl">Each house plant set is handed quiclky and safety before being sent to your destination in specially designed insulated packaging</p>
        </div>
        <div className="text-center pt-8 px-3.5 md:py-20 md:px-12 md:text-left xl:pt-40 xl:px-32">
          <p className="text-xl font-medium md:text-2xl xl:text-3xl 2xl:text-4xl">Learn how we take care of your plant at every stage of its journey from our greenhouse to your home</p>
          <div className="flex justify-center items-center mt-7 cursor-pointer hover:underline md:justify-start md:mt-12"><p className="text-sm md:text-lg xl:text-xl">LEARN MORE</p><img className="w-6 h-6 ml-5" src={arrow} alt="arrow" /></div>
        </div>
      </div>
      <div className="overflow-hidden py-8 px-4 md:px-5 md:py-20 z-0 xl:px-28 overflow-hidden bg-gradient-to-b from-white to-stone-100">
        <Slider {...settings} className="">
          <div className="">
            <img className="z-0 px-4 xl:rounded-xl" src="https://res.cloudinary.com/plant-nursery/image/upload/v1660102775/PlantNurseryProject/eenylb40omr67s8exyja.jpg" alt="img1" />
            <div className="flex ml-4 mt-6 z-0">
              <p className=" absolute text-xs ml-0.1 md:text-sm lg:text-base">Step 1</p>
              <p className="lora mx-auto font-medium text-sm md:text-base lg:text-xl"> We put everything together</p>
            </div>
          </div>
          <div>
            <img className="z-0 px-4" src="https://res.cloudinary.com/plant-nursery/image/upload/v1660103150/PlantNurseryProject/hc0b0mfj1o1zxlk26ith.jpg" alt="img1" />
            <div className="flex ml-4 mt-6 z-0">
              <p className=" absolute text-xs ml-0.1 md:text-sm lg:text-base">Step 2</p>
              <p className="lora mx-auto font-medium text-sm md:text-base lg:text-xl"> We put everything together</p>
            </div>
          </div>
          <div>
            <img className="z-0 px-4" src="https://res.cloudinary.com/plant-nursery/image/upload/v1660103169/PlantNurseryProject/ubkwfatgzjtuyvgfx4kh.jpg" alt="img1" />
            <div className="flex ml-4 mt-6 z-0">
              <p className=" absolute text-xs ml-0.1 md:text-sm lg:text-base" >Step 3</p>
              <p className="lora mx-auto font-medium text-sm md:text-base lg:text-xl"> We put everything together</p>
            </div>
          </div>

        </Slider>
      </div>
      {/* <input className="mt-20" onChange={handleUpload} type="file" /> */}
    </>
  )
}
export default ExtraInformation;
