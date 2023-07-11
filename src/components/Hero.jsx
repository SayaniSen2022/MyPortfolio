import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Button, Stack, VStack, Text, Link } from "@chakra-ui/react";
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
          <Text
            fontSize="6xl"
            fontWeight="medium"
            color="white"
            textAlign="center"
          >
            Hello, I'm <span style={{ color: "#FF3659" }}>Sayani</span>. I'm a
            front-end web developer. Come, let's explore!
          </Text>
        </VStack>
        <VStack>
          <Button
            color="#76E4F7"
            borderColor="#76E4F7"
            variant="outline"
            my="2"
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
