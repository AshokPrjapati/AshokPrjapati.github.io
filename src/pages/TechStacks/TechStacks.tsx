import {
  Text,
  Box,
  Icon,
  Container,
  VStack,
  SimpleGrid,
  Badge,
  Card,
} from "@chakra-ui/react";
import { Skill } from "../../types/interface";
import SectionHeader from "../../Components/SectionHeader";
import { BE_SKILLS, FE_SKILLS, TOOLS_SKILLS } from "../../constants/skillsData";

const TechStacks = () => {
  const renderSkillCategoryCard = (
    title: string,
    skills: Skill[],
    color: string,
    gridCols: any
  ) => {
    return (
      <Card
        bg="bg-surface"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "shadow-xl",
          borderColor: color,
        }}
        p={8}
      >
        <VStack spacing={6} align="center">
          {/* Category Header */}
          <Box textAlign="center">
            <Badge
              bg={color}
              color="white"
              px={6}
              py={3}
              borderRadius="full"
              fontSize="lg"
              fontWeight="600"
              textTransform="none"
              mb={2}
            >
              {title}
            </Badge>
            <Text fontSize="sm" color="text-muted" fontWeight="medium">
              {skills.length} Technologies
            </Text>
          </Box>

          {/* Skills Grid */}
          <SimpleGrid columns={gridCols} spacing={4} w="100%">
            {skills.map((skill: Skill, index: number) => (
              <Box
                key={index}
                bg="bg-card"
                p={4}
                borderRadius="xl"
                textAlign="center"
                border="1px solid"
                borderColor="border-secondary"
                boxShadow="shadow-sm"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "shadow-md",
                  borderColor: color,
                  bg: "card-hover",
                }}
                cursor="pointer"
              >
                <VStack spacing={3}>
                  <Icon
                    as={skill.icon}
                    w={{ base: "40px", md: "48px" }}
                    h={{ base: "40px", md: "48px" }}
                    color={color}
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "scale(1.1)",
                    }}
                  />
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color="text-secondary"
                    fontWeight="medium"
                    lineHeight="1.2"
                  >
                    {skill.name}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Card>
    );
  };

  const renderFeaturedSkillsOverview = () => {
    const featuredSkills = [
      {
        name: "React.js",
        category: "Frontend",
        icon: FE_SKILLS[0].icon,
        color: "skill-frontend",
      },
      {
        name: "Node.js",
        category: "Backend",
        icon: BE_SKILLS[2].icon,
        color: "skill-backend",
      },
      {
        name: "MongoDB",
        category: "Database",
        icon: BE_SKILLS[0].icon,
        color: "skill-database",
      },
      {
        name: "TypeScript",
        category: "Language",
        icon: FE_SKILLS[5].icon,
        color: "skill-language",
      },
    ];

    return (
      <Card
        bg="card-bg"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        p={8}
        mb={12}
      >
        <VStack spacing={6}>
          <Box textAlign="center">
            <Text fontSize="xl" fontWeight="bold" color="text-primary" mb={2}>
              Core Expertise
            </Text>
            <Text fontSize="md" color="text-secondary">
              Primary technologies I work with daily
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="100%">
            {featuredSkills.map((skill, index) => (
              <VStack
                key={index}
                spacing={3}
                p={6}
                borderRadius="2xl"
                bg="bg-surface"
                border="1px solid"
                borderColor="border-secondary"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: skill.color,
                  bg: "card-hover",
                }}
              >
                <Icon as={skill.icon} w="60px" h="60px" color={skill.color} />
                <VStack spacing={1}>
                  <Text fontSize="sm" fontWeight="bold" color="text-primary">
                    {skill.name}
                  </Text>
                  <Text fontSize="xs" color="text-muted">
                    {skill.category}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Card>
    );
  };

  return (
    <Container maxW="8xl" py={20}>
      <SectionHeader label="Skills & Technologies" />

      <VStack spacing={12} mt={16}>
        {/* Featured Skills Overview */}
        {renderFeaturedSkillsOverview()}

        {/* Skills Categories */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="100%">
          {renderSkillCategoryCard(
            "Frontend Development",
            FE_SKILLS,
            "skill-frontend",
            { base: 2, md: 3 }
          )}
          {renderSkillCategoryCard(
            "Backend Development",
            BE_SKILLS,
            "skill-backend",
            { base: 2, md: 2 }
          )}
        </SimpleGrid>

        {/* Tools & Deployment */}
        <Box w="100%">
          {renderSkillCategoryCard(
            "Tools & Deployment",
            TOOLS_SKILLS,
            "skill-tools",
            { base: 2, md: 3, lg: 4 }
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default TechStacks;
