import React from "react";
import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  HStack,
  Container,
  Circle,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import SIcons from "./SIcons";
import { getResumeDownloadLink } from "../../utils/commonUtils";
import { RESUME_DRIVE_LINK } from "../../constants/constant";

const Hero: React.FC = () => {
  const renderTypeWriterText = () => {
    return (
      <Typewriter
        options={{
          strings: [
            "Full Stack Web Developer",
            "React & Node.js Expert",
            "MERN Stack Developer",
            "Tech Enthusiast",
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    );
  };

  const renderMainHeading = () => {
    return (
      <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
        <Box>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="text-secondary"
            fontWeight="500"
            mb={2}
          >
            👋 Hello, I'm
          </Text>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            bgGradient="gradient-primary"
            bgClip="text"
            _hover={{
              bgGradient: "gradient-primary",
              transition: "all 0.3s ease",
            }}
          >
            Ashok Kumar
          </Heading>
        </Box>

        <Box minH="60px">
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            color="text-primary"
            fontWeight="600"
          >
            {renderTypeWriterText()}
          </Text>
        </Box>
      </VStack>
    );
  };

  const renderDescription = () => {
    return (
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="text-secondary"
        lineHeight="1.7"
        maxW="500px"
        textAlign={{ base: "center", md: "left" }}
      >
        Passionate Full Stack Developer specializing in modern web technologies.
        I create scalable, user-friendly applications with a focus on clean code
        and exceptional user experiences.
      </Text>
    );
  };

  const renderActionButtons = () => {
    const downloadLink = getResumeDownloadLink();

    return (
      <HStack
        spacing={4}
        flexWrap="wrap"
        justify={{ base: "center", md: "flex-start" }}
        gap={4}
      >
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <Button
            size="lg"
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
            rightIcon={<ArrowForwardIcon />}
            borderRadius="full"
            px={8}
            py={6}
          >
            Get In Touch
          </Button>
        </Link>

        <Button
          size="lg"
          variant="outline"
          borderColor="primary"
          color="primary"
          _hover={{
            bg: "primary",
            color: "white",
            transform: "translateY(-2px)",
          }}
          _active={{
            transform: "translateY(0)",
          }}
          transition="all 0.3s ease"
          rightIcon={<DownloadIcon />}
          borderRadius="full"
          px={8}
          py={6}
          as="a"
          href={RESUME_DRIVE_LINK}
          target="_blank"
          onClick={() => downloadLink.click()}
        >
          Download CV
        </Button>
      </HStack>
    );
  };

  const renderProfileImage = () => {
    return (
      <Box position="relative" p={8}>
        {/* Floating elements */}
        <Circle
          size="20px"
          bg="primary"
          position="absolute"
          top="10%"
          left="10%"
          animation="float 3s ease-in-out infinite"
        />
        <Circle
          size="15px"
          bg="secondary"
          position="absolute"
          top="20%"
          right="15%"
          animation="float 3s ease-in-out infinite 1s"
        />
        <Circle
          size="12px"
          bg="accent"
          position="absolute"
          bottom="30%"
          left="5%"
          animation="float 3s ease-in-out infinite 2s"
        />

        {/* Main profile container */}
        <Box
          position="relative"
          w={{ base: "280px", md: "350px", lg: "400px" }}
          h={{ base: "280px", md: "350px", lg: "400px" }}
          mx="auto"
        >
          {/* Gradient background circle */}
          <Box
            position="absolute"
            top="20px"
            left="20px"
            right="20px"
            bottom="20px"
            bgGradient="gradient-bg"
            borderRadius="full"
            filter="blur(1px)"
            opacity={0.7}
          />

          {/* Profile image container */}
          <Flex
            position="relative"
            zIndex={2}
            justify="center"
            align="center"
            w="100%"
            h="100%"
            borderRadius="full"
            overflow="hidden"
            bg="bg-card"
            boxShadow="shadow-accent"
            p="20px"
            _hover={{
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          >
            <Image
              alt="Ashok Kumar - Full Stack Developer"
              src="./profile.png"
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="full"
              transition="all 0.3s ease"
            />
          </Flex>
        </Box>
      </Box>
    );
  };

  const renderStatsCard = () => {
    const stats = [
      { label: "Projects", value: "15+" },
      { label: "Experience", value: "2+ Years" },
      { label: "Technologies", value: "20+" },
    ];

    return (
      <Box
        bg="bg-card"
        borderRadius="2xl"
        p={6}
        boxShadow="hero-card-shadow"
        border="1px solid"
        borderColor="border-primary"
        w="100%"
        maxW="400px"
      >
        <HStack spacing={8} justify="space-around">
          {stats.map((stat, index) => (
            <VStack key={index} spacing={1}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="primary"
              >
                {stat.value}
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="text-secondary"
                textAlign="center"
              >
                {stat.label}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Box>
    );
  };

  return (
    <Container maxW="8xl" py={4}>
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: 12, lg: 16 }}
        align="center"
        minH="100vh"
        justify="center"
      >
        {/* Left Content */}
        <VStack
          flex={1}
          spacing={8}
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
          maxW={{ base: "100%", lg: "600px" }}
        >
          {renderMainHeading()}
          {renderDescription()}
          {renderActionButtons()}

          {/* Social Icons */}
          <Box pt={4}>
            <SIcons />
          </Box>

          {/* Stats Card */}
          <Box pt={4} w="100%">
            {renderStatsCard()}
          </Box>
        </VStack>

        {/* Right Content - Profile Image */}
        <Box flex={1} display="flex" justifyContent="center">
          {renderProfileImage()}
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
