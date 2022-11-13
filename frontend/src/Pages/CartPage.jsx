import React, { useEffect, useState } from "react";
import styles from "../styles/cartpage.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeDataFromCart } from "../Redux/Cart/action";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogOverlay,
  Box,
  Img,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
// import { removeDataFromCart } from "../../Redux/action";
import { IoCloseOutline } from "react-icons/io5";
export const CartPage = () => {
  const navigate = useNavigate();
  const loadingItem = new Array(12).fill(0);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [empty, setEmpty] = useState(false);

  const toast = useToast();

  const cartItems = useSelector((store) => store.cartReducer.cart);
  console.log("cart", cartItems);

  const dispatch = useDispatch();

  const handleCheckoutCart = () => {
    if (cartItems.length === 0) {
      alert("Please Add to Bag First");
      return navigate("/");
    }
    navigate("/shippingaddress");
  };

  const total_prize = cartItems.reduce((acc, current) => {
    return acc + current.prize;
  }, 24);
  console.log("total", total_prize);

  const { token } = useSelector((store) => store.AuthReducer.userData);

  const handleDel = (id) => {
    onOpen();
    console.log(id);
    return axios
      .delete(`https://fashionclub.onrender.com/cart/delete/${id}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("delete" + err);
      })
      .then(() =>
        getCart().then(() => {
          onClose();
          toast({
            title: "Item Removed Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        })
      );
  };

  function getCart() {
    setEmpty(false)
    return axios
      .get("https://fashionclub.onrender.com/cart/get", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addToCart(res.data));
        setIsLoading(false);
        setEmpty(true)
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
      });
  }

  useEffect(() => {
    if (cartItems.length == 0) {
      setIsLoading(true);
    }
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
                      <IoCloseOutline
                        className={styles.delBtn}
                        onClick={() => {
                          handleDel(data._id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

          {isLoading &&
            loadingItem.map((el, index) => (
              <Box key={index + 1} p="1rem">
                <Skeleton w="100%" h="200px"></Skeleton>
                <SkeletonText w="100%"></SkeletonText>
              </Box>
            ))}
          <Text margin={"auto"} fontSize="30px" textAlign="center">
            {cartItems.length == 0 && empty && "Your Bag is empty"}
          </Text>
          {cartItems.length == 0 && empty && (
        <Img
          margin={"auto"}
          height="200px"
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
          alt="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
        />
      )}
          <Text margin={"auto"} marginBottom="50px" fontSize="16px" textAlign="center">
            {cartItems.length == 0 && empty && "Please add some Products"}
          </Text>
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
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <Spinner
              color="white"
              size={"lg"}
              marginLeft="50vw"
              marginTop="50vh"
            />
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </div>
  );
};

export default CartPage;
