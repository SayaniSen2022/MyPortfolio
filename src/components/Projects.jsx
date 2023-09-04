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
                  src="./Cone.jpg"
                  alt="Application logo"
                  borderRadius="lg"
                />
                <div className="overlay">
                  <Heading className="card-heading" size="md">
                    Hypertensive.io
                  </Heading>
                  <Text className="text">React JS</Text>
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
                  src="./CardTwo.jpg"
                  alt="Application logo"
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
                  Discover Little Lemon - a modern Mediterranean-inspired
                  restaurant featuring locally-sourced ingredients and bold,
                  refreshing flavors. Enjoy our signature lemon-infused dishes,
                  fresh seafood, and grilled meats in a warm and inviting
                  ambiance perfect for any occasion. Come savor the taste of the
                  Mediterranean at Little Lemon today!
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card align="center" maxW="sm" backgroundColor="gray.200">
            <CardBody>
              <div className="container">
                <Image
                  src="./CardThree.jpg"
                  alt="Application logo"
                  borderRadius="lg"
                />
                <div className="overlay">
                  <Heading className="card-heading" size="md">
                    United Engineering Works
                  </Heading>
                  <Text className="text">React JS</Text>
                  <a
                    href="https://github.com/SayaniSen2022/united-eng-works"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      color="pink.500"
                      className="button-element"
                      colorScheme="pink"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <Stack mt="6" spacing="3">
                <Heading size="md" color="black">
                  United Engineering Works
                </Heading>
                <Text color="black">Coming Soon!</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </div>
    </>
  );
});
export default Projects;
