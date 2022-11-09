import React from 'react'
import {useState,useEffect} from 'react'
const Wishlist = () => {
    const [data,setData]=useState([])

    const getData=()=>{
      fetch("https://nodejs-fake-api.herokuapp.com/products")
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err))
    }
    useEffect(()=>{
      getData()
      console.log(data)
    },[])
  return (
    <>
    <div style={{fontFamily:"var(--typography-display-font-family)"}}>
        <h1>Wishlist</h1>
        <h3>{data.length} PICIES</h3>
        <br/>
    Keep track of your favorite pieces no matter the browser or
        <br/>device, all in one place
    </div>
    <div>
        {data.length>0 && data.map((ele,i)=>{
            return <div key={i}>
                <div><img src={ele.thumbnail}/></div>
                <div></div>
                <div></div>
            </div>
        })}
    </div>
    </>
  )
}

export default Wishlist