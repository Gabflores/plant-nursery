import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { AppContext } from "../context/AppContext";
import registerImage from "../img/register.jpg";

function RegisterPage() {
  const { user, setUser } = useContext(AppContext);
  const [data, setData] = useState({
    user: {
      username: null,
      password: null
    },
    full_name: null,
    billing_address: null,
    default_shipping_address: null,
    country: null,
    phone: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log("Peticion enviada...");
    const response = await fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    if (!resData.ok) {
      console.log(resData.error);
    }
    else {
      setUser({
        ...user,
        autenticado: true,
        uid: resData.data
      })
      Navigate("/products")
    }

  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center h-screen" >
        <div className="flex flex-col items-end  pt-10 h-80 w-10/12 overflow-hidden relative z-0" style={{ backgroundImage: `url(${registerImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
          <h2 className="belleza text-6xl text-white mr-20 mt-24" >Bringing harmony</h2>
          <h2 className="belleza text-6xl text-white mr-20" >to your home</h2>
        </div>
        <div className='flex flex-col justify-around items-center w-11/12 mt-6'>
          <form className=' flex flex-col items-center w-2/3'>
            <div className='flex flex-row items-center w-2/3 mt-4'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Username: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="Username"
                value={data.user.username || ""}
                onChange={(e) => setData({
                  ...data,
                  user: {
                    username: e.target.value,
                    password: data.user.password
                  }

                })}
                type="text" />
            </div>
            <div className='flex flex-row items-center w-2/3 mt-5'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Password: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="*******"
                value={data.user.password || ""}
                type="password"
                onChange={(e) => setData({
                  ...data,
                  user: {
                    username: data.user.username,
                    password: e.target.value
                  }

                })}
              />
            </div>
            <div className='flex flex-row items-center w-2/3 mt-5'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Full Name: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="Name"
                value={data.full_name || ""}
                type="text"
                onChange={(e) => {
                  setData({ ...data, full_name: e.target.value })
                }} />
            </div>
            <div className='flex flex-row items-center w-2/3 mt-5'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Billing Adress: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="Billing Adress"
                value={data.billing_address || ""}
                type="text"
                onChange={(e) => {
                  setData({ ...data, billing_address: e.target.value })
                }}
              />
            </div>
            <div className='flex flex-row items-center w-2/3 mt-5'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Address: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="Adress"
                value={data.default_shipping_address || ""}
                type="text"
                onChange={(e) => {
                  setData({ ...data, default_shipping_address: e.target.value })
                }} />
            </div>
            <div className='flex flex-row items-center w-2/3 mt-5'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Country: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="Country"
                value={data.country || ""}
                type="text"
                onChange={(e) => {
                  setData({ ...data, country: e.target.value })
                }} />
            </div>
            <div className='flex flex-row items-center w-2/3 mt-5'>
              <label className=" block text-sm font-medium text-gray-900 w-1/5 text-right">Phone: </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
                placeholder="Phone"
                value={data.phone || ""}
                type="text"
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value })
                }} />
            </div>
            <button className=" mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="Submit" onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RegisterPage;