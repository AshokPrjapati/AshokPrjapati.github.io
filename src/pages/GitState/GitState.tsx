import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import {
  Image,
  Link,
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
  Badge,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaCode,
  FaCalendarAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";
import SectionHeader from "../../Components/SectionHeader";
import {
  gitContributeStates,
  gitRepoLanguagesStates,
} from "../../constants/constant";
import { GITHUB_LINK, GITHUB_USERNAME } from "../../constants/links";

function GitState() {
  const renderGitCalendar = () => {
    return (
      <Card
        bg="bg-surface"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        p={8}
        _hover={{
          boxShadow: "shadow-xl",
          borderColor: "primary",
        }}
        transition="all 0.3s ease"
      >
        <VStack spacing={6}>
          <VStack spacing={2} textAlign="center">
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="text-primary"
            >
              GitHub Contribution Graph
            </Heading>
            <Text fontSize="md" color="text-secondary">
              My coding activity throughout the year
            </Text>
          </VStack>

          <Box
            w="100%"
            px={14}
            py={4}
            bg="card-bg"
            borderRadius="2xl"
            border="1px solid"
            borderColor="border-secondary"
          >
            <GitHubCalendar
              style={{
                width: "100%",
                margin: "auto",
              }}
              username={GITHUB_USERNAME}
              blockSize={20}
              fontSize={12}
              blockRadius={5}
              blockMargin={6}
              showWeekdayLabels
              hideColorLegend={false}
            >
              <ReactTooltip delayShow={20} html />
            </GitHubCalendar>
          </Box>
        </VStack>
      </Card>
    );
  };

  const renderCardBody = (
    title: string,
    description: string,
    src: string,
    icon: any,
    color: string
  ) => {
    return (
      <CardBody p={6}>
        <VStack spacing={6}>
          {/* Header */}
          <HStack spacing={3} w="100%">
            <Icon as={icon} w={6} h={6} color={color} />
            <VStack spacing={1} align="start" flex={1}>
              <Text fontSize="lg" fontWeight="bold" color="text-primary">
                {title}
              </Text>
              <Text fontSize="sm" color="text-muted">
                {description}
              </Text>
            </VStack>
            <Badge
              bg={color}
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="medium"
            >
              Live
            </Badge>
          </HStack>

          {/* Stats Image */}
          <Box
            w="100%"
            bg="card-bg"
            borderRadius="2xl"
            p={4}
            border="1px solid"
            borderColor="border-secondary"
            overflow="hidden"
          >
            <Image
              src={src}
              alt={title}
              w="100%"
              h="auto"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.02)",
              }}
            />
          </Box>
        </VStack>
      </CardBody>
    );
  };

  const renderStatsCard = (
    title: string,
    description: string,
    src: string,
    icon: any,
    color: string
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
        cursor="pointer"
        as={Link}
        href={GITHUB_LINK}
        isExternal
        _hover={{
          textDecor: "none",
          transform: "translateY(-8px)",
          boxShadow: "shadow-xl",
          borderColor: color,
        }}
      >
        {renderCardBody(title, description, src, icon, color)}
      </Card>
    );
  };

  const renderGitHubOverview = () => {
    const stats = [
      {
        icon: FaCode,
        title: "1400+",
        description: "Hours Coded",
        color: "primary",
      },
      {
        icon: FaCodeBranch,
        title: "1000+",
        description: "Contributions",
        color: "secondary",
      },
      {
        icon: FaStar,
        title: "15+",
        description: "Public Repos",
        color: "accent",
      },
      {
        icon: FaCalendarAlt,
        title: "2+ Years",
        description: "Experience",
        color: "success",
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
        <VStack spacing={8}>
          <VStack spacing={2} textAlign="center">
            <HStack spacing={3} justify="center">
              <Icon as={FaGithub} w={8} h={8} color="primary" />
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="text-primary"
              >
                GitHub Statistics
              </Heading>
            </HStack>
            <Text fontSize="lg" color="text-secondary" maxW="600px">
              A comprehensive overview of my coding journey and contributions
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="100%">
            {stats.map((stat, index) => (
              <VStack
                key={index}
                spacing={3}
                p={6}
                bg="bg-surface"
                borderRadius="2xl"
                border="1px solid"
                borderColor="border-secondary"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  borderColor: stat.color,
                  bg: "card-hover",
                }}
              >
                <Icon as={stat.icon} w={8} h={8} color={stat.color} />
                <VStack spacing={1}>
                  <Text fontSize="xl" fontWeight="bold" color="text-primary">
                    {stat.title}
                  </Text>
                  <Text fontSize="sm" color="text-muted" textAlign="center">
                    {stat.description}
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
    <Container maxW="8xl" py={10}>
      <SectionHeader label="GitHub Analytics" />

      <VStack spacing={16} mt={16}>
        {/* GitHub Overview */}
        {renderGitHubOverview()}

        {/* GitHub Calendar */}
        {renderGitCalendar()}

        {/* GitHub Stats Cards */}
        <VStack spacing={8} w="100%">
          <Box textAlign="center">
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="text-primary"
              mb={4}
            >
              Detailed Statistics
            </Heading>
            <Text fontSize="lg" color="text-secondary" maxW="600px" mx="auto">
              Deep dive into my coding patterns and language preferences
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="100%">
            {renderStatsCard(
              "Language Distribution",
              "Most used programming languages",
              gitRepoLanguagesStates,
              FaCode,
              "primary"
            )}
            {renderStatsCard(
              "Contribution Streak",
              "Daily coding activity and streaks",
              gitContributeStates,
              FaCodeBranch,
              "secondary"
            )}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Container>
  );
}

export default GitState;
