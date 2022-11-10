import React from "react";
import { Box, Flex, Text, Button, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, title }) => {

  return (
    <Box w="100%">
      <Flex justify="space-between">
        <Text fontSize={["1rem", "1.4rem"]} fontWeight="400">
          {title}
        </Text>
        <Button
          display={["none", "none", "block"]}
          colorScheme="black"
          variant="outline"
        >
          Shop Now
        </Button>
      </Flex>

      <SimpleGrid
        w="100%"
        columns={[2, 3, 4]}
        spacing={["15px", "20px", "2.5rem"]}
      >
        {data?.map((el, index) => (
          <ProductCard key={index} item={el} />
        ))}
      </SimpleGrid>

      <Button
        display={["block", "block", "none"]}
        colorScheme="black"
        variant="outline"
        m="auto"
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default ProductList;
