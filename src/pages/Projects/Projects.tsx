import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Stack,
  Box,
  Center,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  Link,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import projectData from "../../constants/projectData";
import { ProjectData } from "../../types/interface";
import SectionHeader from "../../Components/SectionHeader";

const Projects = () => {
  const renderProjectActionButtons = (
    link: string,
    icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    label: string
  ) => {
    return (
      <Link href={link} isExternal _hover={{ textDecor: "none" }}>
        <Button
          leftIcon={icon}
          rounded={"full"}
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          bg="secondary"
        >
          {label}
        </Button>
      </Link>
    );
  };

  const renderProjectContent = (project: ProjectData) => {
    const {
      id,
      name,
      description,
      techStack,
      detail,
      src,
      sourceCode,
      liveLink,
    } = project;

    return (
      <Center
        key={id}
        bg="bg-card"
        maxW={"445px"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        borderRadius={"20px 5px"}
      >
        <Stack gap={4} p={4}>
          <Image
            h={"210px"}
            src={src}
            alt={"project-preview"}
            data-aos="fade-up"
            objectFit={"cover"}
            data-aos-anchor-placement="bottom-bottom"
            borderRadius={"20px 5px"}
          />
          <Stack>
            <Heading
              color="text-primary"
              fontSize={"2xl"}
              fontFamily={"body"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              {name}
            </Heading>
            <Text
              color={"text-secondary"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="lineClampDesc"
            >
              {description}
            </Text>
            <Text
              color={"secondary"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
              className="lineClamp"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              {techStack}
            </Text>
            <Text
              color={"text-secondary"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              {detail}
            </Text>
          </Stack>
          <Divider />
          <Flex
            mt={6}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "space-between" }}
            gap={6}
            alignItems={{ base: "center", md: "center" }}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            {renderProjectActionButtons(
              sourceCode,
              <FaGithub />,
              "Source Code"
            )}
            {renderProjectActionButtons(liveLink, <ExternalLinkIcon />, "Live")}
          </Flex>
        </Stack>
      </Center>
    );
  };

  return (
    <Box py={10} w="100%" maxW="100%" overflow="hidden">
      <SectionHeader label="Projects" />
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="2.5rem"
        flexWrap="wrap"
        m="auto"
        maxW="100%"
      >
        {projectData.map((project) => renderProjectContent(project))}
      </Flex>
    </Box>
  );
};

export default Projects;
