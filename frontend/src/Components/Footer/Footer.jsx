import { SimpleGrid ,Box,Text, Flex, Spacer} from '@chakra-ui/react'
import { AiOutlineTwitter,AiFillFacebook,AiFillInstagram} from "react-icons/ai";
import { SiPinterest } from "react-icons/si";
import { TbBrandSnapchat } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
   <Box bg="black" color="white" p="10px">
<SimpleGrid columns={[1, null, 3]} spacing='20px' w="95%" m="auto">
  <Box >
    <Text>FARFETCH APP</Text>
    <Text mt="20px">Farfetch App for iOS and Android
</Text>
  </Box>
  <Box  >
    <Text>DESTINATION/REGION, CURRENCY AND LANGUAGE</Text>
    <Text mt="10px">India, USD $</Text>
    <Text mt="40px">FOLLOW US</Text>
    <Flex mt="30px">
        <Box mr="20px" >< AiFillInstagram size={"1.5em"}/></Box>
        <Box mr="20px"><AiFillFacebook size={"1.5em"}/></Box>
        <Box mr="20px"><AiOutlineTwitter size={"1.5em"}/></Box>
        <Box mr="20px"><TbBrandSnapchat size={"1.5em"}/></Box>
        <Box mr="20px"><SiPinterest size={"1.5em"}/></Box>
        <Box mr="20px"><IoLogoYoutube size={"1.5em"}/></Box>
        
    </Flex>
    
  </Box>
  <Box  >
  <Flex>
        <Box>
            <Text>CUSTOMER SERVICE</Text>
            <Text mt="5px">Contact us</Text>
            <Text mt="5px">Orders & delivery</Text>
            <Text mt="5px">Payment & pricing</Text>
            <Text mt="5px">Cryptocurrency payments</Text>
            <Text mt="5px">Returns & refunds</Text>
            <Text mt="5px">FAQs</Text>
            <Text mt="5px">Terms & conditions</Text>
            <Text mt="5px">Promotion terms & conditions</Text>
            <Text mt="5px">Privacy policy</Text>
            <Text mt="5px">Accessibility</Text>
            
        </Box>
        <Spacer/>
        <Box > <Text>ABOUT FARFETCH</Text>
            <Text mt="5px"> Us</Text>
            <Text mt="5px">Investors</Text>
            <Text mt="5px">Boutique Partners</Text>
            <Text mt="5px">Affiliate Programme</Text>
            <Text mt="5px">Student discount UNiDAYS</Text>
            <Text mt="5px">Youth discount</Text>
            <Text mt="5px">Careers</Text>
            <Text mt="5px">Customer Promise</Text>
            <Text mt="5px">FARFETCH App</Text>
            <Text mt="5px">Sitemap</Text>
            <Text mt="5px">Positively FARFETCH
</Text>
            </Box>
    </Flex>
  </Box>
  
</SimpleGrid>
<Text mt="40px" ml="40px">'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.</Text>
<Text ml="40px" mb="20px">© Copyright 2022 FARFETCH UK Limited. All rights reserved.</Text>
</Box> )
}

export default Footer