import React, {  useState } from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
// import styles from '../../css/payments.module.css';
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

const Payment = () => {
    const navigate = useNavigate();
    // const cartItems = useSelector(state => state.cart);
    // console.log("cart", cartItems);
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
        // if (cartItems.length === 0) {
        //     alert("Please Add to Bag First");
        //     return navigate("/");
        // }
        // else if (query.cardnumber === '' || query.code === '' || query.monthday === '' || query.name === '') {
        //     return alert("Please Fill the All Details");
        // }
        alert('Your Payment Has successfully done');
        navigate("/");
    };

 

    //total price
    // const total_price = cartItems.reduce((acc, current) => {
    //     return acc + current.price;
    // }, 24);
    return (
        <div>
            <p>Select your payment method</p>
            <div>
                <div>
                    <img width="200px" src="https://th.bing.com/th/id/R.b6dfa6674e59c943dc7f912d173e6499?rik=oMtZKSuBEb%2frsg&riu=http%3a%2f%2fcdn1.tnwcdn.com%2fwp-content%2fblogs.dir%2f1%2ffiles%2f2014%2f04%2fScreen-Shot-2014-04-30-at-18.18.55.png&ehk=cVVxkeWChurvuyiOf7RHsKoXDoJu1bX0abtn0%2fOqI7I%3d&risl=&pid=ImgRaw&r=0" alt="paypal" />
                </div>
                <div>
                    <p ><AiOutlineCreditCard />Debit or credit card</p>
                </div>
            </div>

            <div>
                <div>
                    <p>CARD DETAILS</p>
                    <br />
                    <div>
                        <p>Cardholder name</p>
                        <input type="text" name='name' onChange={ handleChange } />
                    </div>

                    <div>
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
                        <p>Security code</p>
                        <input type="text" name='code' onChange={ handleChange } />
                    </div>

                    <div>
                        <input type="checkbox" />
                        <p>Save payment details</p>
                    </div>


                </div>

                <div>
                    <div>
                        <h3>Summary</h3>
                        <div>
                            <p>subtotal</p>
                            {/* <p>{ `${total_price - 24}.00` }</p> */}
                        </div>
                        <div>
                            <p>Delivery</p>
                            {/* <p>{ total_price !== 24 ? `$24.0` : "00.00" }</p> */}
                        </div>
                        <hr />
                        <div>
                            <p>Total</p>
                            <p>
                                {/* USD ${ total_price == 24 ? `00` : total_price }.00 */}
                                <br />
                                Import duties included
                            </p>
                        </div>
                        <button onClick={ handleContinue }>
                            Save and Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
