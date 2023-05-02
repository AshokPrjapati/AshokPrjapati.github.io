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
          <Stack className={styles.skillsCatContainer} w={{ base: "100%", md: "48%" }}>
            <Heading
              className={styles.skillCatHeading}
              bg="text.3"
            >
              Frontend
            </Heading>

            <Grid gridTemplateColumns={{
              base: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
              gap="1rem">
              {frontendSkills.map((skill, i) => (
                <Stack
                  bg="bg.3"
                  key={i}
                  className={styles.skillsCard}
                  data-aos="fade-right"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={skill.icon}
                    w="30px"
                    h="30px"
                    m={"0 auto"}
                  />
                  <Box ml="3">
                    <Text
                      fontSize={"1rem"}
                      fontWeight="normal"
                      color={"text.1"}
                    >
                      {skill.skillName}
                    </Text>
                  </Box>
                </Stack>
              ))}
            </Grid>
          </Stack>
          <Stack className={styles.skillsCatContainer} w={{ base: "100%", md: "48%" }}>
            <Heading
              className={styles.skillCatHeading}
              bg="text.3"
            >
              Backend
            </Heading>
            <Grid gridTemplateColumns={{
              base: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
              gap="1rem">
              {backendSkills.map((skill, i) => (
                <Stack
                  bg="bg.3"
                  key={i}
                  className={styles.skillsCard}
                  data-aos="fade-left"
                  data-aos-offset="150"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={skill.icon}
                    w="30px"
                    h="30px"
                    m={"0 auto"}
                  />
                  <Box ml="3">
                    <Text
                      fontWeight="normal"
                      color={"text.1"}
                    >
                      {skill.skillName}
                    </Text>
                  </Box>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Flex>
        <Stack className={styles.skillsCatContainer}>
          <Heading
            className={styles.skillCatHeading}
            bg="text.3"
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
                bg="bg.3"
                key={i}
                className={styles.skillsCard}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Image
                  src={skill.icon}
                  w="30px"
                  h="30px"
                  m={"0 auto"}
                />
                <Box ml="3">
                  <Text fontWeight="normal" color={"text.1"}>
                    {skill.name}
                  </Text>
                </Box>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TechStacks;
