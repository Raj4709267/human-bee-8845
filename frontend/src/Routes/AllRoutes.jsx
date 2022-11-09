import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../components/SingleProduct/SingleProduct'
import CartPage from '../Pages/CartPage'
import Error from '../Pages/Error'
import Homepage from '../Pages/Homepage'
import Kids from '../Pages/Kids'
import Mens from '../Pages/Mens'
import Payment from '../Pages/Payment'
import Review from '../Pages/Review'
import ShippingAddress from '../Pages/ShippingAddress'
import Womens from '../Pages/Womens'

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
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes