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
  const renderProjectContent = (project: ProjectData) => {
    return (
      <Center
        key={project.id}
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
            src={project.src}
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
              {project.name}
            </Heading>
            <Text
              color={"text-secondary"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="lineClampDesc"
            >
              {project.description}
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
              {project.techStack}
            </Text>
            <Text
              color={"text-secondary"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              {project.detail}
            </Text>
          </Stack>
          <Divider />
          <Box
            mt={6}
            className="between-center"
            zIndex={1}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Link
              href={project.sourceCode}
              isExternal
              _hover={{ textDecor: "none" }}
            >
              <Button
                leftIcon={<FaGithub />}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg="secondary"
              >
                Source Code
              </Button>
            </Link>
            <Link
              href={project.liveLink}
              isExternal
              _hover={{ textDecor: "none" }}
            >
              <Button
                leftIcon={<ExternalLinkIcon />}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg="secondary"
              >
                Live
              </Button>
            </Link>
          </Box>
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
