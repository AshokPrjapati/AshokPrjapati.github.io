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
import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import styles from "../Hero/Hero.module.css";
import projectData from "./projectData";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const bg = useColorModeValue("bg.1", "gray.900");
  const clr = useColorModeValue("text.1", "white");
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
        justify={"space-between"}
        // align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 25 }}
      >
        {projectData.map((p) => (
          <Center py={6} key={p.id}>
            <Box
              key={p.id}
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
                align="center"
                mt={-6}
                mx={-6}
                mb={6}
              >
                <Image
                  h={"210px"}
                  src={p.src}
                  layout={"fill"}
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
                  {p.name}
                </Heading>
                <Text
                  color={"text.2"}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className={styles.lineClampDesc}
                >
                  {p.discription}
                </Text>
                <Text
                  color={"text.3"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                  className={styles.lineClamp}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {p.techStack}
                </Text>
                <Text
                  color={"text.2"}
                  pb={"15px"}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {p.detail}
                </Text>
              </Stack>
              <Divider />
              <Box
                mt={6}
                className={styles.pc}
                zIndex={1}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Link
                  href={p.sourceCode}
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
                  href={p.liveLink}
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
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
