import React from "react";
import "./Login.css";
import loginImg from "../../img/img3.jpg";

function Login() {

    const[usernameInput,setUsernameInput]=useState("");
    const[passwordInput, setPasswordInput]=useState("");
   
    const handleInputName = (e) => {
        setUsernameInput(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPasswordInput(e.target.value);
    }

    return (
        <>
            <p>hello</p>
            <div className="flex justify-center items-center h-screen">
                  
                <div className="flex flex-col justify-center items-center  mr-10 w-1/4"> 
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="loginText text-5xl mb-5">Find your plant </h2>
                        <h3 className="loginText2 text-2xl mb-7">Beautify your space </h3>
                    </div>
                    <form className="w-full mt-7">
                        <div className="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="username" name="username" type="text" onChange={handleInputName} ></input>
                        </div>
                        <div className="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="password" name="password" type="text" onChange={handleInputPassword} ></input>                        
                        </div>
                        <div>
                            <p className="text-right text-sm text-gray-900">¿Forgot your password?</p>
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "></input>
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <button type="submit" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                        <p className=" text-gray-900 mt-7">Crear una cuenta nueva</p>
                    </form>

                </div>
                <div className="flex pt-10 h-auto overflow-hidden z-10 w-1/6  ml-10"> <img src={loginImg} alt="loginImage "/> </div>
                
            </div>
        </>

    )
}
export default Login;