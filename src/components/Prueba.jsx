import React, { useEffect, useState } from "react";

function Prueba() {

  const [admins, setAdmins] = useState({
    loading:true,
    data:[]
  });
  useEffect(()=>{
    const getAdmins= async () =>{
        const response = await fetch("https://mvcproject-plantnursery.herokuapp.com/api/admin/",{
          method:"GET"
        })
        const data = await response.json();

        setAdmins({
          loading:false,
          data
        });
    }
    getAdmins();
  },[])
  return (
    <>
    <h1 className="ml-7 mt-7">Admin Credentials</h1>
    <table className="border-separate boder-slate-400 ml-8 mt-8 w-1/2">
      <thead>
        <tr>
          <th className="border border-slate-300 mr-">id</th>
          <th className="border border-slate-300">Username</th>
          <th className="border border-slate-300">Password</th>
        </tr>
      </thead>
      <tbody>
    {
    admins.loading
    ?"Cargando datos..."
    :admins.data?admins.data.map((admin, key)=>{
      return ( 
        <tr key={key}>
          <td className="border border-slate-300"> {admin.id}</td>
          <td className="border border-slate-300"> {admin.username}</td>
          <td className="border border-slate-300">{admin.password}</td>
        </tr>
      )
    })
  :"No hay datos :("}
      </tbody>
    </table>
    </>
  )
}

export default Prueba;