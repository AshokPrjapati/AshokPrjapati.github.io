import React from "react";
import { Text, Heading, Flex, Stack, Box, Grid, Icon } from "@chakra-ui/react";
import styles from "./TechStacks.module.css";
import { Skill } from "../../types/interface";
import SectionHeader from "../../Components/SectionHeader";
import { BE_SKILLS, FE_SKILLS, TOOLS_SKILLS } from "../../constants/skillsData";

const TechStacks = () => {
  const renderSkillHeading = (label: string) => {
    return (
      <Heading className={styles.skillCatHeading} fontSize={"1.3rem"}>
        {label}
      </Heading>
    );
  };

  const renderSkillBox = (skill: Skill, index: number): JSX.Element => {
    return (
      <Stack
        key={index}
        className={styles.skillsCard}
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
      >
        <Icon w="50px" h="50px" m={"0 auto"} color="secondary">
          {React.createElement(skill.icon)}
        </Icon>
        <Box ml="3">
          <Text color={"text-secondary"}>{skill.name}</Text>
        </Box>
      </Stack>
    );
  };

  return (
    <Box py={10} userSelect="none">
      <SectionHeader label="Skills" />
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
              {FE_SKILLS.map((skill: Skill, i) => renderSkillBox(skill, i))}
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
              {BE_SKILLS.map((skill: Skill, i: number) =>
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
            {TOOLS_SKILLS.map((tool: Skill, i) => renderSkillBox(tool, i))}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TechStacks;
