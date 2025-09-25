import { ExternalLinkIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Container,
  Stack,
  Box,
  Center,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Divider,
  Button,
  Link,
  Grid,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import projectData from "../../constants/projectData";
import { ProjectData } from "../../types/interface";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const bg = useColorModeValue("bg.1", "gray.900");
  const clr = useColorModeValue("text.1", "white");

  const renderProjectContent = (project: ProjectData) => {
    return (
      <Center py={6} key={project.id}>
        <Box
          key={project.id}
          maxW={"445px"}
          bg={bg}
          boxShadow={"2xl"}
          rounded={"md"}
          p={4}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
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
              color={clr}
              fontSize={"2xl"}
              fontFamily={"body"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              {project.name}
            </Heading>
            <Text
              color={"text.2"}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="lineClampDesc"
            >
              {project.discription}
            </Text>
            <Text
              color={"text.3"}
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
              color={"text.2"}
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
                colorScheme={"red"}
                bg={"text.3"}
                _hover={{ bg: "rgb(3, 102, 3)" }}
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
                colorScheme={"red"}
                bg={"text.3"}
                _hover={{ bg: "rgb(3, 102, 3)" }}
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
    <Container maxW={"5xl"}>
      <Heading
        w={"max-content"}
        m="auto"
        textAlign={"center"}
        p={"65px 10px 10px 10px"}
        color={"text.1"}
        fontWeight={500}
        borderBottom="3px solid #e11d48"
      >
        Projects
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        justifyItems={"center"}
        alignItems={"center"}
        gap={{ base: 8, md: 10 }}
        py={{ base: 18, md: 25 }}
      >
        {projectData.map((project) => renderProjectContent(project))}
      </Grid>
    </Container>
  );
};

export default Projects;
