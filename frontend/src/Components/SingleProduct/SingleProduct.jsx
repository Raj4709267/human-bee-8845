import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  BiHeart,
  BiStar,
  BiDockTop,
  BiBandAid,
  BiEnvelope,
  BiPhone,
} from "react-icons/bi";
import React, { useEffect, useState } from "react";

import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Select,
  Button,
  Flex,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ListItem,
  UnorderedList,
  Spacer,
  useToast,
  Spinner,
  AlertDialog,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Style from "./SingleProduct.module.css";
import Form from "../SingleProduct/Form";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const [item, setItem] = React.useState();
  const [loadingAddtoCart, setLoadingAddtoCart] = useState(false);
  const [loadingAddtoWishlist, setLoadingAddtoWishlist] = useState(false);

  const { productId } = useParams();
  const { userData, isAuth } = useSelector((store) => store.AuthReducer);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handelAddtoCart = () => {
    if (isAuth) {
      setLoadingAddtoCart(true);
      onOpen();
      axios
        .post(
          "https://fashionclub.onrender.com/cart/add",
          { productId: productId },
          {
            headers: {
              authorization: `Bear ${userData.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          onClose();
          toast({
            title: "Added to Cart.",
            description: "Item Added",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          setLoadingAddtoCart(false);
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
          setLoadingAddtoCart(false);
        });
    } else {
      toast({
        title: "Login in first",
        description: "Failed to add wishlist",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const handelAddtoWishlist = () => {
    if (isAuth) {
      setLoadingAddtoWishlist(true);
      onOpen();
      axios
        .post(
          "https://fashionclub.onrender.com/wishlist/add",
          { productId: productId },
          {
            headers: {
              authorization: `bearer ${userData.token}`,
            },
          }
        )
        .then((res) => {
          // console.log(res);
          setLoadingAddtoWishlist(false);
          onClose();
          toast({
            title: "Product added to wishlist",
            description: "We've added your product.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((er) => {
          // console.log(er);
          setLoadingAddtoWishlist(false);
          onClose();
          toast({
            title: "Product is already present.",
            description: "Failed to add wishlist",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        });
    } else {
      toast({
        title: "Login in first",
        description: "Failed to add wishlist",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    axios
      .get(`https://fashionclub.onrender.com/product/${productId}`)
      .then((res) => {
        setItem(res.data.product);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box
        w="90%"
        m="auto"
        display="flex"
        marginTop={"50px"}
        className={Style.main}
      >
        <Box w="65%" height="550px" className={Style.main2}>
          <div>
            <Slider {...settings} style={{ height: "480px" }}>
              {item?.image?.map((el) => {
                return (
                  <div>
                    <img
                      style={{ height: "450px", margin: "auto" }}
                      className={Style.slider_img}
                      src={el}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Box>
        <Box w="35%" className={Style.desc}>
          <Box textAlign="left" ml="10px">
            <Text>New Season</Text>
            <Text fontWeight="bold" fontSize="20px">
              {item?.name}
            </Text>
            <Text>{item?.title}</Text>

            <Text mt="40px" fontWeight="bold" fontSize="20px">
              ${item?.prize}
            </Text>
            <Text>Import duties included</Text>
            <Box mt="20px">
              <Select
                placeholder="Select Size"
                w="95%"
                size="lg"
                className={Style.select}
              >
                {item?.size?.map((el) => (
                  <option value={el}>{el}</option>
                ))}
              </Select>
            </Box>
            <Box mt="20px" className={Style.buttons}>
              <Button
                w="62%"
                mr="10px"
                backgroundColor={"black"}
                variant="solid"
                className={Style.btn1}
                color="white"
                _hover={{ backgroundColor: "#2f3337" }}
                onClick={handelAddtoCart}
              >
                Add to Bag
              </Button>
              <Button
                w="30%"
                colorScheme="black"
                variant="outline"
                className={Style.btn2}
                onClick={handelAddtoWishlist}
              >
                <Text marginRight={"5px"}>Wishlist</Text>
                <BiHeart size={"1.5em"} />
              </Button>
            </Box>
            <Text mt="30px">ESTIMATED DELIVERY</Text>
            <Text>Nov 11 - Nov 18</Text>
          </Box>
        </Box>
      </Box>
      <Box w="90%" m="auto" mt="50px" className={Style.tabBoxes}>
        <Tabs>
          <TabList>
            <Tab>THE DETAILS</Tab>
            <Tab>SIZE & FIT</Tab>
            <Tab>DELIVERY & RETURNS</Tab>
          </TabList>

          <TabPanels textAlign="left" fontSize="18px">
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box height="400px">
                  <Text>New Season</Text>
                  <Text fontWeight="bold" fontSize="20px">
                    {item?.name}
                  </Text>
                  <Text>{item?.title}</Text>
                  <Text mt="40px">Made in Italy</Text>
                  <Text fontWeight="bold" mt="30px" mb="10px">
                    Hightlights
                  </Text>
                  <UnorderedList>
                    {item?.heightlight.map((el) => (
                      <ListItem>{el}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
                <Box height="400px" className={Style.tabBox2}>
                  <Text fontWeight="bold" mb="10px">
                    Composition
                  </Text>
                  {item?.composition.map((el) => (
                    <Text>{el}</Text>
                  ))}

                  <Text fontWeight="bold" mt="30px" mb="10px">
                    Product IDs
                  </Text>
                  <Text>FARFETCH ID: {item?._id}</Text>
                  <Text>Brand style ID: A11ABTBUP75CH222968001</Text>
                </Box>
                <Box height="400px" className={Style.tabBox3}>
                  <Image
                    boxSize="100%"
                    src={item?.image[1]}
                    alt="Dan Abramov"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box height="400px">
                  <Text fontWeight="bold" mb="10px">
                    Measurements
                  </Text>
                  <Text>Product measurements for size (IT)</Text>
                  <Box w="80px" mt="20px" className={Style.sizeBox}>
                    40
                  </Box>
                  <Flex w="50%" mt="20px">
                    <Text>Circumference</Text>
                    <Spacer />
                    <Text>35 cm</Text>
                  </Flex>
                  <Flex w="50%">
                    <Text>Heel</Text>
                    <Spacer />
                    <Text>7.7 cm</Text>
                  </Flex>
                  <Flex w="50%">
                    <Text>Height</Text>
                    <Spacer />
                    <Text>30 cm</Text>
                  </Flex>
                </Box>
                <Spacer />
                <Box height="400px" className={Style.size_Box2}>
                  <Image
                    boxSize="100%"
                    src={item?.image[1]}
                    alt="Dan Abramov"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box>
                  <Text fontWeight="bold" mt="10px" mb="10px">
                    We've got your back
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      One delivery fee to most locations (check our Orders &
                      Delivery page)
                    </ListItem>
                    <ListItem>
                      Free returns within 14 days (excludes final sale,
                      customised pieces, face masks and certain beauty products
                      containing hazardous or flammable materials, like
                      fragrances and aerosols)
                    </ListItem>
                    <ListItem>
                      All our deliveries are climate conscious
                    </ListItem>
                  </UnorderedList>
                  <Text fontWeight="bold" mt="30px" mb="10px">
                    Import duties information
                  </Text>
                  <Text>
                    Let us handle the legwork. Delivery duties are included in
                    the item price when shipping to all EU countries (excluding
                    the Canary Islands), plus The United Kingdom, USA, Canada,
                    China Mainland, Australia, New Zealand, Puerto Rico,
                    Switzerland, Singapore, Republic Of Korea, Kuwait, Mexico,
                    Qatar, India, Norway, Saudi Arabia, Taiwan Region, Thailand,
                    U.A.E., Japan, Brazil, Isle of Man, San Marino, Colombia,
                    Chile, Argentina, Egypt, Lebanon, Hong Kong SAR and Bahrain.
                    All import duties are included in your order – the price you
                    see is the price you pay
                  </Text>
                </Box>
                <Box height="400px">
                  <Text fontWeight="bold" mt="10px" mb="10px">
                    We've got your back
                  </Text>
                  <Text>Express: Nov 14 - Nov 21</Text>
                  <Text mt="20px">
                    Sending from our marketplace seller in Netherlands
                  </Text>
                </Box>
                <Box height="400px" className={Style.returns_Box3}>
                  <Text fontWeight="bold" mt="30px" mb="10px">
                    Hightlights
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <Link>Orders & delivery</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Returns & refunds</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Duties & taxes</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Climate Conscious delivery</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box textAlign="left" mt="40px">
          <Text fontSize="25px">Why FARFETCH?</Text>

          <SimpleGrid columns={[1, null, 3]} spacing="40px" mt="20px">
            <Box>
              <BiBandAid fontSize="30px" />
              <Text mt="15px" fontWeight="bold">
                The one that you want? We've got it.
              </Text>
              <Text>Shop over 100,000 styles</Text>
            </Box>
            <Box>
              <BiStar fontSize="30px" />
              <Text mt="15px" fontWeight="bold">
                4.7/5 stars and 25,000+ reviews
              </Text>
              <Text>You know you can trust us</Text>
            </Box>
            <Box>
              <BiDockTop fontSize="30px" />
              <Text mt="15px" fontWeight="bold">
                Free global returns collection service
              </Text>
              <Text>Changed your mind? No problem</Text>
            </Box>
          </SimpleGrid>
        </Box>
        <Box className={Style.img_Box}>
          <Image
            w="100%"
            h="100%"
            src="https://modafirma.com/wp-content/uploads/2021/06/screativeref-1100l98270-2048x814.jpg"
          />
        </Box>
        <Box textAlign="left" mt="80px">
          <Text fontSize="25px">Contact us</Text>

          <SimpleGrid columns={[1, 2, 2]} spacing="40px" mt="20px" mb="20px">
            <Box border="1px solid black" p="10px">
              <BiEnvelope fontSize="30px" />
              <Text mt="15px">EMAIL US</Text>
              <Text mt="15px">Get in touch by email</Text>
              <Text mt="15px">customerservice@farfetch.com</Text>
            </Box>

            <Box border="1px solid black" p="10px">
              <BiPhone fontSize="30px" />
              <Text mt="15px">ORDER BY PHONE</Text>
              <Text mt="15px">
                Available Monday to Friday, 08:00 - 21:00 EST
              </Text>
              <Text mt="15px">+1 646 791 3768</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Form />
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

export default SingleProduct;
