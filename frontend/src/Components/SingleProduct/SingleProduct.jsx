import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderData } from "./SliderData";
import { BiHeart,BiStar,BiDockTop,BiBandAid ,BiEnvelope,BiPhone} from "react-icons/bi";
import React from "react";

import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Select,
  Button,
  Flex,
  Link,
  Radio, RadioGroup,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ListItem,
  UnorderedList,
  Spacer,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import Style from "./SingleProduct.module.css";

const SingleProduct = () => {
  const [value, setValue] = React.useState('1')
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box w="90%" m="auto" display="flex" className={Style.main}>
        <Box border="1px solid black" w="65%" className={Style.main2}>
          {/* <SimpleGrid columns={[1, 1, 2]} spacing="10px" className={Style.sg}>
            <Box
              border="1px solid black"
              w="100%"
              height="500PX"
              className={Style.Box1}
            >
              <Image
                // boxSize="100%"
                height="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              border="1px solid black"
              w="100%"
              height="500px"
              className={Style.imgBox1}
            >
              <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              border="1px solid black"
              w="100%"
              height="500px"
              className={Style.imgBox1}
            >
              <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              border="1px solid black"
              w="100%"
              height="500px"
              className={Style.imgBox1}
            >
              <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
          </SimpleGrid> */}

          <div>
            <Slider {...settings} style={{ height: "450px" }}>
              {SliderData.map((el) => {
                return (
                  <div>
                    <img
                      style={{ height: "400px", margin: "auto" }}
                      src={el.img_url}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Box>
        <Box
          border="1px solid black"
          w="35%"
          height="600"
          className={Style.desc}
        >
          <Box textAlign="left" ml="10px">
            <Text>New Season</Text>
            <Text fontWeight="bold" fontSize="20px">
              Aeyde
            </Text>
            <Text>Ariel mid-calf cowboy boots</Text>

            <Text mt="40px" fontWeight="bold" fontSize="20px">
              $123
            </Text>
            <Text>Import duties included</Text>
            <Box mt="20px">
              <Select
                placeholder="Select Size"
                w="95%"
                size="lg"
                className={Style.select}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box mt="20px" className={Style.buttons}>
              <Button
                w="62%"
                mr="10px"
                colorScheme="teal"
                variant="solid"
                className={Style.btn1}
              >
                Add to Bag
              </Button>
              <Button
                w="30%"
                colorScheme="black"
                variant="outline"
                className={Style.btn2}
              >
                Wishlist
                <BiHeart size={"1.5em"} />
              </Button>
            </Box>
            <Text mt="30px">ESTIMATED DELIVERY</Text>
            <Text>Nov 11 - Nov 18</Text>
          </Box>
        </Box>
      </Box>
      <Box w="90%" m="auto" mt="50px">
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
                    Aeyde
                  </Text>
                  <Text>Ariel mid-calf cowboy boots</Text>
                  <Text mt="40px">Made in Italy</Text>
                  <Text fontWeight="bold" mt="30px" mb="10px">
                    Hightlights
                  </Text>
                  <UnorderedList>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                  </UnorderedList>
                </Box>
                <Box height="400px">
                  <Text fontWeight="bold" mb="10px">
                    Composition
                  </Text>
                  <Text>Sole: Rubber 100%, Calf Leather 100%</Text>
                  <Text>Lining: Calf Leather 100%</Text>
                  <Text>Outer: Calf Leather 100%</Text>

                  <Text fontWeight="bold" mt="30px" mb="10px">
                    Product IDs
                  </Text>
                  <Text>FARFETCH ID: 18033877</Text>
                  <Text>Brand style ID: A11ABTBUP75CH222968001</Text>
                </Box>
                <Box height="400px">
                  <Image
                    boxSize="100%"
                    src="https://bit.ly/dan-abramov"
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
                <Box height="400px">
                  <Image
                    boxSize="100%"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box >
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
                <Box  height="400px">
                <Text fontWeight="bold" mt="10px" mb="10px">
                    We've got your back
                  </Text>
                  <Text>Express: Nov 14 - Nov 21</Text>
                  <Text mt="20px">Sending from our marketplace seller in Netherlands</Text>
                </Box>
                <Box  height="400px">
                <Text fontWeight="bold" mt="30px" mb="10px">
                    Hightlights
                  </Text>
                  <UnorderedList>
                    <ListItem><Link>Orders & delivery</Link></ListItem>
                    <ListItem><Link>Returns & refunds</Link></ListItem>
                    <ListItem><Link>Duties & taxes</Link></ListItem>
                    <ListItem><Link>Climate Conscious delivery</Link></ListItem>
                  </UnorderedList>
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box textAlign="left" mt="40px">
        <Text fontSize="25px">Why FARFETCH?</Text>
       
<SimpleGrid columns={[1, null, 3]} spacing='40px' mt="20px">
  <Box >
  <BiBandAid fontSize="30px"/>
  <Text mt="15px" fontWeight="bold">The one that you want? We've got it.</Text>
  <Text>Shop over 100,000 styles</Text>
  </Box>
  <Box >
  <BiStar fontSize="30px" />
  <Text mt="15px" fontWeight="bold">4.7/5 stars and 25,000+ reviews</Text>
  <Text>You know you can trust us</Text>
  </Box>
  <Box >
  <BiDockTop fontSize="30px"/>
  <Text mt="15px" fontWeight="bold">Free global returns collection service</Text>
  <Text>Changed your mind? No problem</Text>
  </Box>
 
</SimpleGrid>
        </Box>
        <Box className={Style.img_Box}>
          <Image w="100%" h="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpKoGmRVSw67I-uDr_DdCXoaW-otx9SOJOg0qCVV0&s"/>
        </Box>
        <Box textAlign="left" mt="80px">
        <Text fontSize="25px">Contact us</Text>
       
            <SimpleGrid columns={[1, 2, 2]} spacing='40px' mt="20px" mb="20px">
  <Box border="1px solid black" p="10px">
  <BiEnvelope fontSize="30px"/>
  <Text mt="15px" >EMAIL US</Text>
  <Text mt="15px">Get in touch by email</Text>
  <Text mt="15px">customerservice@farfetch.com</Text>
  </Box>
  
  <Box border="1px solid black" p="10px">
  <BiPhone fontSize="30px" />
  <Text mt="15px" >ORDER BY PHONE</Text>
  <Text mt="15px">Available Monday to Friday, 08:00 - 21:00 EST</Text>
  <Text mt="15px">+1 646 791 3768</Text>
  </Box>
 
 
            </SimpleGrid>
        </Box>
        <Box className={Style.email_box}>
           <Text fontSize="40px" fontWeight="bold" lineHeight="50px"> GET 10% OFF YOUR FIRST ORDER</Text>
           <Text w="80%" margin="auto" mt="20px">Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox</Text>
           <Box className={Style.radio_box} mt="30px">
           <RadioGroup onChange={setValue} value={value} >
      <Stack direction='row'>
        <Radio value='1'>Womenswear</Radio>
        <Radio value='2'>Menswear</Radio>
        
      </Stack>
    </RadioGroup>
           </Box>
           <Text textAlign="left" fontSize="18px" mt="20px" ml="10px">GET UPDATES BY</Text>
           <Box  textAlign="left" border="1px solid red">
           <Checkbox defaultChecked >Checkbox</Checkbox>
           </Box>
           
        </Box>
      </Box>
    </>
  );
};

export default SingleProduct;
