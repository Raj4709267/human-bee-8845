import React, { useEffect, useState } from "react";
import styles from "../styles/cartpage.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeDataFromCart } from "../Redux/Cart/action";
import axios from "axios";
// import { removeDataFromCart } from "../../Redux/action";

export const CartPage = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cartReducer.cart);
  console.log("cart", cartItems);

  const dispatch = useDispatch();

  const handleDel = (id) => {
    console.log("id", id);
    dispatch(removeDataFromCart(id));
  };

  const handleCheckoutCart = () => {
    if (cartItems.length === 0) {
      alert("Please Add to Bag First");
      return navigate("/");
    }
    navigate("/shippingaddress");
  };

  // const handleContinueShopping = () => {
  //     navigate("/product");
  // };
  // const total_price = 0
  //     total price
  const total_prize = cartItems.reduce((acc, current) => {
    return acc + current.prize;
  }, 24);
  console.log("total", total_prize);

  // const deleteCart=({id})=>{
  //   return axios
  //   .then()
  //   .catch()
  //   .then(()=>getCart())
  // }

  function getCart() {
    axios
      .get("http://localhost:8080/product/mens")
      .then((res) => {
        dispatch(addToCart(res.data.product));
        console.log(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className={styles.main}>
      <h2 className={styles.header2}>SHOPPING BAG</h2>
      <div className={styles.header3}>Continue Shopping</div>
      <div className={styles.header}>
        <div className={styles.headerDivs}></div>
      </div>

      <div className={styles.cartContainer}>
        <div className={styles.cartContainer2}>
          {cartItems.length > 0 &&
            cartItems.map((data, index) => {
              return (
                <div key={data._id} className={styles.cartProd}>
                  <div className={styles.imageDiv}>
                    <img src={data.image} alt="" />
                  </div>
                  {/* <div className={styles.carProd2}> */}
                    <div className={styles.titleDesc}>
                      <div>
                      <h3 className={styles}>{data.name}</h3>
                      <h3 className={styles}>{data.title}</h3>
                      <h3 className={styles}>{`FARFETCH ID: ${data._id}`}</h3>
                      </div>

                      {/* <div>Exclusive</div> */}
                    {/* </div> */}

                    <div className={styles.tutor}>
                      <h3 className={styles}>$ {data.prize}</h3>
                      <div>(Import duties included)</div>
                    </div>
                    <div>
                      Size
                      <p className={styles}>{"M"}</p>
                      <div>
                        Quantity
                        <div className={styles.quantity}>
                          <select>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>
                        </div>
                        <br />
                        <a className={styles.wishlist} href="#">
                          <AiOutlineHeart /> Add to wishlist{" "}
                        </a>
                      </div>
                    </div>
                    <div>
                      <TiDeleteOutline
                        className={styles.delBtn}
                        onClick={() => {
                          handleDel();
                        }}
                      />{" "}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.Summary}>
          <h3>Summary</h3>
          <div className={styles.pymtDiv}>
            <p>subtotal</p>
            <p>{`$ ${total_prize - 24}.00`}</p>
          </div>
          <div className={styles.pymtDiv}>
            <p>Delivery</p>
            <p>{total_prize !== 24 ? `$24.0` : "00.00"}</p>
          </div>
          <hr />
          <div className={styles.pymtDiv}>
            <p>Total</p>
            <p>
              USD ${total_prize === 24 ? `00` : total_prize}.00
              <br />
              Import duties included
            </p>
          </div>
          <button onClick={handleCheckoutCart} className={styles.checkoutBtn}>
            Go To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
