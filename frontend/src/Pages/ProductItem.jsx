import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const hanldeClick = () => {
    setToggle(!toggle);
    // navigate("/singleproduct", { replace: true });
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
        />
        {toggle ? (
          <Box position='absolute' top={5}>
            <AiFillHeart size="1.3rem" />
          </Box>
        ) : (
          <AiOutlineHeart size="1.3rem" />
        )}
      </Box>

      <Box p="1rem">
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
