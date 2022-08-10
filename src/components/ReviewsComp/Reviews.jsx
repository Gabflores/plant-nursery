import React from "react";
import starsImg from "../../img/stars.svg";

function Reviews() {

  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center md:flex-row md:mt-12">
        <div className="flex flex-col text-center items-center justify-center md:text-start md:items-start md:ml-12">
          <p className="text-sm font-medium md:text-xl">REVIEWS</p>
          <p className="mt-6 mx-24 text-xs md:text-base md:mx-0">Shop with confidance by reading customer
            reviews given by individuals who have used
            Bioomey. Excelient quality and streamlined
            service are both offered here.</p>
          <div className="flex mt-5 items-center"><img src={starsImg} alt="stars" /> <p className="ml-3 font-bold text-xs md:text-base">5/5</p></div>
        </div>
        <div className="flex flex-col text-center mt-5">
          <p className="lora mx-4 text-xl font-medium md:text-2xl md:pt-4">

            We adore all our friends at Bloomey,
            especially the beauties who have come
            to live with us! Great advice when
            needed, beautifully and safely packaged.
            Highly recommend, it's just the best
            place for healthy plants and great value!
          </p>
          <div className="flex flex-col text-start mt-12 ml-4">
            <p className="lora font-medium md:text-lg">Pamela S.</p>
            <p className="mt-3 text-sm font-light md:text-base">Lake Forest, CA</p>
          </div>
        </div>
      </div>
      <div className="">
        <img className="absolute px-4 py-3.5 z-0 " src="https://res.cloudinary.com/plant-nursery/image/upload/v1660164907/PlantNurseryProject/q67f01xhqzaqwnas7igz.jpg" alt="Instagram" />
        <div className="lora relative z-10 pt-7 mx-9 font-medium text-xl w-[45%]">Get inspired from our Instagram</div>
        <p className="relative z-10 mt-3.5 mx-9 text-sm font-light w-3/5">If you use the hashtag #Bioomey on Instagram, we'll spotlight you </p>
        <div className="relative z-10 mt-2.5 mx-9 text-xs font-medium">Check it out</div>
      </div>
      <div className="mt-32 ">
        <div className="lora text-lg font-medium text-center mx-10">Stay update with spectial offers, plant-parenting tips, and more.</div>
        <div className="px-8 bg-stone-100 ">
          <div className="mt-6 pb-1.5 pt-5 flex justify-between border-b border-black">
            <input className="bg-stone-100 text-xs px-1.5 py-3" placeholder="Your email" type="text" />
            <div className="text-white text-center flex items-center text-xs bg-black px-5 py-1.5 rounded-3xl md:text-xl md:px-11 md:py-3.5 cursor-pointer">Subscribe</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews;