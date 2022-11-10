import React from "react";
import { Box, Text, SimpleGrid, Image } from "@chakra-ui/react";

const ShopBy = ({ images, titles, description }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={[8, 5, 6]}>
      <Box>
        <Box>
          <Image src={images[0]} />
        </Box>
        <Text mt="1rem">{titles[0]}</Text>
        {description && <Text fontSize="0.8rem">{description[0]}</Text>}
      </Box>

      <Box>
        <Box>
          <Image src={images[1]} />
        </Box>
        <Text mt="1rem">{titles[1]}</Text>
        {description && <Text fontSize="0.8rem">{description[1]}</Text>}
      </Box>

      <Box>
        <Box>
          <Image src={images[2]} />
        </Box>
        <Text mt="1rem">{titles[2]}</Text>
        {description && <Text fontSize="0.8rem">{description[2]}</Text>}
      </Box>
    </SimpleGrid>
  );
};

export default ShopBy;
