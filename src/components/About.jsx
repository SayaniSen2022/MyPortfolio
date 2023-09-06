import React from "react";
import {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import "./About.css";
import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiChakraui } from "react-icons/si";
import { FaReact, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";
import { BiGitMerge } from "react-icons/bi";
import { Icon } from "@chakra-ui/icons";
import { ArrowDownIcon } from "@chakra-ui/icons";

const RESUME_URL = "./Resume-Sayani Sen.pdf";

const About = () => {
  const downloadAtUrl = (url) => {
    const fileName = "SayaniSen-Resume";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <div className="structure">
        <section className="section-one">
          <Heading my="2" size="lg" color="blue.500">
            ABOUT ME
          </Heading>
          <Text lineHeight="8" fontSize="xl" color="black">
            Hello, I am Sayani, a web developer based in India.
            <p>
              I've been a finance professional at the beginning of my career but
              I am seeking a switch to the web development industry. I am
              primarily focused on frontend development.
            </p>
            <p>
              The concept of combining creativity with logic was the prime
              factor which intrigued me about the industry. Over time I have
              learnt various relevant modern technologies and my projects are
              capable of demonstrating my coding proficiency.
            </p>
            <p>
              As I transition from finance to software dveelopment I am hoping
              to combine the perspective earned from my previous industry and
              combine it with tech to turn beautiful ideas into working
              realities.
            </p>
            <p>
              Let's connect and turn innovative ideas into beautiful digital
              solutions.
            </p>
          </Text>
          <Button
            size="md"
            variant="solid"
            colorScheme="orange"
            my="2"
            onClick={() => {
              downloadAtUrl(RESUME_URL);
            }}
          >
            Download My Resume
            <ArrowDownIcon />
          </Button>
        </section>
        <section className="section-two">
          <Heading my="2" size="lg" color="blue.500">
            MY SKILLS
          </Heading>
          <UnorderedList color="blue.300" spacing={1}>
            <ListItem>
              <Icon as={AiFillHtml5} color="#FFA500" mr="1" />
              HTML5
            </ListItem>
            <ListItem>
              <Icon as={DiCss3} color="#0000ff" mr="1" />
              CSS
            </ListItem>
            <ListItem>
              <Icon as={SiJavascript} color="#f0db4f" bgColor="black" mr="1" />
              JavaScript
            </ListItem>
            <ListItem>
              <Icon as={FaReact} color="#61dafb" mr="1" />
              REACT
            </ListItem>
            <ListItem>
              <Icon as={AiFillApi} color="#808080" mr="1" />
              REST API
            </ListItem>
            <ListItem>
              <Icon as={BiGitMerge} color="#F1502F" mr="1" />
              Git
            </ListItem>
            <ListItem>
              <Icon as={FaGithub} color="black" /> Github
            </ListItem>
            <ListItem>
              <Icon as={FaBootstrap} color="#a900ff" mr="1" />
              Bootstrap
            </ListItem>
            <ListItem>
              <Icon as={SiTailwindcss} color="#64b5f6" mr="1" />
              Tailwind
            </ListItem>
            <ListItem>
              <Icon as={SiChakraui} color="#4FD1C5" mr="1" />
              Chakra UI
            </ListItem>
            <ListItem>
              <Icon as={FaFigma} mr="1" color="#b800ff" />
              Figma
            </ListItem>
          </UnorderedList>
        </section>
      </div>
    </>
  );
};
export default About;
