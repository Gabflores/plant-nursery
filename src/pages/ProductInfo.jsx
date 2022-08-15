import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { AppContext } from "../context/AppContext";

function ProductInfo() {

  let { id } = useParams();
  let navigate = useNavigate();
  const { cart, setCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState({
    loading: true,
    data: null
  })

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

  useEffect(() => {
    getProductData();
  }, [])


  return (
    <>
      <Header />
      {productData.loading
        ? <h1>Loading Data...</h1>
        : productData.data ? <div className="flex pt-32">
          <div><button onClick={(e) => {
            e.preventDefault();
            navigate("/products");
          }}>{"<"}</button></div>
          <div>
            <img src={productData.data.image} alt="product" />
          </div>
          <div>
            <h2>{productData.data.name}</h2>
            <p>Category: {productData.data.category.name}</p>
            <h3>{productData.data.description}</h3>
            <p>weight: {productData.data.weight}</p>
            <p>price: {productData.data.price}</p>
            <p>stock: {productData.data.stock}</p>
            <div>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setQuantity(quantity - 1);
                  }}
                  disabled={quantity === 1}
                >-</button>
                <p>{quantity}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setQuantity(quantity + 1);
                  }}
                  disabled={quantity === productData.data.stock}
                >+</button>
              </div>
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
          : <h1>No Data available :c</h1>}
    </>
  )
}

export default ProductInfo;