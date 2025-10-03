import React, { ReactElement } from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Image,
  CardFooter,
  Link,
  useClipboard,
  Tooltip,
  IconButton,
  Icon,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import SectionHeader from "../../Components/SectionHeader";
import { ReactComponent as CodingIcon } from "../../images/techIcons/coding.svg";
import { ReactComponent as DsaIcon } from "../../images/techIcons/dsa.svg";
import { ReactComponent as ProjectIcon } from "../../images/techIcons/project.svg";
import { ReactComponent as Github1Icon } from "../../images/techIcons/github1.svg";
import {
  LINKEDIN_LINK,
  PROFILE_EMAIL,
  GITHUB_LINK,
} from "../../constants/links";

const About: React.FC = () => {
  const { hasCopied, onCopy } = useClipboard(PROFILE_EMAIL);

  const renderMainTitle = () => {
    return (
      <VStack spacing={6} align={{ base: "center", lg: "flex-start" }}>
        <Box textAlign={{ base: "center", lg: "left" }}>
          <Heading
            lineHeight={1.2}
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl", xl: "5xl" }}
            mb={4}
          >
            <Text as="span" color="text-primary" display="block">
              Full Stack
            </Text>
            <Text
              as="span"
              bgGradient="linear(to-r, primary, secondary, accent)"
              bgClip="text"
              _hover={{
                bgGradient: "linear(to-r, secondary, accent, primary)",
                transition: "all 0.3s ease",
              }}
            >
              Web Developer
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color="text-secondary"
            lineHeight="1.8"
            maxW="600px"
          >
            Passionate about creating innovative web solutions with modern
            technologies. I bring ideas to life through clean, efficient code
            and exceptional user experiences.
          </Text>
        </Box>
      </VStack>
    );
  };

  const renderStatsGrid = () => {
    const stats = [
      {
        icon: CodingIcon,
        title: "Coding Hours",
        value: "1400+",
        description: "Hours of Programming",
        color: "primary",
      },
      {
        icon: DsaIcon,
        title: "DSA Problems",
        value: "700+",
        description: "Questions Solved",
        color: "secondary",
      },
      {
        icon: ProjectIcon,
        title: "Projects",
        value: "15+",
        description: "Completed Projects",
        color: "accent",
      },
      {
        icon: Github1Icon,
        title: "GitHub",
        value: "1000+",
        description: "Contributions",
        color: "primary",
      },
    ];

    return (
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} mt={8}>
        {stats.map((stat, index) => (
          <Box
            key={index}
            bg="bg-surface"
            p={6}
            borderRadius="2xl"
            textAlign="center"
            border="1px solid"
            borderColor="border-primary"
            boxShadow="shadow-lg"
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "shadow-xl",
              borderColor: stat.color,
            }}
          >
            <Icon
              as={stat.icon}
              w={12}
              h={12}
              color={stat.color}
              mb={4}
              mx="auto"
            />
            <Text fontSize="2xl" fontWeight="bold" color="text-primary" mb={2}>
              {stat.value}
            </Text>
            <Text fontSize="sm" color="text-secondary" fontWeight="medium">
              {stat.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    );
  };

  const renderProfileCard = () => {
    return (
      <Card
        bg="card-bg"
        maxW="500px"
        border="1px solid"
        borderColor="border-primary"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="shadow-lg"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "shadow-xl",
          borderColor: "primary",
        }}
      >
        <Box position="relative">
          {/* Profile content */}
          <CardBody p={8} position="relative" zIndex={2}>
            <VStack spacing={6} align="center">
              <VStack spacing={4} textAlign="center">
                <Text
                  fontSize="md"
                  color="text-secondary"
                  lineHeight="1.7"
                  px={4}
                >
                  Analytical and detail-oriented Full Stack Developer with a{" "}
                  <Text as="span" color="accent" fontWeight="bold">
                    B.Tech degree
                  </Text>{" "}
                  in Mechanical Engineering. Capable of writing production-ready
                  code and building scalable applications.
                </Text>

                <Image
                  src="./images/MERN-Stacks.png"
                  alt="MERN Stack"
                  maxW="280px"
                  borderRadius="xl"
                  mt={4}
                />
              </VStack>
            </VStack>
          </CardBody>

          <CardFooter pt={0} pb={8}>
            <HStack spacing={4} justify="center" w="100%">
              {renderSocialButton("GitHub", <FaGithub />, GITHUB_LINK)}
              {renderSocialButton("LinkedIn", <FaLinkedin />, LINKEDIN_LINK)}
              {renderSocialButton("Email", <EmailIcon />, undefined, onCopy)}
              {renderSocialButton("Phone", <FaPhone />, "tel:+919799191449")}
            </HStack>
          </CardFooter>
        </Box>
      </Card>
    );
  };

  const renderSocialButton = (
    label: string,
    icon: ReactElement,
    href?: string,
    onClick?: () => void
  ) => {
    const button = (
      <Tooltip
        label={label === "Email" && hasCopied ? "Email Copied!" : label}
        hasArrow
        bg="primary"
        color="white"
      >
        <IconButton
          aria-label={label}
          icon={icon}
          size="lg"
          borderRadius="full"
          bg="button-bg"
          color="text-secondary"
          border="1px solid"
          borderColor="border-primary"
          _hover={{
            bg: "primary",
            color: "white",
            transform: "translateY(-2px)",
            boxShadow: "shadow-primary",
            borderColor: "primary",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          transition="all 0.3s ease"
          onClick={onClick}
        />
      </Tooltip>
    );

    if (href) {
      return (
        <Link href={href} isExternal _hover={{ textDecor: "none" }}>
          {button}
        </Link>
      );
    }

    return button;
  };

  return (
    <Box
      py={10}
      px={{ base: 4, md: 8 }}
      w="100%"
      maxW="100%"
      overflow="hidden"
      position="relative"
    >
      <SectionHeader label="About Me" />
      <Flex
        direction={{ base: "column", xl: "row" }}
        justify="center"
        align="center"
        gap={16}
      >
        {/* Left side - Title and Stats */}
        <Box flex={1} maxW={{ base: "100%", xl: "600px" }}>
          {renderMainTitle()}
          {renderStatsGrid()}
        </Box>

        {/* Right side - Profile Card */}
        <Box flex="0 0 auto">{renderProfileCard()}</Box>
      </Flex>
    </Box>
  );
};

export default About;
