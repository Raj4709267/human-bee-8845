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
  Button,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Circle,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/AppReducer/action";
import ProductItem from "./ProductItem";
import { BsFilter } from "react-icons/bs";
import { Route } from "react-router-dom";

const MensProductPage = () => {
  const loadingItem = new Array(12).fill(0);
  const [changeIcon, setChangeIcon] = useState(false);
  const { data, isLoading, isError } = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const [showCategory, setShowCategory] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showConcious, setShowConcious] = useState(false);
  const [showFilter, SetShowFilter] = useState(false);
  const [minPriceRange, setMinPriceRange] = useState(24);
  const [maxPriceRange, setMaxPriceRange] = useState(18712);
  const [largeGrid, setLargeGrid] = useState(showFilter ? 3 : 4);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState("1");
  const [route, setRoute] = useState("/mens");

  const handleSortData = (data, type) => {
    if (type === "lth") {
      const sorter = (a, b) => {
        return +a.prize - +b.prize;
      };
      data.sort(sorter);
      dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } else {
      const sorter = (a, b) => {
        return +b.prize - +a.prize;
      };
      data.sort(sorter);
      dispatch({ type: GET_DATA_SUCCESS, payload: data });
    }
  };

  const handleChangeRoute = (pathname) => {
    if (pathname === "SHOP WOMEN") {
      setRoute("/womens");
    } else if (pathname === "SHOP MEN") {
      setRoute("/mens");
    }
  };

  useEffect(() => {
    dispatch(getData(route));
  }, [route]);

  useEffect(() => {
    setLargeGrid(showFilter ? 3 : 4);
  }, [showFilter]);

  return (
    <Box w={["95%", "95%", "90%"]} m="50px auto">
      {/* Top filter */}
      <Flex
        display={["flex", "flex", "none"]}
        align="center"
        justify="center"
        gap="0.6rem"
        w={["100%", "80%"]}
        m="auto"
        border="1px solid gray"
        p="0.6rem"
        borderRadius="6px"
        onClick={onOpen}
      >
        <BsFilter size="1.5rem" />
        <Text fontSize="1.5rem">Filter</Text>
      </Flex>
      <Drawer
        placement={"bottom"}
        size="full"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody m="1rem">
            <Box>
              <Text
                fontWeight="500"
                fontSize="1.5rem"
                p="1rem"
                borderBottom="1px solid gray"
              >
                Sort by
              </Text>

              <RadioGroup onChange={setValue} value={value}>
                <Stack spacing="1rem">
                  <Radio value="1" fontSize="1.1rem">
                    Our Picks
                  </Radio>
                  <Radio value="2" fontSize="1.1rem">
                    Newesr First
                  </Radio>
                  <Radio value="3" fontSize="1.1rem">
                    Price: high to low
                  </Radio>
                  <Radio value="4" fontSize="1.1rem">
                    Price: low to high
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Top headings and sorting, filtering */}
      <Box m="1rem">
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
            <Text
              onClick={(e) => handleChangeRoute(e.target.innerText)}
              cursor="pointer"
              decoration={route === "/womens" ? "underline" : "none"}
            >
              SHOP WOMEN
            </Text>
            <Text
              onClick={(e) => handleChangeRoute(e.target.innerText)}
              cursor="pointer"
              decoration={route === "/mens" ? "underline" : "none"}
            >
              SHOP MEN
            </Text>
          </Flex>
        </Stack>

        {/* Filter and sorting */}
        <Flex
          m="2rem 0px"
          w="100%"
          justify="space-between"
          display={["none", "none", "flex"]}
        >
          <Flex
            onClick={() => SetShowFilter(!showFilter)}
            cursor="pointer"
            gap="0.5rem"
            align="center"
          >
            <Text fontWeight="500" fontSize="1.2rem">
              Filter
            </Text>
            {showFilter ? (
              <IoIosArrowForward size="1.2rem" />
            ) : (
              <IoIosArrowBack size="1.2rem" />
            )}
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
              <MenuItem onClick={() => handleSortData(data, "htl")}>
                Price: high to low
              </MenuItem>
              <MenuItem onClick={() => handleSortData(data, "lth")}>
                Price: low to high
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      {/* Product card section */}
      <Flex
        w={["100%", "100%"]}
        m="25px auto"
        // border="1px solid black"
        justify="space-between"
      >
        {/* Filtering section */}
        {showFilter && (
          <Stack display={["none", "none", "block"]} w="23%">
            {/* Category */}
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
                <Stack spacing="1rem" p="1rem 1.5rem" w="100%" m="auto">
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Accessories
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Activewears
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Bags
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Clothing
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Homewear
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Jewelery
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Pre-Owned
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Shoes
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Underwears & Socks
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    Watches
                  </Text>
                </Stack>
              )}
            </Box>

            {/* Brands */}
            <Box>
              <Flex
                onClick={() => setShowBrand(!showBrand)}
                cursor="pointer"
                align="center"
                w="100%"
                justify="space-around"
                p="0 1rem"
              >
                <Text
                  decoration={showBrand && "underline"}
                  fontSize="1.2rem"
                  fontWeight="500"
                  pb="0.5rem"
                >
                  Brand
                </Text>
                {showBrand ? (
                  <IoIosArrowUp size="1.3rem" />
                ) : (
                  <IoIosArrowDown size="1.3rem" />
                )}
              </Flex>

              <Divider />

              {showBrand && (
                <Stack spacing="1rem" p="1rem 1.5rem" w="100%" m="auto">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BiSearch color="gray.300" />}
                    />
                    <Input placeholder="Search brands" />
                  </InputGroup>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    A Bathing Ape
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    A Better Mistake
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    A Sinner in Pearls
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    A Cold Wall
                  </Text>
                  <Text cursor="pointer" fontSize="1.1rem" fontWeight="400">
                    A.A Spectrum
                  </Text>
                </Stack>
              )}
            </Box>

            {/* Color */}
            <Box>
              <Flex
                onClick={() => setShowColor(!showColor)}
                cursor="pointer"
                align="center"
                w="100%"
                justify="space-around"
                p="0 1rem"
              >
                <Text
                  decoration={showColor && "underline"}
                  fontSize="1.2rem"
                  fontWeight="500"
                  pb="0.5rem"
                >
                  Color
                </Text>
                {showColor ? (
                  <IoIosArrowUp size="1.3rem" />
                ) : (
                  <IoIosArrowDown size="1.3rem" />
                )}
              </Flex>

              <Divider />

              {showColor && (
                <Stack spacing="1rem" p="1rem 1.5rem" w="100%" m="auto">
                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="black"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="blue"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="brown"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="gold"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="green"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="gray"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="orange"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="pink"></Circle>
                    <Text>Black</Text>
                  </Flex>

                  <Flex
                    cursor="pointer"
                    gap="0.5rem"
                    align="center"
                    borderRadius="6px"
                    p="0.5rem"
                    border="1px solid gray"
                  >
                    <Circle size="20px" bg="purple"></Circle>
                    <Text>Black</Text>
                  </Flex>
                </Stack>
              )}
            </Box>

            {/* Price */}
            <Box>
              <Flex
                onClick={() => setShowPrice(!showPrice)}
                cursor="pointer"
                align="center"
                w="100%"
                justify="space-around"
                p="0 1rem"
              >
                <Text
                  decoration={showPrice && "underline"}
                  fontSize="1.2rem"
                  fontWeight="500"
                  pb="0.5rem"
                >
                  Price
                </Text>
                {showPrice ? (
                  <IoIosArrowUp size="1.3rem" />
                ) : (
                  <IoIosArrowDown size="1.3rem" />
                )}
              </Flex>

              <Divider />

              {showPrice && (
                <Stack spacing="1rem" p="1rem 1.5rem" w="100%" m="auto">
                  <Flex gap="1rem">
                    <Input placeholder={`$${minPriceRange}`} />
                    <Input placeholder={`$${maxPriceRange}`} />
                  </Flex>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    colorScheme="gray"
                    defaultValue={[24, 18712]}
                    min={24}
                    max={1872}
                    onChangeEnd={(val) => setMaxPriceRange(val[1])}
                    onChangeStart={(val) => setMinPriceRange(val[0])}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </Stack>
              )}
            </Box>

            {/* Concious */}
            <Box>
              <Flex
                onClick={() => setShowConcious(!showConcious)}
                cursor="pointer"
                align="center"
                w="100%"
                justify="space-around"
                p="0 1rem"
              >
                <Text
                  decoration={showConcious && "underline"}
                  fontSize="1.2rem"
                  fontWeight="500"
                  pb="0.5rem"
                >
                  Conscious
                </Text>
                {showConcious ? (
                  <IoIosArrowUp size="1.3rem" />
                ) : (
                  <IoIosArrowDown size="1.3rem" />
                )}
              </Flex>

              <Divider />

              {showConcious && (
                <Stack spacing="1rem" p="1rem 1.5rem" w="100%" m="auto">
                  <Checkbox> Conscious </Checkbox>
                </Stack>
              )}
            </Box>
          </Stack>
        )}

        <SimpleGrid
          w={showFilter ? "73%" : "100%"}
          spacingX={8}
          spacingY={5}
          m="0 auto"
          columns={[2, 3, largeGrid]}
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
