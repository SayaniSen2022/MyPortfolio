import React, { forwardRef } from "react";
import "./Projects.css";
import {
  Stack,
  CardBody,
  Image,
  Button,
  Heading,
  Card,
  Text,
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";

const Projects = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="main-container">
        <SimpleGrid columns={3} spacing={4} pt="5rem" ml="9">
          <Card align="center" maxW="sm" backgroundColor="gray.200">
            <CardBody>
              <div className="container">
                <Image
                  src="./H-io.jpg"
                  alt="Hypertensive.io logo"
                  borderRadius="lg"
                />
                <div className="overlay">
                  <Heading className="card-heading" size="md">
                    Hypertensive.io
                  </Heading>
                  <Text className="text">React, ChakraUI, ChartJS</Text>
                  <a
                    href="https://hypertensive-io.netlify.app/"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      colorScheme="pink"
                      size="sm"
                      className="button-element"
                      color="pink.500"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <Stack mt="6" spacing="3">
                <Heading size="md" color="black">
                  Hypertensive.io
                </Heading>
                <Text color="black">
                  An open-source application that helps individuals to track and
                  record their daily blood pressure data. One can log their
                  readings, view the progress over time and also get statistical
                  analysis.
                </Text>
              </Stack>
            </CardBody>
          </Card>

          <Card maxW="sm" align="center" backgroundColor="gray.200">
            <CardBody>
              <div className="container">
                <Image
                  src="./LittleLemon.jpg"
                  alt="LittleLemon logo"
                  borderRadius="lg"
                />
                <div className="overlay">
                  <Heading className="card-heading" size="md">
                    Little Lemon Restaurant
                  </Heading>
                  <Text className="text">React JS</Text>
                  <a
                    href="https://github.com/SayaniSen2022/Capstone"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      colorScheme="pink"
                      color="pink.500"
                      className="button-element"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>

              <Stack mt="6" spacing="3">
                <Heading size="md" color="black">
                  Little Lemon Restaurant
                </Heading>
                <Text color="black">
                  It is a demo website for an imaginary restaurant, a part of
                  the META Front-End Developer Professional Certification. It is
                  the capstone project and consists of a table reservation
                  feature.
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card align="center" maxW="sm" backgroundColor="gray.200">
            <CardBody>
              <div className="container">
                <Image
                  src="./comingsoon.jpg"
                  alt="Application logo"
                  borderRadius="lg"
                />
                <div className="overlay">
                  <Heading className="card-heading" size="md">
                    United Engineering Works
                  </Heading>
                  <Tag size="md" color="white" bgColor="orange.400" m="1">
                    Coming Soon
                  </Tag>
                </div>
              </div>
              <Stack mt="6" spacing="3">
                <Heading size="md" color="black">
                  United Engineering Works
                </Heading>
                <Tag color="white" bgColor="orange.400" w="8rem">
                  Coming Soon!
                </Tag>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </div>
    </>
  );
});
export default Projects;
