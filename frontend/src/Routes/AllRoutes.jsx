import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Wishlist from '../Pages/Wishlist/Wishlist'
import Error from '../Pages/Error'
const AllRoutes = () => {
  return (
    <div>
<Routes>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path="/cart" element={<h1>CartPage</h1>}/>
  <Route path="*" element={<Error/>}/>
</Routes>
    </div>
  )
}

export default AllRoutes