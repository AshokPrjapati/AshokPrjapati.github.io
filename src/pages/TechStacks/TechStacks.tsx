import { useEffect } from "react";
import {
  Container,
  Text,
  Image,
  Heading,
  Flex,
  Stack,
  Box,
  Grid,
} from "@chakra-ui/react";
import styles from "./TechStacks.module.css";
import { backendSkills, frontendSkills } from "../../constants/skillsData";
import { tools } from "../../constants/constant";
import { Skill } from "../../types/interface";

const TechStacks = () => {
  const renderSkillHeading = (label: string) => {
    return (
      <Heading
        className={styles.skillCatHeading}
        bg="text.3"
        fontSize={"1.3rem"}
      >
        {label}
      </Heading>
    );
  };

  const renderSkillBox = (skill: Skill, index: number): JSX.Element => {
    return (
      <Stack
        bg="bg.3"
        key={index}
        className={styles.skillsCard}
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
      >
        <Image src={skill.icon} w="30px" h="30px" m={"0 auto"} />
        <Box ml="3">
          <Text color={"text.1"}>{skill.name}</Text>
        </Box>
      </Stack>
    );
  };

  return (
    <Container maxW="5xl" pb="60px" userSelect="none">
      <Heading
        w="max-content"
        m="auto"
        textAlign="center"
        p="65px 10px 10px 10px"
        color="text.1"
        fontWeight={500}
        borderBottom="3px solid #e11d48"
      >
        Skills
      </Heading>
      <Stack spacing="1rem" mt="3rem">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          gap={"1rem"}
        >
          <Stack
            className={styles.skillsCatContainer}
            w={{ base: "100%", md: "50%" }}
          >
            {renderSkillHeading("Frontend")}

            <Grid
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap="1rem"
            >
              {frontendSkills.map((skill, i) => renderSkillBox(skill, i))}
            </Grid>
          </Stack>
          <Stack
            className={styles.skillsCatContainer}
            w={{ base: "100%", md: "50%" }}
          >
            {renderSkillHeading("Backend")}
            <Grid
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
              }}
              gap="1rem"
            >
              {backendSkills.map((skill: Skill, i: number) =>
                renderSkillBox(skill, i)
              )}
            </Grid>
          </Stack>
        </Flex>
        <Stack className={styles.skillsCatContainer}>
          {renderSkillHeading("Tools")}
          <Grid
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap="30px 30px"
          >
            {tools.map((tool, i) => renderSkillBox(tool, i))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TechStacks;
