import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../Components/SingleProduct/SingleProduct'
import CartPage from '../Pages/CartPage'
import Error from '../Pages/Error'
import Homepage from '../Pages/Homepage'
import Payment from '../Pages/Payment'
import Review from '../Pages/Review'
import ShippingAddress from '../Pages/ShippingAddress'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/shippingaddress" element={<ShippingAddress/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes