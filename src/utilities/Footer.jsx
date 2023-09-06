import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <HStack spacing={6}>
        <Box>
          <Text fontSize="xs" pt="1">
            SayaniSen@2023
          </Text>
        </Box>
        <Box className="social-icons twitter">
          <Link href="https://twitter.com/sayani___" target="_blank">
            <Icon as={AiFillTwitterCircle} />
          </Link>
        </Box>
        <Box className="social-icons linkedin">
          <Link
            href="https://www.linkedin.com/in/sayani-sen-535749147/"
            target="_blank"
          >
            <Icon as={AiFillLinkedin} />
          </Link>
        </Box>
        <Box className="social-icons github">
          <Link href="https://github.com/SayaniSen2022" target="_blank">
            <Icon as={AiFillGithub} />
          </Link>
        </Box>
      </HStack>
    </div>
  );
};
export default Footer;
