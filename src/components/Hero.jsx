import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Stack, VStack, Heading, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./Hero.css";
import Projects from "./Projects";

const Hero = () => {
  // const navigate = useNavigate();
  // const navigateToProjects = () => {
  //   navigate("/projects");
  // };
  const workRef = useRef(null);

  const handleClick = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Stack height="100vh" className="hero-section">
        <VStack className="intro">
          <Heading fontSize="3xl" fontWeight="medium" color="white">
            Hello, I'm Sayani Sen. I'm a front-end web developer.
          </Heading>
        </VStack>
        <VStack>
          <Button
            colorScheme="teal"
            variant="outline"
            mb="2"
            onClick={handleClick}
          >
            View my work
            <ArrowForwardIcon />
          </Button>
        </VStack>
      </Stack>

      <Projects ref={workRef} />
    </>
  );
};
export default Hero;
