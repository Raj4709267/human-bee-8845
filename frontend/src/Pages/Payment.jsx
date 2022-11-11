import React, {  useState } from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import styles from '../styles/payment.module.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Payment = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((store) => store.cartReducer.cart);
    console.log("cart", cartItems);
    const [ query, setQuery ] = useState({
        name: '',
        cardnumber: '',
        monthday: '',
        code: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuery({ [ name ]: value });
    };

    const handleContinue = () => {
        if (cartItems.length === 0) {
            alert("Please Add to Bag First");
            return navigate("/");
        }
        else if (query.cardnumber === '' || query.code === '' || query.monthday === '' || query.name === '') {
            return alert("Please Fill the All Details");
        }
        alert('Your Payment Has successfully done');
        navigate("/");
    };

 

    // total price
    const total_prize = cartItems.reduce((acc, current) => {
        return acc + current.prize;
    }, 24);
    return (
        <div className={ styles.paymentContainer }>
            <p>Select your payment method</p>
            <div className={ styles.PaymentOptions }>
                <div>
                    <img src="http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2014/04/Screen-Shot-2014-04-30-at-18.18.55.png" alt="paypal" />
                </div>
                <div>
                    <p ><AiOutlineCreditCard />Debit or credit card</p>
                </div>
            </div>

            <div className={ styles.PaymentBox }>
                <div className={ styles.cardForm }>
                    <p>CARD DETAILS</p>
                    <br />
                    <div>
                        <p>Cardholder name</p>
                        <input type="text" name='name' onChange={ handleChange } />
                    </div>

                    <div className={ styles.cardNum_ExpDD }>
                        <div>
                            <p>Card number</p>
                            <input type="text" name='cardnumber' onChange={ handleChange } />
                        </div>
                        <div>
                            <p>Expiration date</p>
                            <input type="text" placeholder='MM/YY' name='monthday' onChange={ handleChange } />
                        </div>
                    </div>

                    <div>
                        <p>Security Code</p>
                        <input type="text" name='code' onChange={ handleChange } />
                    </div>

                    <div>
                        <input type="checkbox" />
                        <p>Save payment details</p>
                    </div>


                </div>

                <div>
                    <div className={ styles.Summary }>
                        <h3>Summary</h3>
                        <div className={ styles.amountDiv }>
                            <p>subtotal</p>
                            <p>{ `${total_prize - 24}.00` }</p>
                        </div>
                        <div className={ styles.amountDiv }>
                            <p>Delivery</p>
                            <p>{ total_prize !== 24 ? `$24.0` : "00.00" }</p>
                        </div>
                        <hr />
                        <div className={ styles.amountDiv }>
                            <p>Total</p>
                            <p>
                                USD ${ total_prize == 24 ? `00` : total_prize }.00
                                <br />
                                Import duties included
                            </p>
                        </div>
                        <button onClick={ handleContinue } className={ styles.checkoutBtn }>
                            Save and Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
