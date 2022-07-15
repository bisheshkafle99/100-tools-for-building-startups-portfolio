import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode == "light") toggleColorMode();
  }, []);
  return (
    <>
      <Hero />
      <Statistics />
      <Testimonials />
    </>
  );
}
