import React from "react";
import img1 from "../Assets/Kids/kid1.webp";
import img2 from "../Assets/Kids/kid2.jpeg";
import img3 from "../Assets/Kids/kid3.webp";
import best1 from "../Assets/Kids/best1.webp";
import best2 from "../Assets/Kids/best2.webp";
import best3 from "../Assets/Kids/best3.webp";
import middle1 from "../Assets/Kids/middle1.webp";
import middle2 from "../Assets/Kids/middle2.webp";
import {
  Stack,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import ProductList from "../Components/ProductList";
import ShopBy from "../Components/ShopBy";
import QuerySection from "../Components/QuerySection";
import { kidsProduct1 } from "../Data/ProductData";

const Kids = () => {
  return (
    <Stack
      spacing={["50px", "50px", "100px"]}
      w={["90%", "80%"]}
      p="2.5rem 0"
      m="60px auto"
    >
      {/* Banner 1 */}
      <Flex
        w="100%"
        gap={["1.5rem", "2.5rem"]}
        justify="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Box cursor="pointer" w={["100%", "100%", "50%"]}>
          <Image src={img1} />
        </Box>
        <Stack
          w={["100%", "100%", "50%"]}
          align="center"
          justify="center"
          // border="1px solid black"
          spacing="25px"
          p={["1rem", "1rem", "0 1.5rem"]}
        >
          <Box>
            <Heading spacing={5} size={["xl", "2xl"]}>
              22% OFF YOUR
            </Heading>
            <Heading spacing={5} size={["xl", "2xl"]}>
              NEW WARDROBE
            </Heading>
          </Box>

          <Text
            lineHeight={["25px", "30px"]}
            fontSize={["1rem", "1.5rem"]}
            textAlign="justify"
          >
            For a limited time only, you can shop the world’s most iconic brands
            with 22% off. Offer available on selected full-price items
          </Text>

          <Button colorScheme="black" variant="outline">
            Shop Now
          </Button>
        </Stack>
      </Flex>

      {/* Banner 2 */}
      <Flex
        w="100%"
        gap={["1.5rem", "2.5rem"]}
        justify="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Stack
          w={["100%", "100%", "50%"]}
          align="center"
          justify="center"
          // border="0.8px solid black"
          spacing="25px"
          p={["1rem", "1rem", "0 1.2rem"]}
        >
          <Heading fontWeight="400" size={["md", "lg"]}>
            Dress for the occasion
          </Heading>

          <Text lineHeight={["25px", "27px"]} textAlign="center">
            Party dresses, mini-me suits and coordinating accessories by
            Balmain, Versace and more
          </Text>

          <Button colorScheme="black" variant="outline">
            Shop Now
          </Button>
        </Stack>

        <Box cursor="pointer" w={["100%", "100%", "50%"]}>
          <Image src={img2} />
        </Box>
      </Flex>

      {/* Shop by category */}
      <Box cursor="pointer">
        <Text
          align="center"
          m="2rem 0px"
          fontSize={["1.5rem", "1.7rem"]}
          fontWeight="400"
        >
          The Best Of New In
        </Text>
        <ShopBy
          titles={["BABY", "KIDS", "TEENS"]}
          description={[
            "Changing bags and all that goes in them",
            "Transeasonal layers, sets and sneakers",
            "From snow boots to tracksuits",
          ]}
          images={[best1, best2, best3]}
        />
      </Box>

      {/* Middle banner */}
      <Flex gap={["1.5rem", "2rem"]}>
        <Box cursor="pointer">
          <Image src={middle1} />
          <Text mt="1.5rem">THE SNEAKER EDIT</Text>
          <Text fontSize="0.8rem">
            Hype styles including Off-White’s Out of Office sneakers
          </Text>
        </Box>

        <Box cursor="pointer">
          <Image src={middle2} />
          <Text mt="1.5rem">ALL THE ACCESSORIES</Text>
          <Text fontSize="0.8rem">
            Fluffy hats, logo bags and more for the new season
          </Text>
        </Box>
      </Flex>

      {/* Product List 1 */}
      <ProductList
        title="Trending now: our most-wanted gifts"
        data={kidsProduct1}
      />

      {/* Banner 3 */}
      <Flex
        w="100%"
        gap={["1.5rem", "2.5rem"]}
        justify="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Box cursor="pointer" w={["100%", "100%", "50%"]}>
          <Image src={img3} />
        </Box>

        <Stack
          w={["100%", "100%", "50%"]}
          align="center"
          justify="center"
          // border="0.8px solid black"
          spacing="25px"
          p={["1rem", "1rem", "0 1.2rem"]}
        >
          <Heading fontWeight="400" size={["md", "xl"]}>
            The Art Of The Gifting
          </Heading>

          <Text lineHeight={["25px", "27px"]} textAlign="justify">
            Because not every day is the same, your Triple Stitch sneakers are
            made to seamlessly navigate work, leisure and travel. Minimalistic,
            timeless and pared back, they'll complement both formal and casual
            attire — think tailored trousers, joggers and shorts.
          </Text>
        </Stack>
      </Flex>

      <QuerySection />
    </Stack>
  );
};

export default Kids;
