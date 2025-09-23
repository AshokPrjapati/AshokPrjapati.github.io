import React from "react";
import styles from "./Hero.module.css";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

import Typewriter from "typewriter-effect";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SIcons from "./SIcons";

const Hero: React.FC = () => {
  return (
    <Container pt={{ base: "40px", md: "none" }} maxW={"5xl"} minH={"100vh"}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        py={"1rem"}
        direction={{ base: "column-reverse", md: "row" }}
        minH="100vh"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          textAlign={{ base: "center", md: "left" }}
          gap="1rem"
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            <Text color={"text.1"} as={"span"}>
              Hi, I am Ashok Kumar
            </Text>
            <br />
            <Text as={"span"} color={"text.3"}>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "A Tech Enthusiastic !",
                    "Mern Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </Heading>
          <Text color={"text.1"}>
            An enthusiastic Full Stack Web Developer with a strong set of
            technical as well as non-technical skills and a dedication towards
            creating useful and interactive web applications.
          </Text>
          <Box textAlign={{ base: "center", md: "left" }}>
            <Box
              as={Link}
              className={styles.button}
              href="https://drive.google.com/file/d/1P27IWs5s4X1JBKLqUAMapYS6an5D_wvH/view?usp=sharing"
              isExternal
              _hover={{ textDecor: "none", bg: "text.3", color: "#fff" }}
              onClick={() => {
                const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
                const downloadLink = document.createElement("a");
                downloadLink.href = pdfUrl;
                downloadLink.download = "fw21_0784-Ashok-kumar-Resume.pdf";
                downloadLink.click();
              }}
              color="text.3"
            >
              {<ArrowForwardIcon />} Resume
            </Box>
          </Box>

          <SIcons />
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"}>
          <Box
            p={"20px"}
            maxH={"20rem"}
            maxW="20rem"
            rounded={"2xl"}
            m={"auto"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Box
              position={"absolute"}
              top="1.5rem"
              textAlign="center"
              bg={"text.3"}
              width="90%"
              height={"90%"}
              borderRadius={"50%"}
            ></Box>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"./profile.png"}
              position={"relative"}
              zIndex={8}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
