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
  GridItem,
  Grid,
  SimpleGrid,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import ImagePointer from "./ImagePointer";
import { useNavigate } from "react-router-dom";
const local = localStorage.getItem("fashionClub_userData");
const Wishlist = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.AuthReducer);
  const [isloading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    axios
      .get("https://fashionclub.onrender.com/wishlist/get", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
          userId: userData.userId,
        },
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const sendTobag = (id) => {
    setIsLoading(true);

    axios
      .post(
        "https://fashionclub.onrender.com/cart/add",
        { productId: id },
        {
          headers: {
            authorization: `Bear ${userData.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast({
          title: "Added to Cart.",
          description:
            "Your Item is Added in Cart You Can Check now by clicking to cart Icon.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Item already added to Cart",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  const del_wishlist = (id) => {
    return axios
      .delete(`https://fashionclub.onrender.com/wishlist/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) =>
        toast({
          title: "Deleted Item",
          status: "success",
          duration: 1000,
          isClosable: true,
        })
      )
      .catch((err) => console.log(err))
      .then(() => getData());
  };


  useEffect(() => {
    getData();
    console.log("mt", data);
  }, []);
  return (
    <>
      <Box padding="2% 5% 5% 5%" align="center">
        <Heading fontSize={"4xl"}>Wishlist</Heading>
        <h3>{data.length} PICIES</h3>
        <Text fontFamily={"sans-serif"}>
          Keep track of your favorite pieces no matter the browser or device,
          all in one place
        </Text>
      </Box>
      <div>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={"3%"} padding="0 5% 5% 5%">
          {data.length > 0 &&
            data.map((ele, i) => {
              return (
                <GridItem
                  boxShadow="inner"
                  rounded="md"
                  bg="white"
                  width="90%"
                  margin="auto"
                  key={i}
                >
                  <Button
                    colorScheme="teal"
                    variant="link"
                    position={"absolute"}
                    textAlign="right"
                    fontSize="20px"
                    color={"black"}
                    onClick={() => del_wishlist(ele._id)}
                  >
                    {isloading ? <Spinner /> : <CloseIcon w={4} h={4} />}
                  </Button>
                  <Image src={ele.image[0]} />
                  <div style={{ textAlign: "left" }}>
                    {/* <Button className={st.crs_btn}>X</Button> */}
                    <Text>New Season-2</Text>

                    <Text as={"b"}>{ele.name}</Text>

                    <Text fontSize={"sm"}>{ele.title}</Text>

                    <Text>{ele.prize}</Text>

                    <Select
                      placeholder="Select Size"
                      py={2}
                      size={["md", "sm", "xs"]}
                      width="100%"
                      borderColor="black.500"
                    >
                      <option value="option1">{}</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>

                    <Button
                      width="100%"
                      variant="outline"
                      onClick={() => sendTobag(ele._id)}
                    >
                      <Text>Add to Bag</Text>
                    </Button>
                  </div>
                </GridItem>
              );
            })}
        </SimpleGrid>
      </div>
    </>
  );
};

export default Wishlist;
