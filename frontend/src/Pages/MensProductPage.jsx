import React from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Divider,
} from "@chakra-ui/react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/AppReducer/action";
import ProductItem from "./ProductItem";

const MensProductPage = () => {
  const loadingItem = new Array(12).fill(0);
  const [changeIcon, setChangeIcon] = useState(false);
  const { data, isLoading, isError } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const [showCategory, setShowCategory] = useState(false);
  const [showFilter, SetShowFilter] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData("/mens"));
    }
  }, [data.length]);

  // console.log(isLoading);
  return (
    <Box w={["95%", "95%", "90%"]} m="50px auto">
      {/* Top headings and sorting, filtering */}
      <Box>
        {/* Top heading */}
        <Stack spacing="1.5rem">
          <Text fontSiz="0.8rem" fontWeight="400">
            Men Home
          </Text>

          <Box>
            <Heading size={["sm", "md", "xl"]}>
              22% OFF YOUR NEW WARDROBE
            </Heading>
            <Text fontSiz="0.8rem" fontWeight="400">
              You can now shop the world’s most iconic designers with 22% off,
              for a limited time only. T&Cs apply; read them here.
            </Text>
          </Box>

          <Flex gap="2rem">
            <Text cursor="pointer">SHOP WOMEN</Text>
            <Text cursor="pointer">SHOP MEN</Text>
          </Flex>
        </Stack>

        {/* Filter and sorting */}
        <Flex
          m="2rem 0px"
          w="100%"
          justify="space-between"
          display={["none", "none", "flex"]}
        >
          <Flex cursor="pointer" gap="0.5rem" align="center">
            <Text fontWeight="500" fontSize="1.2rem">
              Filter
            </Text>
            <IoIosArrowBack size="1.2rem" />
          </Flex>

          <Menu isLazy>
            <MenuButton
              bg="none"
              _hover={{ bg: "none" }}
              as={Button}
              onClick={() => setChangeIcon(!changeIcon)}
              rightIcon={changeIcon ? <IoIosArrowUp /> : <IoIosArrowDown />}
            >
              Sort by
            </MenuButton>
            <MenuList>
              <MenuItem>Our picks</MenuItem>
              <MenuItem>Newest first</MenuItem>
              <MenuItem>Price: high to low</MenuItem>
              <MenuItem>Price: low to high</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      {/* Product card section */}
      <Flex
        w={["100%", "100%"]}
        m="auto"
        border="1px solid black"
        justify="space-between"
      >
        <Stack display={["none", "none", "block"]} w="25%">
          <Box>
            <Flex
              onClick={() => setShowCategory(!showCategory)}
              cursor="pointer"
              align="center"
              w="100%"
              justify="space-around"
              p="0 1rem"
            >
              <Text
                decoration={showCategory && "underline"}
                fontSize="1.2rem"
                fontWeight="500"
                pb="0.5rem"
              >
                Category
              </Text>
              {showCategory ? (
                <IoIosArrowUp size="1.3rem" />
              ) : (
                <IoIosArrowDown size="1.3rem" />
              )}
            </Flex>

            <Divider />

            {showCategory && (
              <Stack p="1rem 1.5rem" w="100%" m="auto">
                <Text>Accessories</Text>
              </Stack>
            )}
          </Box>
        </Stack>

        <SimpleGrid
          w="75%"
          spacingX={8}
          spacingY={5}
          m="0 auto"
          columns={[2, 3, 3]}
        >
          {data?.map((el) => (
            <ProductItem item={el} key={el._id} />
          ))}

          {isLoading &&
            loadingItem?.map((el, index) => (
              <Box key={index + 1} p="1rem">
                <Skeleton w="100%" h="300px"></Skeleton>
                <SkeletonText w="100%"></SkeletonText>
              </Box>
            ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default MensProductPage;
