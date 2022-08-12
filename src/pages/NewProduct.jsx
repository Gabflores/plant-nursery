import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';



function NewProduct() {

  const navigate = useNavigate();
  const [loadedImage, setloadedImage] = useState(false);
  const [imageSelect, setImageSelect] = useState("");

  const [productData, setProductData] = useState({
    sku: null,
    name: null,
    price: null,
    weight: null,
    description: null,
    image: null,
    category: {
      name: null
    },
    create_date: null,
    stock: null
  })

  const handleUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "PlantNurseryProject");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/plant-nursery/image/upload",
      {

        method: "POST",
        body: data
      }
    )
    const file = await res.json();
    console.log(file.secure_url);
    setImageSelect(file.secure_url);
    setloadedImage(true);
    setProductData({
      ...productData,
      image: file.secure_url
    })
  }

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/api/product/save", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    });
    const resData = await res.json();
    if (resData.ok) {
      navigate("/products");
    } else {
      console.log("error")
    }
  }

  return (
    <>
      <Header />
      <div className='flex flex-col justify-around items-start py-32'>
        <div>
          <h2>Create a new product</h2>
        </div>
        <div className='flex flex-row items-center w-2/3 mt-3'>
          <label htmlFor="sku" className=" block text-sm font-medium text-gray-900 w-2/5 text-right">SKU :</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="sku"
            name="sku"
            type="text"
            value={productData.sku || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                sku: e.target.value
              })
            }} />
        </div>
        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Name :</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="name"
            name="name"
            type="text"
            value={productData.name || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                name: e.target.value
              })
            }} />
        </div>
        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="descr" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Description :</label>
          <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7 h-40"
            placeholder="description"
            name="descr"
            type="text"
            value={productData.description || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                description: e.target.value
              })
            }} />
        </div>
        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="price" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Price(soles) :</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="price"
            name="price"
            type="text"
            value={productData.price || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                price: e.target.value
              })
            }} />
        </div>
        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Weight :</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="weight"
            name="weight"
            type="text"
            value={productData.weight || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                weight: e.target.value
              })
            }} />
        </div>
        <div className='flex flex-row  items-center w-2/3 mt-7'>
          <label htmlFor="image" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Image :</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7" placeholder="image" name="image" type="file"
            onChange={handleUpload} ></input>
          {loadedImage && <img className="max-w-[15vw]" src={imageSelect} alt="img" />}
        </div>
        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="create_date" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Creation date :</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="Creation date"
            name="create_date"
            type="date"
            value={productData.create_date || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                create_date: e.target.value
              })
            }} />
        </div>

        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="category" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Category :</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="category"
            name="category"
            type="text"
            value={productData.category.name || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                category: { name: e.target.value }
              })
            }}>
            <option value="Plantas">Plantas</option>
            <option value="Plantulas">Plantulas</option>
            <option value="Flores">Flores</option>
            <option value="Sustratos">Sustratos</option>
            <option value="Herramientas">Herramientas</option>
          </select>
        </div>
        <div className='flex flex-row items-center w-2/3 mt-7'>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-900 w-2/5 text-right">Stock</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-7"
            placeholder="stock"
            name="stock"
            type="number"
            value={productData.stock || ""}
            onChange={(e) => {
              setProductData({
                ...productData,
                stock: e.target.value
              })
            }} />
        </div>


        <button onClick={handleSubmit} className="self-center mt-12 border-2 bg-black text-white py-1.5 px-3 rounded-md">Guardar</button>
      </div>
    </>
  )
}

export default NewProduct;