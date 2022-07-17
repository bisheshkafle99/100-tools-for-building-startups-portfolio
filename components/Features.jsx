import React from "react";
import {
  Flex,
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

const Features = () => {
  const topBg = useColorModeValue("purple.300", "gray.700");
  const bottomBg = useColorModeValue("purple.400", "gray.800");
  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{
        bg: "gray.600",
      }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
        rounded="md"
        shadow="base"
        w="full"
        bg={topBg}
        id="statistics"
        mt={"30px"}
      >
        <Box
          maxW="7xl"
          mx={"auto"}
          pt={5}
          px={{ base: 2, sm: 12, md: 17 }}
          mb={"100px"}
          mt={"20px"}
        >
          <chakra.h1
            textAlign={"center"}
            fontSize={"5xl"}
            py={10}
            fontWeight={"bold"}
          >
            Features of our Product
          </chakra.h1>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, lg: 8 }}
            bg={bottomBg}
            p={"70px"}
            borderRadius={"7px"}
            maxW="5xl"
            h="3xl"
            m={"auto"}
          >
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Backend
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Graphic Design
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Interface Design
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Marketing
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Authentication
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Hosting
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                No code Tools
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Monitoring Tools
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                SEO
              </chakra.h3>
            </Box>
            <Box
              bg="gray.900"
              border="1px solid white"
              borderRadius="3px"
              maxH="80px"
            >
              <chakra.h3
                textAlign={"center"}
                fontWeight={"bold"}
                py={"5"}
                fontSize={"3xl"}
              >
                Automation Tools
              </chakra.h3>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Features;
