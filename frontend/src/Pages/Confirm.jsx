import React from "react";
import { Center, Square, Box, Container, Heading } from "@chakra-ui/react";
import {CheckIcon } from '@chakra-ui/icons'
const Confirm = () => {
  return (
    <>
      <Box bg="gray" h="400px" color="white" textAlign={"center"} padding="10% 10% 10% 10%">
        <center>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBiAbfZ8aAeBZBhLpDtdU1f4Wgs6dtYFjUveYCmYP&s" />
          <Heading textShadow='1px 1px #ff0000' m='6'>
           <CheckIcon bg={"blue"}/> 
            Your Order Is Confirm We will Share details on Email or Mobile.
          </Heading>
        </center>
      </Box>
    </>
  );
};

export default Confirm;
