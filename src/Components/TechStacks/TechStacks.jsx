import React, { useEffect } from "react";
import {
  Container,
  Text,
  Image,
  Heading,
  Flex,
  Stack,
  Box,
  Grid,
  VStack,
} from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";

import { frontendSkills, backendSkills, tools } from "../../Theme/config";

const TechStacks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxW={"5xl"} pb={"60px"}>
      <Heading
        w={"max-content"}
        m="auto"
        textAlign={"center"}
        p={"60px 10px 10px 10px"}
        color={"text.1"}
        fontWeight={500}
        borderBottom="3px solid #e11d48"
      >
        Skills
      </Heading>
      <Stack>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
        >
          <Stack w={{ base: "100%", md: "35%" }}>
            <Heading
              textAlign={"center"}
              mb={"15px"}
              pt={"40px"}
              pb={"15px"}
              color={"text.1"}
              fontSize={"24px"}
              fontWeight={500}
            >
              Frontend
            </Heading>

            <VStack w={"100%"} gap="20px 20px">
              {frontendSkills.map((skill, i) => (
                <Flex
                  key={i}
                  bg="bg.4"
                  w="90%"
                  m="auto"
                  p="5px 15px"
                  borderRadius={"5px"}
                  align={"center"}
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={skill.icon}
                    bg="black"
                    p="3px"
                    h="45px"
                    borderRadius={"5px"}
                  />
                  <Box ml="3">
                    <Text
                      fontSize={"20px"}
                      fontWeight="normal"
                      color={"text.1"}
                    >
                      {skill.skillName}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Stack>
          <Stack w={{ base: "100%", md: "35%" }}>
            <Heading
              textAlign={"center"}
              mb={"15px"}
              pt={"40px"}
              pb={"15px"}
              color={"text.1"}
              fontSize={"24px"}
              fontWeight={500}
            >
              Backend
            </Heading>
            <VStack w={"100%"} gap="20px 20px">
              {backendSkills.map((skill, i) => (
                <Flex
                  key={i}
                  bg="bg.4"
                  w="90%"
                  m="auto"
                  p="5px 15px"
                  borderRadius={"5px"}
                  align={"center"}
                  data-aos="fade-left"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={skill.icon}
                    bg="black"
                    p="3px"
                    h="45px"
                    borderRadius={"5px"}
                  />
                  <Box ml="3">
                    <Text
                      fontSize={"20px"}
                      fontWeight="normal"
                      color={"text.1"}
                    >
                      {skill.skillName}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Stack>
        </Flex>
        <Box>
          <Heading
            textAlign={"center"}
            mb={"15px"}
            pt={"40px"}
            pb={"15px"}
            color={"text.1"}
            fontSize={"24px"}
            fontWeight={500}
          >
            Tools
          </Heading>
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap="30px 30px"
          >
            {tools.map((skill, i) => (
              <Stack
                key={i}
                bg="bg.4"
                w="75%"
                m="auto"
                p="5px 15px"
                borderRadius={"5px"}
                align={"center"}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Image
                  src={skill.icon}
                  // bg="black"
                  p="3px"
                  h="50px"
                  borderRadius={"5px"}
                />
                <Box ml="3">
                  <Text fontSize={"20px"} fontWeight="normal" color={"text.1"}>
                    {skill.name}
                  </Text>
                </Box>
              </Stack>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default TechStacks;
