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
} from "@chakra-ui/react";
import { CheckIcon,CloseIcon } from "@chakra-ui/icons";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import ImagePointer from "./ImagePointer";
import st from "./wishlist.module.css";

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
      <Box padding="2% 5% 5% 5%" align="center">
        <Heading fontSize={"4xl"}>Wishlist</Heading>
        <h3>{data.length} PICIES</h3>
        <Text fontFamily={"sans-serif"}>
          Keep track of your favorite pieces no matter the browser or device,
          all in one place
        </Text>
      </Box>
      <div>
        {/* {data.length>0 && data.map((ele,i)=>{
            return <div key={i}>
                <div><img src={ele.thumbnail}/></div>
                <div></div>
                <div></div>
            </div>
        })} */}
        {/* <Center py={6}> */}
        <SimpleGrid columns={[1, 2, 3, 4]} gap={"3%"} padding="0 5% 5% 5%">
          <GridItem boxShadow="inner" rounded="md" bg="white">
            <Button colorScheme="teal" variant="link" position={"absolute"} textAlign="right" fontSize="20px" color={"black"}>
              <CloseIcon w={4} h={4}/>
            </Button>
            <Image src="https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40851734_300.jpg" />
            <div style={{ textAlign: "left" }}>
              {/* <Button className={st.crs_btn}>X</Button> */}
              <Text>New Season-2</Text>

              <Text as={"b"}>Golden grass</Text>

              <Text>denim corset top</Text>

              <Text>$1,530</Text>

              <Select
                placeholder="Select Size"
                py={2}
                size={["md", "sm", "xs"]}
                width="100%"
                borderColor="black.500"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

              <Button width="100%" variant="outline">
                <Text>Add to Bag</Text>
              </Button>
            </div>
          </GridItem>
          <GridItem boxShadow="inner" rounded="md" bg="white">
          <Button colorScheme="teal" variant="link" position={"absolute"} textAlign="right" fontSize="20px" color={"black"}>
          <CloseIcon w={4} h={4}/>
            </Button>
            <Image src="https://cdn-images.farfetch-contents.com/18/32/64/57/18326457_42274704_300.jpg" />
            <div style={{ textAlign: "left" }}>
              <Text>New Season</Text>

              <Text>Golden grass</Text>

              <Text>denim corset top</Text>

              <p />
              <Text as={"abbr"}>$1,530</Text>

              <Select
                placeholder="Select Size"
                py={2}
                size={["md", "sm", "xs"]}
                w="100%"
                borderColor="black.500"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

              <Button width="100%" variant="outline">
                <Text>Add to Bag</Text>
              </Button>
            </div>
          </GridItem>
          <GridItem boxShadow="inner" rounded="md" bg="white">
          <Button colorScheme="teal" variant="link" position={"absolute"} textAlign="right" fontSize="20px" color={"black"}>
          <CloseIcon w={4} h={4}/>
            </Button>
            <Image src="https://cdn-images.farfetch-contents.com/18/45/53/51/18455351_42264666_300.jpg" />
            <div style={{ textAlign: "left" }}>
              <Text>New Season</Text>

              <Text>Golden grass</Text>

              <Text>denim corset top</Text>

              <p />
              <Text as={"abbr"}>$1,530</Text>

              <Select
                placeholder="Select Size"
                py={2}
                size={["md", "sm", "xs"]}
                w="100%"
                borderColor="black.500"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

              <Button width="100%" variant="outline">
                <Text>Add to Bag</Text>
              </Button>
            </div>
          </GridItem>
          <GridItem boxShadow="inner" rounded="md" bg="white">
          <Button colorScheme="teal" variant="link" position={"absolute"} textAlign="right" fontSize="20px" color={"black"}>
          <CloseIcon w={4} h={4}/>
            </Button>
            <Image src="https://cdn-images.farfetch-contents.com/17/92/20/85/17922085_42197486_300.jpg" />
            <div style={{ textAlign: "left" }}>
              <Text>New Season</Text>

              <Text>Golden grass</Text>

              <Text>denim corset top</Text>

              <p />
              <Text as={"abbr"}>$1,530</Text>

              <Select
                placeholder="Select Size"
                size={["md", "sm", "xs"]}
                py={2}
                w="100%"
                borderColor="black.500"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>

              <Button width="100%" bg="white" variant="outline">
                <Text>Add to Bag</Text>
              </Button>
            </div>
          </GridItem>
        </SimpleGrid>
      </div>
    </>
  );
};

export default Wishlist;
