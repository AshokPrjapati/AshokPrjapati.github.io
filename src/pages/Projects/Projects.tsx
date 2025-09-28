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
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import projectData from "../../constants/projectData";
import { ProjectData } from "../../types/interface";
import SectionHeader from "../../Components/SectionHeader";

const Projects = () => {
  const renderProjectContent = (project: ProjectData) => {
    return (
      <Center py={6} key={project.id}>
        <Box
          key={project.id}
          maxW={"445px"}
          bg="bg-card"
          boxShadow={"2xl"}
          rounded={"md"}
          p={4}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={-6}
            mx={-6}
            mb={6}
          >
            <Image
              h={"210px"}
              src={project.src}
              alt={"project-preview"}
              data-aos="fade-up"
              objectFit={"cover"}
              data-aos-anchor-placement="bottom-bottom"
            />
          </Box>
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
              color={"text.secondary"}
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
              pb={"15px"}
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
        </Box>
      </Center>
    );
  };

  return (
    <>
      <SectionHeader label="Projects" />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        justifyItems={"center"}
        alignItems={"center"}
        gap={{ base: 8, md: 10 }}
        py={{ base: 18, md: 25 }}
      >
        {projectData.map((project) => renderProjectContent(project))}
      </Grid>
    </>
  );
};

export default Projects;
