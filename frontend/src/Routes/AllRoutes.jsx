import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import CartPage from "../Pages/CartPage";
import Error from "../Pages/Error";
import Homepage from "../Pages/Homepage";
import Kids from "../Pages/Kids";
import Mens from "../Pages/Mens";
import Payment from "../Pages/Payment";
import Profile from "../Pages/Profile";
import Review from "../Pages/Review";
import ShippingAddress from "../Pages/ShippingAddress";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Womens from "../Pages/Womens";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/shippingaddress"
          element={
            <PrivateRoute>
              <ShippingAddress />
            </PrivateRoute>
          }
        />
        <Route path="/review" element={<Review />} />
        <Route
          path="/singleproduct"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
