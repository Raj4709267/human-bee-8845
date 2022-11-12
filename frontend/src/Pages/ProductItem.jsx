import { Box, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { addSuccess, isError } = useSelector((store) => store.WishlistReducer);
  const { userData } = useSelector((store) => store.AuthReducer);
  const toast = useToast();

  const handleClick = () => {
    navigate(`/singleproduct/${item._id}`, { replace: true });
  };

  const addToWishlist = () => {
    setToggle(!toggle);
    dispatch(addToWishlist(item._id));

    if (addSuccess) {
      toast({
        title: "Product added to wishlist Successful.",
        description: "We have added this product to your wishlist.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else if (isError) {
      toast({
        title: "Product added to wishlist Unsuccessful.",
        description: "Can't able to add to wishlist.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      // border="1px solid red"
      cursor="pointer"
      backgroundColor="gray.50"
    >
      <Box>
        <Image
          position="relative"
          src={item.image[0]}
          onMouseEnter={(e) => (e.target.src = `${item.image[1]}`)}
          onMouseLeave={(e) => (e.target.src = `${item.image[0]}`)}
          transition="ease-in-out"
          objectFit="contain"
          onClick={handleClick}
        />
        {toggle ? (
          <AiFillHeart onClick={addToWishlist} size="1.3rem" />
        ) : (
          <AiOutlineHeart onClick={addToWishlist} size="1.3rem" />
        )}
      </Box>

      <Box onClick={handleClick} p="1rem">
        <Text fontWeight="bold">{item.name}</Text>
        <Text fontSize="0.9rem" fontWeight="400">
          {item.title}
        </Text>
      </Box>

      <Text p="0.8rem 1rem">{`$${item.prize}`}</Text>
    </Box>
  );
};

export default ProductItem;
