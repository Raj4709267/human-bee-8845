import React from "react";
import img1 from "../Assets/Womens/women1.webp";
import img2 from "../Assets/Womens/women2.webp";
import img3 from "../Assets/Womens/women3.webp";
import shopBy1 from "../Assets/Womens/women_shopBy1.webp";
import shopBy2 from "../Assets/Womens/women_shopBy2.webp";
import shopBy3 from "../Assets/Womens/women_shopBy3.webp";
import brandBy1 from "../Assets/Womens/women_brand1.jpeg";
import brandBy2 from "../Assets/Womens/women_brand2.jpeg";
import brandBy3 from "../Assets/Womens/women_brand3.jpeg";
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
import { womenProductList1, womenProductList2 } from "../Data/ProductData";
import { useNavigate } from "react-router-dom";

const Womens = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/mens/menswear", { replace: true });
  };

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
        <Box
          onClick={handleNavigate}
          cursor="pointer"
          w={["100%", "100%", "50%"]}
        >
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

          <Button
            onClick={handleNavigate}
            colorScheme="black"
            variant="outline"
          >
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
            Dancefloor ready: the hottest party shoes
          </Heading>

          <Text lineHeight={["25px", "27px"]} textAlign="center">
            Trending sneakers, modern cowboy boots and chunky loafers — unbox
            this season’s best styles
          </Text>

          <Button
            onClick={handleNavigate}
            colorScheme="black"
            variant="outline"
          >
            Shop Now
          </Button>
        </Stack>

        <Box
          onClick={handleNavigate}
          cursor="pointer"
          w={["100%", "100%", "50%"]}
        >
          <Image src={img2} />
        </Box>
      </Flex>

      {/* Product List 1 */}
      <ProductList
        title="New in: hand-picked daily from the world’s best brands and boutiques"
        data={womenProductList1}
      />

      {/* Banner 3 */}
      <Flex
        w="100%"
        gap={["1.5rem", "2.5rem"]}
        justify="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Box
          onClick={handleNavigate}
          cursor="pointer"
          w={["100%", "100%", "50%"]}
        >
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

      {/* Shop by category */}
      <Box cursor="pointer">
        <Text
          align="center"
          m="2rem 0px"
          fontSize={["1.5rem", "1.7rem"]}
          fontWeight="400"
        >
          Shop gifts by category
        </Text>
        <ShopBy
          titles={[
            "HIGH-GLAMOUR GIFTS",
            "100 ICONIC BAGS",
            "FINE JEWELRY & WATCHES",
          ]}
          images={[shopBy1, shopBy2, shopBy3]}
        />
      </Box>

      {/* Product List 2 */}
      <ProductList title="Discover: trending gifts" data={womenProductList2} />

      {/* Shop by brands */}
      <Box cursor="pointer">
        <Text
          align="center"
          m="2rem 0px"
          fontSize={["1.5rem", "1.7rem"]}
          fontWeight="400"
        >
          Shop gifts by brand
        </Text>
        <ShopBy
          titles={["PRADA", "AREA", "ACNE STUDIO"]}
          description={[
            "This way for editor-approved staples",
            "The modern party dress code",
            "Strong outerwear and statement accessories",
          ]}
          images={[brandBy1, brandBy2, brandBy3]}
        />
      </Box>

      <QuerySection />
    </Stack>
  );
};

export default Womens;
