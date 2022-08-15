import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { AppContext } from "../context/AppContext";
import backArrow from "../img/back-arrow.svg";

function ProductInfo() {

  let { id } = useParams();
  let navigate = useNavigate();
  const { user, cart, setCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [role, setRole] = useState("");
  const [isDeleteOn, setIsDeleteOn] = useState(false);
  const [productData, setProductData] = useState({
    loading: true,
    data: null
  })

  const getRole = async () => {
    const res = await fetch(`http://localhost:8080/api/user/role/${user.uid}`, {
      method: "GET"
    });
    const resData = await res.json();
    if (!resData.ok) {
      console.log(resData.error);
    } else {
      setRole(resData.data);
    }
  }
  const getProductData = async () => {
    const res = await fetch(`http://localhost:8080/api/product/${id}`);
    const resData = await res.json();
    setProductData({
      loading: false,
      data: resData.data
    })
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    const flag = cart.find(item => item.product === productData.data.name)
    setCart(cart => [...cart, {
      product: productData.data.name,
      quantity: quantity
    }])
  }
  const handleEdit = (e) => {
    e.preventDefault();
    navigate("/edit/:id")
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/api/product/${id}`, {
      
      method: "DELETE"
    });
    const resData = await response.json();

    if (!resData.ok) {
      console.log("error: ", resData.error);
    } else {
      navigate("/products");
    }


  }

  useEffect(() => {
    getRole();
    getProductData();
  }, [])


  return (
    <>
      <Header />
      {productData.loading
        ? <h1>Loading Data...</h1>
        : productData.data
          ? <div className="flex pt-32 flex-col">
            <div className="mx-auto w-5/6">
              <div className="">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/products");
                  }}
                  className="cursor-pointer border-2 py-1.5 px-3 rounded-md hover:bg-gray-200  hover:text-white"
                ><img className="w-4" src={backArrow} alt="back" /></button>
              </div>
              <div className="flex w-full ">
                <div className="w-1/2 h-full max-h-[50vh]">
                  <img className="mx-auto max-w-[75%] min-w-[50%] max-h-screen" src={productData.data.image} alt="product" />
                </div>
                <div className='flex flex-col w-full '>
                  <div>
                    <p className="belleza text-xl text-neutral-400">Category: {productData.data.category.name}</p>
                    <h2 className="lora font-medium text-3xl">{productData.data.name}</h2></div>
                  <div className="flex flex-row mt-16">
                    <div className="flex flex-col w-1/2 pt-8">
                      <h3 className="belleza w-[80%] text-lg mt-3 mb-20">{productData.data.description}</h3>
                      <p className="belleza text-lg">weight: {productData.data.weight}</p>
                      <p className="belleza text-lg">stock: {productData.data.stock}</p>
                    </div>
                    <div className="flex flex-col w-4/12 pt-8 justify-between">
                      <p className="belleza text-2xl text-red-600 font-semibold">${productData.data.price}</p>
                      {role === "Admin"
                        ?
                        <div className="flex relative bottom-0">
                          <button
                            className="py-1.5 px-3 border-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                            onClick={handleEdit}>Edit</button>
                          <button
                            className="py-1.5 px-3 ml-8 border-2 text-white bg-red-500 hover:bg-red-600"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsDeleteOn(true);
                            }}>Delete</button>
                        </div>
                        : <div className="flex mt-10 flex-col">
                          <div className="flex ">
                            <button
                              className="border-2 rounded-md py-1.5 px-4 hover:bg-black hover:text-white font-medium"
                              onClick={(e) => {
                                e.preventDefault();
                                setQuantity(quantity - 1);
                              }}
                              disabled={quantity === 1}
                            >-</button>
                            <p className="py-1.5 px-5  font-medium">{quantity}</p>
                            <button
                              className="border-2 rounded-md py-1.5 px-3 hover:bg-black hover:text-white font-medium"
                              onClick={(e) => {
                                e.preventDefault();
                                setQuantity(quantity + 1);
                              }}
                              disabled={quantity === productData.data.stock}
                            >+</button>
                          </div>
                          <button
                            className="focus:outline-none text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-16 py-3.5 mr-2 mb-2 mt-10 "
                            onClick={handleAddToCart}>Add to cart</button>
                        </div>

                      }
                      <p className="belleza text-1xl text-neutral-400">Accumulate 100 green points  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <h1>No Data available :c</h1>}
      {isDeleteOn &&
        <div className="absolute top-[40%] left-0 right-0 mx-auto w-[40%] text-center bg-white py-5 px-2 border-2 rounded-md">
          <h2 className="lora ">Are you sure to remove this product?</h2>
          <button
            onClick={handleDelete}
            className="mt-5 border-2 hover:bg-gray-200 py-1.5 px-3">Remove</button>
          <button
            className="ml-5 border-2 hover:bg-gray-200 py-1.5 px-3"
            onClick={(e) => {
              e.preventDefault();
              setIsDeleteOn(false);
            }}>Cancel</button>
        </div>}
    </>
  )
}

export default ProductInfo;