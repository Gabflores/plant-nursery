import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import { AppContext } from "../context/AppContext";

function Products() {

  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [role, setRole] = useState("");
  const [products, setProducts] = useState({
    loading: true,
    data: []
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

  const getProducts = async () => {
    const res = await fetch("http://localhost:8080/api/product/", {
      method: "GET"
    });
    const resData = await res.json();

    setProducts({
      loading: false,
      data: resData.data
    })
  }



  useEffect(() => {
    getRole();
    getProducts();
  }, [])

  return (
    <>
      <Header />
      <div className=" pt-32 px-12">
        <div className="flex items-center">
          <h2 className="text-xl lora font-medium ">Productos: </h2>
          {role === "Admin" && <div onClick={()=>{navigate("/products/add")}}className="text-center ml-5 cursor-pointer px-3 py-1.5 border-2 border-black rounded-md">+ Agregar Producto</div>}
        </div>
        <div className="flex flex-nowrap mt-5">

          {products.loading
            ? "Loading..."
            : !products.data.length
              ? "No data available :("
              : products.data.map((product, key) => {
                return <ProductCard key={key} imageUrl={product.imageUrl} name={product.name} price={product.price} id={product.id} />
              })}
        </div>
      </div>
    </>
  )
}

export default Products;
