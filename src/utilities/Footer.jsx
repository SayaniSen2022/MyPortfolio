import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <HStack spacing={6}>
        <Box>
          <Text fontSize="xs" pt="2">
            SayaniSenPortfolio@2025
          </Text>
        </Box>
        <Box className="social-icons twitter">
          <Link href="https://twitter.com/sayani___" target="_blank">
            <Icon as={RiTwitterXFill} />
          </Link>
        </Box>
        <Box className="social-icons linkedin">
          <Link
            href="https://www.linkedin.com/in/sayani-sen-535749147/"
            target="_blank"
          >
            <Icon as={FaLinkedinIn} />
          </Link>
        </Box>
        <Box className="social-icons github">
          <Link href="https://github.com/SayaniSen2022" target="_blank">
            <Icon as={FaGithub} />
          </Link>
        </Box>
      </HStack>
    </div>
  );
};
export default Footer;
