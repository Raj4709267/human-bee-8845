import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
const ImagePointer = ({data}) => {

  return (
    <Box cursor="pointer" m="2rem 0px" backgroundColor="gray.50">
      {/* <Box>
        <Image
          src={images[0]}
          onMouseEnter={(e) => (e.target.src = "https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40851734_300.jpg")}
          onMouseLeave={(e) => (e.target.src = "https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40851734_300.jpg")}
          transition="ease-in-out"
          objectFit="contain"
        />
      </Box>

      <Box p="1rem">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="0.9rem" fontWeight="400">
          {description}
        </Text>
      </Box> */}

      {/* <Text p="0.8rem 1rem">{`$${price}`}</Text> */}
    </Box>
  )
}

export default ImagePointer