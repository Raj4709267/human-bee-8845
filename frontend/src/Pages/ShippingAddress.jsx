import styles from "../styles/address.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { Address } from "../Redux/Cart/action";
import { fetchAddress } from "../Redux/Add/action";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";

const ShippingAddress = () => {
  const navigate = useNavigate();



  const dispatch = useDispatch();

  const [address, addAddress] = useState({
    firstname: "",
    lastname: "",
    country: "",
    pincode: "",
    address: "",
    phone: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    addAddress({ ...address, [name]: value });
  };

  const handleAddress = () => {
      console.log("address", address)
      fetch("http://localhost:8080/address", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(address),
      })
      .then(() => {
              dispatch(fetchAddress());
          });
      // window.location.reload(true);
  };
  
  useEffect(() => {
      dispatch(fetchAddress());
  }, [])

  const cartItems = useSelector((store) => store.cartReducer.cart);
  console.log("cart", cartItems);

  const total_prize = cartItems.reduce((acc, current) => {
    return acc + current.prize;
  }, 24);
  console.log("total",total_prize);

  const handleContinue = () => {
    if (cartItems.length === 0) {
      alert("Please Add to Cart First");
      return navigate("/");
    }
    handleAddress();
    navigate("/payment");
  };
  return (
    <div className={styles.CheckoutContainer}>
      <div className={styles.CheckoutBox}>
        <div className={styles.ShippingAddress}>
          <div>
            <h3 className={styles.headers}>Add shipping address</h3>
            <p>* Required fields</p>
          </div>
          <form className={styles.addForm}>
            <div className={styles.flexInput}>
              <div>
                <div>First Name</div>
                <input className={styles.form1} type="text" name="firstName" onChange={handleChange} />
              </div>
              <div>
                <div>Last Name</div>
                <input className={styles.form1} type="text" name="lastName" onChange={handleChange} />
              </div>
            </div>

            <div>Country / region *</div>
            <select name="country" id="" onChange={handleChange}>
              <option value="India">India(USD$)</option>
              <option value="USA">USA(USD$)</option>
              <option value="ITALY">ITALY(USD$)</option>
              <option value="UK">UK(USD$)</option>
              <option value="SPAIN">SPAIN(USD$)</option>
            </select>

            <div>Address</div>
            <input className={styles.form1} type="text" name="address" onChange={handleChange} />
            <input className={styles.form1} type="text" name="address" onChange={handleChange} />

            <div className={styles.flexInput}>
              <div>
                <div>City *</div>
                <input className={styles.form1} type="text" onChange={handleChange} name="city" />
              </div>
              <div>
                <div>State</div>
                <input className={styles.form1} type="text" name="state" onChange={handleChange} />
              </div>
            </div>

            <div className={styles.flexInput}>
              <div>
                <div>Postal or zip code *</div>
                <input
                  type="text"
                  name="pincode"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  onChange={handleChange}
                  className={styles.form1}
                />
              </div>
              <div>
                <div>Phone *</div>
                <input className={styles.form1} type="tel" name="phone" onChange={handleChange} />
              </div>
            </div>

            <div className={styles.flexCheckbox}>
              <div>
                <input type="checkbox" checked="checked" />
              </div>
              <div>
                <div>Use as billing address</div>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.Summary}>
          <h3>Summary</h3>
          <div className={styles.pymtDiv}>
            <p>subtotal</p>
            <p>{`${total_prize - 24}.00`}</p>
          </div>
          <div className={styles.pymtDiv}>
            <p>Delivery</p>

            <p>{total_prize !== 24 ? `$24.0` : "00.00"}</p>
          </div>
          <hr />
          <div className={styles.pymtDiv}>
            <p>Total</p>
            <p>
              USD ${total_prize == 24 ? `00` : total_prize}.00
              <br />
              Import duties included
            </p>
          </div>
          <button onClick={handleContinue} className={styles.checkoutBtn}>Save and Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
