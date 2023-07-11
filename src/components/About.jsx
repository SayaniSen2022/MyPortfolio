import React from "react";
import { Heading, Text, Grid, GridItem, Button, Link } from "@chakra-ui/react";
import "./About.css";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { DiHtml5, DiCss3Full } from "react-icons/di";

const RESUME_URL = "./MyResume.pdf";

const About = () => {
  //resume download button logic
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
          <Heading my="2" size="md">
            About Me
          </Heading>
          <Text lineHeight="6" fontSize="xl">
            Hello, I am Sayani Sen, a web developer based in India. My main
            interest lies in front-end web development. I create beautiful,
            responsive and user- friendly interfaces.
            <p>
              Though I started my career in the field of finance I have decided
              to switch since the amalgamation of creativity and logic attracted
              me immensely and I chose to answer that call.
            </p>
            <p>
              Looking forward to build a successful career in the field of web
              development and hoping to come in help for many organisations in
              efficiently turning innovative ideas into beautiful technical
              solutions.
            </p>
          </Text>
        </section>
        <section className="section-two">
          <Heading my="2" size="md">
            My Skills
          </Heading>
          <Grid templateColumns="repeat(7, 1fr)">
            <GridItem w="80%" h="10" bg="white" color="blue.900">
              <Text my="2" textAlign="center">
                <Icon as={DiHtml5} style={{ color: "#e34f26" }} />
                HTML
              </Text>
            </GridItem>
            <GridItem w="80%" h="10" bg="white" color="blue.900">
              <Text my="2" textAlign="center">
                <Icon as={DiCss3Full} style={{ color: "#264de4" }} />
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
