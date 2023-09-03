import React, { useRef } from "react";
import { Stack, HStack, Box, Heading, Text } from "@chakra-ui/react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./Hero.css";
import Projects from "./Projects";
import { IconContext } from "react-icons";

const Hero = () => {
  const workRef = useRef(null);

  const handleClick = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero-section">
      <Stack>
        <HStack>
          <Box maxW="35rem">
            <Heading as="h1" size="4xl" my="10rem" ml="5rem">
              Get ideas turned into <Text className="typed">reality.</Text>
            </Heading>
          </Box>
          <Box maxW="45rem">
            <Heading as="h1" size="2xl" my="10rem" ml="5rem">
              I'm Sayani. A front-end developer.
            </Heading>
          </Box>
        </HStack>
        <div id="explore-button">
          <IconContext.Provider value={{ className: "arrow", size: 70 }}>
            <MdKeyboardDoubleArrowDown onClick={handleClick} />
          </IconContext.Provider>
        </div>
      </Stack>

      <Projects ref={workRef} />
    </div>
  );
};
export default Hero;
