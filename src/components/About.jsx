import React from "react";
import { Heading, Text, Grid, GridItem, Button, Link } from "@chakra-ui/react";
import "./About.css";
import { ArrowDownIcon } from "@chakra-ui/icons";

const RESUME_URL = "./MyResume.pdf";

const About = () => {
  const downloadAtUrl = (url) => {
    const fileName = "SayaniSenResume";
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
          <Heading my="2" size="md" color="blue.200">
            About Me
          </Heading>
          <Text lineHeight="8" fontSize="xl">
            Hello, I am Sayani, a frontend web developer based in India.
            <p>
              I've been a finance professional at the beginning of my career but
              I am seeking a switch to the web development industry. I am
              primarily focused on frontend development.
            </p>
            The concept of combining creativity with logic was the prime factor
            which intrigued me about the industry. Over time I have learnt
            various relevant modern technologies and my projects are capable of
            demonstrating my coding proficiency.
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
        </section>
        <section className="section-two">
          <Heading my="2" size="md" color="blue.200">
            My Skills
          </Heading>
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                HTML
              </Text>
            </GridItem>
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                CSS
              </Text>
            </GridItem>
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                Javascript
              </Text>
            </GridItem>
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                React
              </Text>
            </GridItem>
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                Typescript
              </Text>
            </GridItem>
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                Github
              </Text>
            </GridItem>
            <GridItem
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                Chakra UI
              </Text>
            </GridItem>
            <GridItem
              my="1"
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                Tailwind
              </Text>
            </GridItem>
            <GridItem
              my="1"
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                REST API
              </Text>
            </GridItem>
            <GridItem
              my="1"
              w="80%"
              h="10"
              bg="black"
              color="blue.200"
              borderRadius="xl"
            >
              <Text my="2" textAlign="center">
                Figma
              </Text>
            </GridItem>
          </Grid>
        </section>
      </div>
      <div className="buttons">
        <Button size="md" variant="outline" colorScheme="blue" mr="2" mb="4">
          <Link
            href="
https://www.coursera.org/account/accomplishments/specialization/certificate/UUJGQB9J3CL8"
            target="_blank"
          >
            View My certificate
          </Link>
        </Button>

        <Button
          size="md"
          variant="outline"
          colorScheme="blue"
          mb="4"
          onClick={() => {
            downloadAtUrl(RESUME_URL);
          }}
        >
          Download My Resume
          <ArrowDownIcon />
        </Button>
      </div>
    </>
  );
};
export default About;
