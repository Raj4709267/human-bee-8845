import React from "react";
import {
  Box,
  Text,
  Flex,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Input,
  Button,
} from "@chakra-ui/react";
import Style from "./Form.module.css";

const Form = () => {
  const [value, setValue] = React.useState("1");
  return (
    <Box className={Style.email_Box}>
      <Text fontSize="40px" fontWeight="bold" lineHeight="50px">
        {" "}
        GET 10% OFF YOUR FIRST ORDER
      </Text>
      <Text w="80%" margin="auto" mt="20px">
        Sign up for promotions, tailored new arrivals, stock updates and more –
        straight to your inbox
      </Text>
      <Box className={Style.radio_box} mt="30px">
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">Womenswear</Radio>
            <Radio value="2">Menswear</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Text textAlign="left" fontSize="18px" mt="25px" ml="10px">
        GET UPDATES BY
      </Text>
      <Box textAlign="left">
        <Checkbox mt="10px" ml="10px" defaultChecked>
          Email
        </Checkbox>
        <Input mt="10px" ml="10px" w="95%" placeholder="Your email address" />
      </Box>

      <Box textAlign="left">
        <Checkbox mt="10px" ml="10px" defaultChecked>
          SMS
        </Checkbox>
        <Flex>
          <Box w="30%" h="40px" mt="10px" ml="10px" borderRadius="5px">
            <Select placeholder="+ 91">
              <option value="option1">+ 91</option>
              <option value="option2">+ 977</option>
              <option value="option3">+ 98</option>
            </Select>
          </Box>
          <Input mt="10px" ml="10px" w="65%" placeholder="Your email address" />
        </Flex>
        <Box w="95%" m="auto" mt="20px">
          <Button
            w="100%"
            colorScheme="teal"
            variant="solid"
            className={Style.btn1}
          >
            Sign Up
          </Button>
        </Box>
        <Box textAlign="center">
        <Text mt="20px">By signing up, you agree to our Privacy Policy.</Text>
        <Text mb="30px">Unsubscribe anytime at the bottom of our emails.</Text>
        </Box>
       
      </Box>
    </Box>
  );
};

export default Form;
