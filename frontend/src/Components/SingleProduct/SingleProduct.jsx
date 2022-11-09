import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Select,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Style from "./SingleProduct.module.css";

const SingleProduct = () => {
  return (
    <>
      <Box w="90%" m="auto" display="flex" className={Style.main}>
        <Box border="1px solid black" w="65%" className={Style.main2}>
          <SimpleGrid columns={[1, 1, 2]} spacing="10px" className={Style.sg}>
            <Box
              border="1px solid black"
              w="100%"
              height="500PX"
              className={Style.Box1}
            >
              <Image
                // boxSize="100%"
                height="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              border="1px solid black"
              w="100%"
              height="500px"
              className={Style.imgBox1}
            >
              <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              border="1px solid black"
              w="100%"
              height="500px"
              className={Style.imgBox1}
            >
              <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box
              border="1px solid black"
              w="100%"
              height="500px"
              className={Style.imgBox1}
            >
              <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Box
          border="1px solid black"
          w="35%"
          height="600"
          className={Style.desc}
        >
          <Box textAlign="left" ml="10px">
            <Text>New Season</Text>
            <Text fontWeight="bold" fontSize="20px">
              Aeyde
            </Text>
            <Text>Ariel mid-calf cowboy boots</Text>

            <Text mt="40px" fontWeight="bold" fontSize="20px">
              $123
            </Text>
            <Text>Import duties included</Text>
            <Box mt="20px">
              <Select
                placeholder="Select Size"
                w="95%"
                size="lg"
                className={Style.select}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box mt="20px" className={Style.buttons}>
              <Button
                w="62%"
                mr="10px"
                colorScheme="teal"
                variant="solid"
                className={Style.btn1}
              >
                Add to Bag
              </Button>
              <Button
                w="30%"
                colorScheme="black"
                variant="outline"
                className={Style.btn2}
              >
                Wishlist
              </Button>
            </Box>
            <Text mt="30px">ESTIMATED DELIVERY</Text>
            <Text>Nov 11 - Nov 18</Text>
          </Box>
        </Box>
      </Box>
      <Box w="90%" m="auto" mt="50px">
        <Tabs>
          <TabList>
            <Tab>THE DETAILS</Tab>
            <Tab>SIZE & FIT</Tab>
            <Tab>DELIVERY & RETURNS</Tab>
          </TabList>

          <TabPanels textAlign="left" fontSize='18px'>
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box  height="400px">
                  <Text>New Season</Text>
                  <Text fontWeight="bold" fontSize="20px">
                    Aeyde
                  </Text>
                  <Text>Ariel mid-calf cowboy boots</Text>
                  <Text mt="40px">Made in Italy</Text>
                  <Text fontWeight="bold" mt="30px" mb="10px">Hightlights</Text>
                  <UnorderedList>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                  </UnorderedList>
                </Box>
                <Box  height="400px">
                <Text fontWeight="bold"  mb="10px">Composition</Text>
                <Text>Sole: Rubber 100%, Calf Leather 100%</Text>
                <Text>Lining: Calf Leather 100%</Text>
                <Text>Outer: Calf Leather 100%</Text>

                <Text fontWeight="bold" mt="30px" mb="10px">Product IDs</Text>
                <Text>FARFETCH ID: 18033877</Text>
                <Text>Brand style ID: A11ABTBUP75CH222968001</Text>
                </Box>
                <Box  height="400px">
                
                <Image
                boxSize="100%"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box bg="tomato" height="400px">
                <Text fontWeight="bold"  mb="10px">Measurements</Text>
                </Box>
                <Box bg="tomato" height="400px"></Box>
                <Box bg="tomato" height="400px"></Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={[1, 1, 3]} spacing="40px">
                <Box bg="tomato" height="400px"></Box>
                <Box bg="tomato" height="400px"></Box>
                <Box bg="tomato" height="400px"></Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default SingleProduct;
