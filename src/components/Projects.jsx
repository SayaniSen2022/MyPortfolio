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
  Divider,
  Center,
} from "@chakra-ui/react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <SimpleGrid columns={3} spacing={2} my={2} mx={2}>
        <Card align="center" maxW="sm" backgroundColor="pink">
          <CardBody>
            <div className="container">
              <Image
                src="./CardOne.jpg"
                alt="Application logo"
                borderRadius="lg"
              />
              <div className="overlay">
                <Heading className="card-heading" size="md">
                  Hypertensive.io
                </Heading>
                <Text className="text">React JS</Text>
                <a
                  href="https://github.com/SayaniSen2022/Hypertensive.io"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="button-element"
                    colorScheme="pink"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">Hypertensive.io</Heading>
              <Text>
                Track and manage your blood pressure with our user-friendly app.
                Log your readings, set reminders, and view your progress over
                time. Receive personalized insights and recommendations to help
                you take control of your health. Download now and start
                monitoring your blood pressure today!
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW="sm" align="center" backgroundColor="pink">
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
                    className="button-element"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>

            <Stack mt="6" spacing="3">
              <Heading size="md">Little Lemon Restaurant</Heading>
              <Text>
                Discover Little Lemon - a modern Mediterranean-inspired
                restaurant featuring locally-sourced ingredients and bold,
                refreshing flavors. Enjoy our signature lemon-infused dishes,
                fresh seafood, and grilled meats in a warm and inviting ambiance
                perfect for any occasion. Come savor the taste of the
                Mediterranean at Little Lemon today!
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </div>
  );
});
export default Projects;
