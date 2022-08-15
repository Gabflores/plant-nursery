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
  
  const handleDelete = (e)=>{
    e.preventDefault();
    //eliminar
    console.log("Eliminar producto",id)
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
          ? <div className="flex pt-32 flex-col ">
            <div className="mx-auto min-w-[80%] ">
              <div className="">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/products");
                  }}
                  className="cursor-pointer border-2 py-1.5 px-3 rounded-md hover:bg-gray-200  hover:text-white"
                ><img className="w-4" src={backArrow} alt="back" /></button>
              </div>
              <div className="flex ">
                <div className="w-1/2 h-full max-h-[50vh]">
                  <img className="mx-auto max-w-[75%] min-w-[50%] max-h-screen" src={productData.data.image} alt="product" />
                </div>
                <div className="w-1/2 pt-8">
                  <h2 className="lora font-medium text-2xl">{productData.data.name}</h2>
                  <p className="belleza text-xl">Category: {productData.data.category.name}</p>
                  <h3 className="belleza w-[80%] text-lg mt-3">{productData.data.description}</h3>
                  <p className="belleza text-lg">weight: {productData.data.weight}</p>
                  <p className="belleza text-lg">price: ${productData.data.price}</p>
                  <p className="belleza text-lg">stock: {productData.data.stock}</p>
                  {role === "Admin"
                    ?
                    <div className="flex">
                      <button
                        className="py-1.5 px-3 border-2"
                        onClick={handleEdit}>Edit</button>
                      <button
                        className="py-1.5 px-3 border-2"
                        onClick={handleDelete}>Delete</button>
                    </div>
                    : <div className="flex mt-5">
                      <div className="flex">
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
                        className="ml-5 px-5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium"
                        onClick={handleAddToCart}>Add to cart</button>
                    </div>

                  }
                </div>
              </div>
            </div>
          </div>
          : <h1>No Data available :c</h1>}
    </>
  )
}

export default ProductInfo;