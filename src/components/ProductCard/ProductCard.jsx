import React from "react";
import { useNavigate } from "react-router-dom";


function ProductCard({ imageUrl, name, price, id }) {

  const navigate= useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`)
  }
  return (
    <div className="min-w-[60vw] max-w-[60vw] mx-4 my-4 rounded-md overflow-hidden md:ml-6 md:min-w-[33vw] md:max-w-[33vw] lg:min-w-[25vw] lg:max-w-[25vw] xl:min-w-[20vw] xl:max-w-[20vw] 2xl:min-w-[15vw] 2xl:max-w-[15vw] "
      onClick={handleClick}>
      <img src={imageUrl} alt="product" />
      <div className="flex justify-between mt-4 md:mt-5 text-xs md:text-xl">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default ProductCard;