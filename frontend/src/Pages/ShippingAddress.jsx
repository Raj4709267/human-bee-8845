import React from 'react'

const ShippingAddress = () => {
  return (
    <div>
    <h2>Add Delivery Address</h2>
    <label>Firstname</label>
    <input type="text" placeholder='firstname'/>
    <label>Firstname</label>
    <input type="text" placeholder='lastname'/>
    <label>Country/Region</label>
    <select name="" id="">
        <option value=""></option>
    </select>
    <label>Address</label>
    <input type="text" placeholder='Address'/>
    <label>City</label>
    <input type="text" placeholder='City'/>
    <label>State</label>
    <input type="text" placeholder='State'/>
    <label>Postal or ZipCode</label>
    <input type="Number" placeholder='code'/>
    <label>Postal or ZipCode</label>
    <select name="" id="">
        <option value=""></option>
    </select>
    <label>Postal or ZipCode</label>
    <input type="Number" placeholder='code'/>
    <label>Phone</label>
    <input type="Number" placeholder='phone' />
    <input type="radio" />
    <label>Use as billing Address</label>





   
    </div>
  )
}

export default ShippingAddress
