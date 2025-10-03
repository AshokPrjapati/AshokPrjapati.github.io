import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Link,
  Flex,
  Container,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Icon,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCalendarAlt,
} from "react-icons/fa";
import projectData from "../../constants/projectData";
import { ProjectData } from "../../types/interface";
import SectionHeader from "../../Components/SectionHeader";

const Projects = () => {
  const renderProjectStats = (project: ProjectData) => {
    // Extract team info from detail field
    const isCollaborative = project.detail
      .toLowerCase()
      .includes("collaborative");
    const days = project.detail.match(/(\d+)\s*days?/i)?.[1] || "N/A";
    const members = project.detail.match(/(\d+)\s*members?/i)?.[1] || "1";

    return (
      <HStack spacing={4} justify="center" w="100%">
        <VStack spacing={1}>
          <Icon as={FaCalendarAlt} color="primary" w={4} h={4} />
          <Text fontSize="xs" color="text-muted" fontWeight="medium">
            {days} Days
          </Text>
        </VStack>
        <VStack spacing={1}>
          <Icon as={FaCode} color="secondary" w={4} h={4} />
          <Text fontSize="xs" color="text-muted" fontWeight="medium">
            {isCollaborative ? `${members} Members` : "Solo"}
          </Text>
        </VStack>
      </HStack>
    );
  };

  const renderTechStack = (techStack: string) => {
    // Extract technologies from the tech stack string
    const techs = techStack
      .replace(/Tech Stack\s*:\s*/i, "")
      .split("|")
      .map((tech) => tech.trim())
      .filter(Boolean);

    return (
      <Flex wrap="wrap" gap={2} justify="center">
        {techs.slice(0, 4).map((tech, index) => (
          <Badge
            key={index}
            variant="subtle"
            colorScheme={
              index % 3 === 0 ? "blue" : index % 3 === 1 ? "purple" : "cyan"
            }
            px={2}
            py={1}
            borderRadius="md"
            fontSize="2xs"
            fontWeight="medium"
          >
            {tech}
          </Badge>
        ))}
        {techs.length > 4 && (
          <Badge
            variant="outline"
            colorScheme="gray"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="2xs"
            fontWeight="medium"
          >
            +{techs.length - 4} more
          </Badge>
        )}
      </Flex>
    );
  };

  const renderActionButtons = (sourceCode: string, liveLink: string) => {
    return (
      <HStack spacing={3} w="100%">
        <Link
          href={sourceCode}
          isExternal
          _hover={{ textDecor: "none" }}
          flex={1}
        >
          <Button
            leftIcon={<FaGithub />}
            size="sm"
            variant="outline"
            borderColor="border-accent"
            color="text-secondary"
            _hover={{
              bg: "primary",
              color: "white",
              borderColor: "primary",
              transform: "translateY(-2px)",
              boxShadow: "shadow-md",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.3s ease"
            borderRadius="lg"
            w="100%"
            fontWeight="medium"
          >
            Code
          </Button>
        </Link>
        <Link
          href={liveLink}
          isExternal
          _hover={{ textDecor: "none" }}
          flex={1}
        >
          <Button
            leftIcon={<FaExternalLinkAlt />}
            size="sm"
            bg="primary"
            color="white"
            _hover={{
              bg: "secondary",
              transform: "translateY(-2px)",
              boxShadow: "shadow-primary",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.3s ease"
            borderRadius="lg"
            w="100%"
            fontWeight="medium"
          >
            Live Demo
          </Button>
        </Link>
      </HStack>
    );
  };

  const renderProjectCard = (project: ProjectData, index: number) => {
    const { id, name, description, src, sourceCode, liveLink } = project;

    return (
      <Card
        key={id}
        bg="bg-surface"
        maxW="400px"
        w="100%"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: "translateY(-12px)",
          boxShadow: "shadow-xl",
          borderColor:
            index % 3 === 0
              ? "primary"
              : index % 3 === 1
              ? "secondary"
              : "accent",
        }}
        cursor="pointer"
      >
        {/* Project Image */}
        <Box position="relative" overflow="hidden">
          <Image
            src={src}
            alt={`${name} preview`}
            w="100%"
            h="220px"
            objectFit="cover"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
          {/* Overlay gradient */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient="linear(to-b, transparent 0%, rgba(0,0,0,0.1) 100%)"
          />
        </Box>

        <CardBody p={6}>
          <VStack spacing={4} align="stretch">
            {/* Project Title */}
            <Heading
              fontSize="xl"
              fontWeight="bold"
              color="text-primary"
              lineHeight="1.3"
              noOfLines={2}
            >
              {name}
            </Heading>

            {/* Project Description */}
            <Text
              fontSize="sm"
              color="text-secondary"
              lineHeight="1.6"
              noOfLines={3}
            >
              {description}
            </Text>

            {/* Tech Stack */}
            {renderTechStack(project.techStack)}

            {/* Project Stats */}
            {renderProjectStats(project)}
          </VStack>
        </CardBody>

        <CardFooter pt={0} pb={6} px={6}>
          {renderActionButtons(sourceCode, liveLink)}
        </CardFooter>
      </Card>
    );
  };

  const renderFeaturedProject = () => {
    const featuredProject = projectData[0]; // Use first project as featured

    return (
      <Card
        bg="card-bg"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        mb={16}
        _hover={{
          boxShadow: "shadow-xl",
          borderColor: "primary",
        }}
        transition="all 0.3s ease"
      >
        <Flex direction={{ base: "column", lg: "row" }} align="stretch">
          {/* Featured Project Image */}
          <Box flex="1" position="relative">
            <Image
              src={featuredProject.src}
              alt={`${featuredProject.name} preview`}
              w="100%"
              h={{ base: "250px", lg: "410px" }}
              objectFit="cover"
            />
            <Badge
              position="absolute"
              top={4}
              left={4}
              bg="primary"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="bold"
            >
              Featured Project
            </Badge>
          </Box>

          {/* Featured Project Content */}
          <VStack flex="1" spacing={6} align="stretch" p={8} justify="center">
            <VStack spacing={4} align="stretch">
              <Heading
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color="text-primary"
                lineHeight="1.2"
              >
                {featuredProject.name}
              </Heading>

              <Text fontSize="md" color="text-secondary" lineHeight="1.7">
                {featuredProject.description}
              </Text>

              {/* Tech Stack for Featured */}
              <Box>
                <Text
                  fontSize="sm"
                  color="text-muted"
                  mb={3}
                  fontWeight="medium"
                >
                  Technologies Used:
                </Text>
                {renderTechStack(featuredProject.techStack)}
              </Box>
            </VStack>

            <VStack spacing={4}>
              {renderProjectStats(featuredProject)}

              <Box w="100%" maxW="300px">
                {renderActionButtons(
                  featuredProject.sourceCode,
                  featuredProject.liveLink
                )}
              </Box>
            </VStack>
          </VStack>
        </Flex>
      </Card>
    );
  };

  return (
    <Container maxW="8xl" py={20}>
      <SectionHeader label="Featured Projects" />

      <VStack spacing={16} mt={16}>
        {/* Featured Project */}
        {renderFeaturedProject()}

        {/* Other Projects Grid */}
        <VStack spacing={8} w="100%">
          <Box textAlign="center">
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="text-primary"
              mb={4}
            >
              More Projects
            </Heading>
            <Text fontSize="lg" color="text-secondary" maxW="600px" mx="auto">
              Explore my other projects showcasing different technologies and
              approaches
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            w="100%"
            justifyItems="center"
          >
            {projectData
              .slice(1)
              .map((project, index) => renderProjectCard(project, index + 1))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Projects;
