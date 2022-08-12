import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { AppContext } from "../context/AppContext";

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
      <form className="flex flex-col items-center w-1/2 mx-auto h-screen justify-center">
        <label>Username: </label>
        <input
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
        <label>Password: </label>
        <input
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

        <label>Full Name: </label>
        <input
          placeholder="Name"
          value={data.full_name || ""}
          type="text"
          onChange={(e) => {
            setData({ ...data, full_name: e.target.value })
          }} />
        <label>Billing Adress: </label>
        <input
          placeholder="Billing Adress"
          value={data.billing_address || ""}
          type="text"
          onChange={(e) => {
            setData({ ...data, billing_address: e.target.value })
          }}
        />
        <label>Address: </label>
        <input
          placeholder="Adress"
          value={data.default_shipping_address || ""}
          type="text"
          onChange={(e) => {
            setData({ ...data, default_shipping_address: e.target.value })
          }} />
        <label>Country: </label>
        <input
          placeholder="Country"
          value={data.country || ""}
          type="text"
          onChange={(e) => {
            setData({ ...data, country: e.target.value })
          }} />
        <label>Phone: </label>
        <input
          placeholder="Phone"
          value={data.phone || ""}
          type="text"
          onChange={(e) => {
            setData({ ...data, phone: e.target.value })
          }} />
        <button className="border-2 px-2 py2" type="Submit" onClick={handleSubmit}>Register</button>
      </form>
      <Footer />
    </>
  )
}

export default RegisterPage;