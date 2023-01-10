import { ExternalLinkIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "../Hero/Hero.module.css";

const projectData = [
  {
    id: 1,
    name: "Capsule- Tata 1mg (clone)",
    image: "./images/capsule.png",
    discription:
      "Capsule (Tata 1mg) provides services, including e-pharmacy, diagnostics, e-consultation and health content. Get your allopathic, ayurvedic, homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home.",
    techStack:
      "Tech Stack : React.js | Chakra UI | HTML5 | CSS3 | Javascript | Render Deployed JSON Server",
    detail: "A Solo project, built in 6 days.",
    sourceCode: "https://github.com/AshokPrjapati/Capsule-1mg_clone",
    liveLink: "capsule-six.vercel.app",
  },
  {
    id: 2,
    name: "MiddleMan- Buffer (clone)",
    image: "./images/middle-man.png",
    discription:
      "Buffer provides services, including social-media management, content publishing and make online presence. Provides multiple packages for yearly, monthly ads weekly basis. Make Social Media handling easy and saves a lot a time.",
    techStack: "Tech Stack : HTML5 | CSS3 | Javascript | Mock API Server",
    detail: "A Collaborative project, built in 6 days by 4 member",
    sourceCode: "https://github.com/AshokPrjapati/MiddleMan_Buffer-Clone",
    liveLink: "https://cozy-banoffee-f5b339.netlify.app/",
  },
];

const Projects = () => {
  const bg = useColorModeValue("bg.1", "gray.900");
  const clr = useColorModeValue("text.1", "white");
  return (
    <Container maxW={"5xl"}>
      <Heading
        textAlign={"center"}
        py={"40px"}
        color={"text.1"}
        fontWeight={500}
        borderBottom="2px solid #e11d48"
      >
        Projects
      </Heading>
      <Stack
        justify={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        {projectData.map((p) => (
          <Center py={6} key={p.id}>
            <Box
              key={p.id}
              maxW={"445px"}
              w={"full"}
              bg={bg}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                // pos={"relative"}
              >
                <Image src={p.image} layout={"fill"} alt={"project-preview"} />
              </Box>
              <Stack>
                <Heading color={clr} fontSize={"2xl"} fontFamily={"body"}>
                  {p.name}
                </Heading>
                <Text color={"text.2"}>{p.discription}</Text>
                <Text
                  color={"text.3"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                  className={styles.lineClamp}
                >
                  {p.techStack}
                </Text>
                <Text color={"text.2"} pb={"15px"}>
                  {p.detail}
                </Text>
              </Stack>
              <Divider />
              <Stack
                mt={6}
                direction={"row"}
                spacing={4}
                align={"center"}
                justify={"space-between"}
                zIndex={1}
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
              </Stack>
            </Box>
          </Center>
        ))}
      </Stack>
    </Container>
  );
};

export default Projects;
