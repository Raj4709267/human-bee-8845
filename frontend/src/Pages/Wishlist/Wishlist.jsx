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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

import st from "./wishlist.module.css"

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
          as={"b"}
          fontSize={"4xl"}
          fontFamily={"sans-serif"}
        >
          Wishlist
        </Heading>
        <h3>{data.length} PICIES</h3>
        <Text
          as={"samp"}
          fontSize={"sm"}
          fontFamily={"sans-serif"}
        >
          Keep track of your favorite pieces no matter the browser or
          <br />
          device, all in one place
        </Text>
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
        <Grid templateColumns='repeat(4, 1fr)' gap={3} pl={130}  py={15}>
 <GridItem w='60%' boxShadow='inner' rounded='md' bg='white' >
    <Image src="https://bit.ly/dan-abramov"/>
    <div style={{textAlign:"left"}}>
      <Text as={"samp"}>New Season</Text>
      <br/>
      <Text as={"b"}>Mônot</Text>
      <br/>
      <Text as={"samp"}>denim corset top</Text>
      <br/>
      <p/>
      <Text as={"abbr"}>$1,530</Text>
      <br/>
      <Select placeholder='Select Size' py={2} size="md" w="90%"  borderColor='black.500'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<br/>
<button className={st.bt}>
 <Text as={'samp'}>Add to Bag</Text>
</button>
      </div>
      
  </GridItem>
  <GridItem w='60%' boxShadow='inner' rounded='md' bg='white' >
    <Image src="https://bit.ly/dan-abramov"/>
    <div style={{textAlign:"left"}}>
      <Text as={"samp"}>New Season</Text>
      <br/>
      <Text as={"b"}>Mônot</Text>
      <br/>
      <Text as={"samp"}>denim corset top</Text>
      <br/>
      <p/>
      <Text as={"abbr"}>$1,530</Text>
      <br/>
      <Select placeholder='Select Size' py={2} size="md" w="90%"  borderColor='black.500'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<br/>
<button className={st.bt}>
 <Text as={'samp'}>Add to Bag</Text>
</button>
      </div>
      
  </GridItem>
  <GridItem w='60%' boxShadow='inner' rounded='md' bg='white' >
    <Image src="https://bit.ly/dan-abramov"/>
    <div style={{textAlign:"left"}}>
      <Text as={"samp"}>New Season</Text>
      <br/>
      <Text as={"b"}>Mônot</Text>
      <br/>
      <Text as={"samp"}>denim corset top</Text>
      <br/>
      <p/>
      <Text as={"abbr"}>$1,530</Text>
      <br/>
      <Select placeholder='Select Size' py={2} size="md" w="90%"  borderColor='black.500'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<br/>
<button className={st.bt}>
 <Text as={'samp'}>Add to Bag</Text>
</button>
      </div>
      
  </GridItem>
  <GridItem w='60%' boxShadow='inner' rounded='md' bg='white' >
    <Image src="https://bit.ly/dan-abramov"/>
    <div style={{textAlign:"left"}}>
      <Text as={"samp"}>New Season</Text>
      <br/>
      <Text as={"b"}>Mônot</Text>
      <br/>
      <Text as={"samp"}>denim corset top</Text>
      <br/>
      <p/>
      <Text as={"abbr"}>$1,530</Text>
      <br/>
      <Select placeholder='Select Size' size="md" py={2} w="90%"  borderColor='black.500'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
<br/>
<button className={st.bt}>
 <Text as={'samp'}>Add to Bag</Text>
</button>
      </div>
      
  </GridItem>
</Grid><br/>
      </div>
    </>
  );
};

export default Wishlist;
