import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Login.css";

function Login() {

    const navigate = useNavigate();
    const { user, setUser } = useContext(AppContext);
    const [errorMsg, setErrorMsg] = useState(false);
    const [loginData, setLoginData] = useState({
        username: null,
        password: null
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
        const resData = await res.json();
        if (!resData.ok) {
            setErrorMsg(true);
        } else {
            setUser({
                ...user,
                autenticado:true,
                uid:resData.data
            });
            navigate("/products")
        }
    }


    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-screen">

                <div className="flex flex-col justify-center items-center  mr-10 w-1/4">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="loginText text-5xl mb-5">Find your plant </h2>
                        <h3 className="loginText2 text-2xl mb-7">Beautify your space </h3>
                    </div>
                    <form className="w-full mt-7">
                        {errorMsg && <p className="text-red-500">Usuario y contraseña incorrecto</p>}
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="username"
                                name="username"
                                type="text"
                                onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }) }} ></input>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="password"
                                name="password"
                                type="text"
                                onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} ></input>
                        </div>
                        <div>
                            <p className="text-right text-sm text-gray-900">¿Forgot your password?</p>
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "></input>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={handleSubmit}
                        >Submit</button>
                        <p onClick={() => {
                            navigate("/register");
                        }} className=" text-gray-900 mt-7 cursor-pointer">Crear una cuenta nueva</p>
                    </form>

                </div>
                <div className="flex pt-10 h-auto overflow-hidden z-10 w-1/6  ml-10"> <img src="https://res.cloudinary.com/plant-nursery/image/upload/v1660172168/PlantNurseryProject/img3_jc68xw.jpg" alt="loginImage " /> </div>

            </div>
            <Footer />
        </>

    )
}
export default Login;