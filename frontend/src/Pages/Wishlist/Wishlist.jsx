import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Badge,
  List,
  ListIcon,
  ListItem,
  Button,
  Select,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://nodejs-fake-api.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);
  return (
    <>
      <div>
        <Heading
          color={useColorModeValue("gray.700", "black")}
          fontSize={"4xl"}
          fontFamily={"sans-serif"}
        >
          Wishlist
        </Heading>
        <h3>{data.length} PICIES</h3>
        <br />
        <Heading
          color={useColorModeValue("black")}
          fontSize={"1xl"}
          fontFamily={"sans-serif"}
        >
          Keep track of your favorite pieces no matter the browser or
          <br />
          device, all in one place
        </Heading>
      </div>
      <div>
        {/* {data.length>0 && data.map((ele,i)=>{
            return <div key={i}>
                <div><img src={ele.thumbnail}/></div>
                <div></div>
                <div></div>
            </div>
        })} */}
        {/* <Center py={6}> */}
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              layout={"fill"}
            />
          </Box>
          <Box pr={-10}>
            <Text>New Season</Text>
            <Text>Name</Text>
            <Text>Title</Text>
            <br/>
            <Text>$1,352</Text>
          </Box>

          <Box>
            <Select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <Button>
              Add to Bag
            </Button>
          </Box>
        </Box>
        {/* </Center> */}
      </div>
    </>
  );
};

export default Wishlist;
