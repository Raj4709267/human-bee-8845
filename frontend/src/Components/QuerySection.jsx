import React from "react";
import { TbHanger } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const QuerySection = () => {
  return (
    <Flex
      w="100%"
      m="auto"
      direction={["column", "row"]}
      justify="space-between"
      gap={["1.5rem", ""]}
    >
      <Box
        cursor="pointer"
        w={["100%", "30%"]}
        border="1px solid black"
        p="1rem"
      >
        <TbHanger />
        <Text m="1rem 0">HOW TO SHOP</Text>
        <Text fontSize="0.8rem">Your guide to shopping and placing orders</Text>
      </Box>

      <Box
        cursor="pointer"
        w={["100%", "30%"]}
        border="1px solid black"
        p="1rem"
      >
        <AiOutlineQuestionCircle />
        <Text m="1rem 0">FAQS</Text>
        <Text fontSize="0.8rem">Your questions answered</Text>
      </Box>

      <Box
        cursor="pointer"
        w={["100%", "30%"]}
        border="1px solid black"
        p="1rem"
      >
        <GoComment />
        <Text m="1rem 0">NEED HELP?</Text>
        <Text fontSize="0.8rem">Contact our global Customer Service team</Text>
      </Box>
    </Flex>
  );
};

export default QuerySection;
