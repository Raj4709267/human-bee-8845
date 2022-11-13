import React from "react";
import { Center, Text, Box, Image, Heading } from "@chakra-ui/react";
import {CheckIcon } from '@chakra-ui/icons'
const Confirm = () => {
  return (
    <>
      <Box bg="#edf2f7" color="white-black" textAlign={"center"} padding="-0 10% 10% 9%">
        <center>
          <Image src="https://media.tenor.com/se7cU4QJ0KAAAAAi/delivery.gif" />
          <Heading textShadow='1.5px 2px #1c2938' m='6'>
           <CheckIcon bg={"blue"}/> 
            <Text as="samp">Your Order Is Confirm We will Share details on Email or Mobile. You can Track with this id</Text> <Text as="mark">{Math.floor(Math.random()*9000000) + 1000000}</Text>
          </Heading>
        </center>
      </Box>
    </>
  );
};

export default Confirm;
