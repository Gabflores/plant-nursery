import React, { useState, useEffect } from "react";

function ProductInfo({ id }) {

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
  useEffect(() => {
    getProductData();
  }, [])
  return (
    <>

    </>
  )
}

export default ProductInfo;