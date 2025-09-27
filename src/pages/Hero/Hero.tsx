import React from "react";
import { Stack, Flex, Box, Heading, Text, Image, Link } from "@chakra-ui/react";

import Typewriter from "typewriter-effect";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SIcons from "./SIcons";
import { getResumeDownloadLink } from "../../utils/commonUtils";

const Hero: React.FC = () => {
  const renderTypeWriterText = () => {
    return (
      <Typewriter
        options={{
          strings: [
            "Full Stack Web Developer !",
            "A Tech Enthusiastic !",
            "Mern Stack Developer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    );
  };

  const renderSummaryText = () => {
    return (
      <Text color="text.1">
        An enthusiastic Full Stack Web Developer with a strong set of technical
        as well as non-technical skills and a dedication towards creating useful
        and interactive web applications.
      </Text>
    );
  };

  const renderHeading = () => {
    return (
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
      >
        <Text color="text.1" as="span">
          Hi, I am Ashok Kumar
        </Text>
        <br />
        <Text as="span" color="text.3">
          {renderTypeWriterText()}
        </Text>
      </Heading>
    );
  };

  const renderResumeDownloadButton = () => {
    const downloadLink = getResumeDownloadLink();
    return (
      <Box textAlign={{ base: "center", md: "left" }}>
        <Link
          className="button"
          href="https://drive.google.com/file/d/1P27IWs5s4X1JBKLqUAMapYS6an5D_wvH/view?usp=sharing"
          isExternal
          _hover={{ textDecor: "none", bg: "text.3", color: "#fff" }}
          onClick={() => downloadLink.click()}
          color="text.3"
        >
          {<ArrowForwardIcon />} Resume
        </Link>
      </Box>
    );
  };

  const renderIntroPart = () => {
    return (
      <Stack
        flex={1}
        spacing={{ base: 5, md: 10 }}
        textAlign={{ base: "center", md: "left" }}
        gap="1rem"
      >
        {renderHeading()}
        {renderSummaryText()}
        {renderResumeDownloadButton()}
        <SIcons />
      </Stack>
    );
  };

  const renderProfileImage = () => {
    return (
      <Flex
        flex={1}
        justify="center"
        align="center"
        p="20px"
        maxH="20rem"
        maxW="20rem"
        rounded="2xl"
        m="auto"
        overflow="hidden"
        position="relative"
      >
        <Box
          position="absolute"
          top="1.5rem"
          textAlign="center"
          bg="text.3"
          width="90%"
          height="90%"
          borderRadius="50%"
        />
        <Image
          alt="Hero Image"
          fit="cover"
          align="center"
          w="100%"
          h="100%"
          src="./profile.png"
          position="relative"
          zIndex={8}
        />
      </Flex>
    );
  };

  return (
    <Stack
      spacing={8 as number}
      py="1rem"
      direction={["column-reverse", "row"]}
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      gap={20}
    >
      {renderIntroPart()}
      {renderProfileImage()}
    </Stack>
  );
};

export default Hero;
