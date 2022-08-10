import React from "react";
import ItemShop from "./ItemShop/ItemShop";

function OurShop() {

  return (

    <div className="bg-gradient-to-b from-stone-100 to-white">
      <p className="pt-6 pl-4 text-xs md:pt-12 md:pl-12 md:text-xl 2xl:pl-32">OUR SHOP</p>
      <div className="flex flex-nowrap pt-6 pl-4 md:pt-9 md:pl-12 md:flex-col 2xl:pl-32">
        <div>
          <p className=" lora text-xl font-medium md:text-5xl">Here are the best seller </p>
          <p className=" lora text-xl font-medium md:text-5xl">from our varieties</p>
        </div>
        <div>

          <div className="ml-8 text-white text-center px-5 py-2 bg-black rounded-3xl cursor-pointer md:absolute md:ml-0 md:mt-9">See All</div>
        </div>

      </div>
      <div className="flex flex-row pt-12 h-2/5 overflow-x-scroll scrollbar-hide max-w-screen md:pt-32 md:pb-10 md:ml-6 2xl:ml-32">
        <ItemShop imgUrl="https://res.cloudinary.com/plant-nursery/image/upload/v1660155986/PlantNurseryProject/ml7gohmupdgbeq12r5bb.jpg" name="Aloe Vera" price="110.99" />
        <ItemShop imgUrl="https://res.cloudinary.com/plant-nursery/image/upload/v1660155883/PlantNurseryProject/bibcqdwxoemgzzlha1qd.jpg" name="Strelitzia nicolai" price="39.90" />
        <ItemShop imgUrl="https://res.cloudinary.com/plant-nursery/image/upload/v1660155564/PlantNurseryProject/haqiwzvtcafiapstiaki.jpg" name="Fiddle-leaf fig" price="39.90" />
        <ItemShop imgUrl="https://res.cloudinary.com/plant-nursery/image/upload/v1660155820/PlantNurseryProject/vowe72wwqrb6ubtgahxk.jpg" name="Cyca revoluta" price="39.90" />
      </div>
    </div>

  )
}

export default OurShop;