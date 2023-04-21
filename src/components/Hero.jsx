import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Stack, VStack, Heading, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./Hero.css";
import About from "./About";
import Projects from "./Projects";

const Hero = () => {
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/projects");
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
            onClick={navigateToProjects}
          >
            View my work
            <ArrowForwardIcon />
          </Button>
        </VStack>
      </Stack>
      <About />
      <Projects />
      <footer>Copyright myfolio.inc 2023</footer>
    </>
  );
};
export default Hero;
