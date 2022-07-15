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

function StatsCard({ title, stat }) {
  //     function StatsCard(props) {
  //   const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"}>{title}</StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
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
            What is our product doing?
          </chakra.h1>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, lg: 8 }}
            bg={bottomBg}
            p={"70px"}
            borderRadius={"7px"}
          >
            <StatsCard
              title={"This product has helped"}
              stat={"50,000 people"}
            />
            <StatsCard title={"Has Saved"} stat={"1000+ hours"} />
            <StatsCard title={"In an"} stat={"Affordable Price"} />
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
}
