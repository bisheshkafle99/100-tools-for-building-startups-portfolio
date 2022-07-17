import React from "react";
import {
  Box,
  Flex,
  chakra,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Badge,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import testimonial1 from "../public/100.png";
import testimonial2 from "../public/100.png";
import testimonial3 from "../public/100.png";

const Testimonials = () => {
  const topBg = useColorModeValue("purple.200", "gray.700");
  const bottomBg = useColorModeValue("purple.300", "gray.800");

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
        bg={bottomBg}
        id="testimonials"
      >
        <Box pt={20} rounded="md" bg={topBg}>
          <Box w="full" px={[10, , 4]} mx="auto">
            <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
              Testimonials
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", , "xl"]}
              _dark={{
                color: "gray.400",
              }}
            >
              Saving over 1000&apos;s of hours and money of startup founders
            </chakra.p>
          </Box>
          <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
            <Flex
              rounded="md"
              mx={10}
              bg={bottomBg}
              shadow="xl"
              mb="100px"
              direction={{
                base: "column",
                lg: "row",
              }}
            >
              <Stack spacing={8} p="55px">
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  lineHeight="tight"
                  textAlign={"center"}
                >
                  What others say?
                </Text>
                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  spacing={{ base: 5, lg: 8 }}
                >
                  <Image
                    src={testimonial1.src}
                    borderRadius={5}
                    _hover={{ borderRadius: 20, transform: "scale(1.3)" }}
                    transition="0.2s"
                  />

                  <Image
                    src={testimonial2.src}
                    borderRadius={5}
                    _hover={{ borderRadius: 20, transform: "scale(1.3)" }}
                    transition="0.2s"
                  />

                  <Image
                    src={testimonial3.src}
                    borderRadius={5}
                    _hover={{ borderRadius: 20, transform: "scale(1.3)" }}
                    transition="0.2s"
                  />
                </SimpleGrid>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Testimonials;
