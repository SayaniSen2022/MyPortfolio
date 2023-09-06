import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
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
          <Icon as={AiFillTwitterCircle} />
        </Box>
        <Box className="social-icons linkedin">
          <Icon as={AiFillLinkedin} />
        </Box>
        <Box className="social-icons github">
          <Icon as={AiFillGithub} />
        </Box>
      </HStack>
    </div>
  );
};
export default Footer;
