import React from "react";
import img1 from "../Assets/Mens/Mens_img1.jpeg";
import img2 from "../Assets/Mens/Mens_img2.jpeg";
import img3 from "../Assets/Mens/Mens_img3.jpeg";
import img4 from "../Assets/Mens/Mens_img4.jpeg";
import img5 from "../Assets/Mens/Mens_img5.jpeg";
import shopBy1 from "../Assets/Mens/shop_by_category1.webp";
import shopBy2 from "../Assets/Mens/shop_by_category2.webp";
import shopBy3 from "../Assets/Mens/shop_by_category3.webp";
import brandBy1 from "../Assets/Mens/brand_by1.webp";
import brandBy2 from "../Assets/Mens/brand_by2.webp";
import brandBy3 from "../Assets/Mens/brand_by3.webp";
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
import { productData1, productData2 } from "../Data/ProductData";
import ShopBy from "../Components/ShopBy";
import QuerySection from "../Components/QuerySection";

const Mens = () => {
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
            Dancefloor ready: the hottest party shoes
          </Heading>

          <Text lineHeight={["25px", "27px"]} textAlign="center">
            Trending sneakers, modern cowboy boots and chunky loafers — unbox
            this season’s best styles
          </Text>

          <Button colorScheme="black" variant="outline">
            Shop Now
          </Button>
        </Stack>

        <Box cursor="pointer" w={["100%", "100%", "50%"]}>
          <Image src={img2} />
        </Box>
      </Flex>

      {/* Product List 1 */}
      <ProductList
        title="New in: hand-picked daily from the world’s best brands and boutiques"
        data={productData1}
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
          <Heading fontWeight="400" size={["md", "lg"]}>
            An Everyday Option
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
            "CLASSIC GIFTS",
            "WATCHES & JWELLERY",
            "SMALL LEATHER GOODS",
          ]}
          images={[shopBy1, shopBy2, shopBy3]}
        />
      </Box>

      {/* Banner 4*/}
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
            Design details
          </Heading>

          <Text lineHeight={["25px", "27px"]} textAlign="center">
            The signature triple cross-elastic detail is a key feature this
            season, which creates a slip-on fit, while the three hand stitches
            are a style signature seen throughout the brand's ready-to-wear
            line, specifically the tailored jackets, giving a nod to Zegna’s
            history and craftsmanship.
          </Text>

          <Button colorScheme="black" variant="outline">
            Shop Now
          </Button>
        </Stack>

        <Box cursor="pointer" w={["100%", "100%", "50%"]}>
          <Image src={img4} />
        </Box>
      </Flex>

      {/* Product List 2 */}
      <ProductList
        title="Trending now: most-wanted gifts"
        data={productData2}
      />

      {/* Banner 5 */}
      <Flex
        w="100%"
        gap={["1.5rem", "2.5rem"]}
        justify="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <Box cursor="pointer" w={["100%", "100%", "50%"]}>
          <Image src={img5} />
        </Box>
        <Stack
          w={["100%", "100%", "50%"]}
          align="center"
          justify="center"
          // border="1px solid black"
          spacing="25px"
          p={["1rem", "1rem", "0 1.5rem"]}
        >
          <Heading fontWeight="400" size={["md", "lg"]}>
            A Fresh New Look
          </Heading>

          <Text
            lineHeight={["25px", "27px"]}
            fontSize={["0.8rem", "1.1rem"]}
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
          titles={["MARNI", "BURBERRY", "VERSACE"]}
          description={[
            "From standout tracksuits to cult mules",
            "Iconic outerwear to love forever",
            "We’ve got fresh prints",
          ]}
          images={[brandBy1, brandBy2, brandBy3]}
        />
      </Box>

      <QuerySection />
    </Stack>
  );
};

export default Mens;
