import React, { forwardRef } from "react";
import {
  Card,
  Image,
  Stack,
  VStack,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Button,
  Tag,
} from "@chakra-ui/react";
import "./Projects.css";

const ProjectMobi = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="container-mobi">
        <VStack pt="15rem" pb="2rem" mx="2rem">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="./H-io.jpg"
              alt="Project 1"
            />

            <Stack bgColor="gray.200" color="black">
              <CardBody>
                <Heading size="md">Hypertensive.io</Heading>

                <Text py="2">
                  An open-source application that helps individuals to track and
                  record their daily blood pressure data. One can log their
                  readings, view the progress over time and also get statistical
                  analysis.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="purple">
                  <a
                    href="https://hypertensive-io.netlify.app/statistics"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            m="2rem"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="./LittleLemon.jpg"
              alt="LittleLemon"
            />

            <Stack bgColor="gray.200" color="black">
              <CardBody>
                <Heading size="md">Little Lemon Restaurant</Heading>

                <Text py="2">
                  Discover Little Lemon - a modern Mediterranean-inspired
                  restaurant featuring locally-sourced ingredients and bold,
                  refreshing flavors. Enjoy our signature lemon-infused dishes,
                  fresh seafood, and grilled meats in a warm and inviting
                  ambiance perfect for any occasion. Come savor the taste of the
                  Mediterranean at Little Lemon today!
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="purple">
                  <a
                    href="https://github.com/SayaniSen2022/Capstone"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            m="2rem"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="./CardThree.jpg"
              alt="coming soon"
            />

            <Stack>
              <CardBody bgColor="gray.200" color="black">
                <Heading size="md">United Engineering Works</Heading>

                <Tag bgColor="orange.400" color="white" py="2" mt="1">
                  Coming Soon!
                </Tag>
              </CardBody>
            </Stack>
          </Card>
        </VStack>
      </div>
    </>
  );
});

export default ProjectMobi;
