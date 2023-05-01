import React, { useEffect } from "react";
import { Container, Text, Image, Heading, Flex, Stack, Box, Grid, VStack } from "@chakra-ui/react";
import styles from "./TechStacks.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

import { frontendSkills, backendSkills, tools } from "../../Theme/config";

const TechStacks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container maxW={"5xl"} pb={"60px"} userSelect={"none"}>
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
              mt={"3rem"}
              mb="1rem"
              p=".5rem"
              fontSize={"1.3rem"}
              fontWeight={500}
              borderRadius={"5px 50px"}
              bg="text.3"
              boxShadow={"0 0 10px rgba(0,0,0,0.5)"}
            >
              Frontend
            </Heading>

            <VStack w={"100%"} gap="20px 20px">
              {frontendSkills.map((skill, i) => (
                <Flex
                  bg="bg.card"
                  key={i}
                  w="90%"
                  m="auto"
                  p="5px 15px"
                  borderRadius={"5px"}
                  align={"center"}
                  className={styles.skills}
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={skill.icon}
                    p="3px"
                    h="40px"
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
              mt={"3rem"}
              mb="1rem"
              p=".5rem"
              fontSize={"1.3rem"}
              fontWeight={500}
              borderRadius={"5px 50px"}
              bg="text.3"
              boxShadow={"0 0 10px rgba(0,0,0,0.5)"}
            >
              Backend
            </Heading>
            <VStack w={"100%"} gap="20px 20px">
              {backendSkills.map((skill, i) => (
                <Flex
                  bg="bg.card"
                  key={i}
                  w="90%"
                  m="auto"
                  p="5px 15px"
                  borderRadius={"5px"}
                  align={"center"}
                  className={styles.skills}
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={skill.icon}
                    p="3px"
                    h="40px"
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
            p=".5rem"
            fontSize={"1.3rem"}
            fontWeight={500}
            borderRadius={"5px 50px"}
            bg="text.3"
            w={{ base: "100%", md: "35%" }}
            m="3rem auto 2rem auto"
            boxShadow={"0 0 10px rgba(0,0,0,0.5)"}
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
                bg="bg.card"
                key={i}
                w="100%"
                m="auto"
                className={styles.skills}
                p="1rem"
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
