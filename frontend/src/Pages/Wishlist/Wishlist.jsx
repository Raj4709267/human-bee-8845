import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Select,
  GridItem,
  SimpleGrid,
  useToast,
  Spinner,
  Skeleton,
  SkeletonText,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CloseIcon } from "@chakra-ui/icons";

// const local = localStorage.getItem("fashionClub_userData");
const Wishlist = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const { userData } = useSelector((store) => store.AuthReducer);
  const [isloading, setIsLoading] = useState(false);
  const loadingItem = new Array(12).fill(0);
  const [empty, setEmpty] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const getData = async () => {
    setEmpty(false);
    return axios
      .get("https://fashionclub.onrender.com/wishlist/get", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
          userId: userData.userId,
        },
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setEmpty(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const sendTobag = (id) => {
    onOpen();
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
        onClose();
        console.log(res);
        toast({
          title: "Added to Cart.",
          description: "Item Added",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        console.log(err);
        onClose();

        toast({
          title: "Already added",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        setIsLoading(false);
      });
  };

  const del_wishlist = (id) => {
    onOpen();
    return axios
      .delete(`https://fashionclub.onrender.com/wishlist/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err");
      })
      .then(() => {
        getData().then(() => {
          onClose();
          toast({
            title: "Item Deleted",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        });
      });
  };

  useEffect(() => {
    if (data.length == 0) {
      setIsLoading(true);
    }
    getData();
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
      <Text margin={"auto"} fontSize="30px" textAlign="center">
        {data.length == 0 && empty && "Your Wishlist is empty"}
      </Text>
      {data.length == 0 && empty && (
        <Img
          margin={"auto"}
          height="300px"
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
          alt="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
        />
      )}
      <Text margin={"auto"} fontSize="16px" textAlign="center">
        {data.length == 0 && empty && "Please add some Products"}
      </Text>
      <div>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={"2%"} padding="0 5% 5% 5%">
          {data.length > 0 &&
            data.map((ele, i) => {
              return (
                <GridItem
                  boxShadow="inner"
                  rounded="md"
                  bg="white"
                  width="80%"
                  margin="auto"
                  key={i}
                  marginTop="50px"
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
                    <CloseIcon w={4} h={4} />
                  </Button>
                  <Image src={ele.image[0]} />
                  <div style={{ textAlign: "left" }}>
                    {/* <Button className={st.crs_btn}>X</Button> */}
                    <Text>New Season-2</Text>

                    <Text as={"b"}>{ele.name}</Text>

                    <Text fontSize={"sm"}>{ele.title}</Text>

                    <Text>$ {ele.prize}</Text>

                    <Select
                      placeholder="Select Size"
                      py={2}
                      size={["md", "sm", "xs"]}
                      width="100%"
                      borderColor="black.500"
                    >
                      <option value="option1">{ele.size[0]}</option>
                      <option value="option2">{ele.size[1]}</option>
                      <option value="option3">{ele.size[2]}</option>
                      <option value="option3">{ele.size[3]}</option>
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

          {isloading &&
            loadingItem.map((el, index) => (
              <Box key={index + 1} p="1rem">
                <Skeleton w="100%" h="300px"></Skeleton>
                <SkeletonText w="100%"></SkeletonText>
              </Box>
            ))}
        </SimpleGrid>
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
    </>
  );
};

export default Wishlist;
