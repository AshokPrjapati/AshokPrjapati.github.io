import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  CardFooter,
  Link,
  useClipboard,
  Tooltip,
  IconButton,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./about.module.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { hasCopied, onCopy } = useClipboard("ashok.prjapati97@gmail.com");
  return (
    <Container maxW="5xl" p="65px 10px">
      <Heading
        w="max-content"
        m="auto"
        textAlign="center"
        p="0 10px 10px 10px"
        color="text.1"
        fontWeight="500"
        borderBottom="3px solid #e11d48"
        mb="40px"
      >
        About
      </Heading>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems="center"
        gap="2rem"
      >
        <Stack spacing="1rem" data-aos="fade-up-right">
          <Heading lineHeight={1.2} fontWeight={600}>
            <Text
              color={"text.1"}
              as={"span"}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              FULL STACK
            </Text>
            <br />
            <Text
              as={"span"}
              color={"text.3"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            >
              WEB DEVELOPER
            </Text>
          </Heading>
          <Grid templateColumns={"repeat(2, 1fr)"} gap="1rem" color={"text.1"}>
            <Box className={styles.exp}>
              <Image src="/images/coding.svg" />
              <Box fontWeight={"medium"}>
                <Text>Coding</Text>
                <Text>
                  {" "}
                  <span>1400+</span> Hours
                </Text>
              </Box>
            </Box>
            <Box className={styles.exp}>
              <Image src="/images/dsa.svg" />
              <Box fontWeight={"medium"}>
                <Text>DSA</Text>
                <Text fontWeight={"medium"}>
                  <span>700+</span> Question Solved
                </Text>
              </Box>
            </Box>
            <Box className={styles.exp}>
              <Image src="/images/project.svg" />
              <Box fontWeight={"medium"}>
                <Text>Projects</Text>
                <Text>
                  <span>5+</span> Completed
                </Text>
              </Box>
            </Box>
            <Box className={styles.exp}>
              <Image src="/images/github1.svg" />
              <Box fontWeight={"medium"}>
                <Text>Github</Text>
                <Text fontWeight={"medium"}>
                  <span>1000+</span> Contributions
                </Text>
              </Box>
            </Box>
          </Grid>
        </Stack>
        <Card
          className={styles.about}
          maxW="md"
          color={"text.1"}
          data-aos="fade-up-left"
          border="1px solid #fff"
        >
          <CardBody textAlign={"left"}>
            <Text>
              Analytical and detail-oriented aspiring Full Stack Developer, with
              a<span className={styles.degree}> B.tech degree</span> in
              Mechanical Engineering. Capable of writing production-ready code
              and building single page applications.
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="./images/MERN-Stacks.png"
            alt=""
            data-aos="fade-up-left"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Link
              _hover={{ textDecor: "none" }}
              href="https://github.com/AshokPrjapati"
              isExternal
            >
              <IconButton
                className={styles.icon}
                colorScheme="none"
                icon={<FaGithub />}
                bg="inherit"
                color="text.3"
                border="1px solid"
                borderColor="text.3"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                boxShadow={"lg"}
                _hover={{
                  bg: "text.3",
                  color: "#fff",
                }}
                aria-label="github"
              />
            </Link>

            <Link
              _hover={{ textDecor: "none" }}
              href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
              isExternal
            >
              <IconButton
                icon={<FaLinkedin />}
                bg="inherit"
                color="text.3"
                border="1px solid"
                borderColor="text.3"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                _hover={{
                  bg: "text.3",
                  color: "#fff",
                }}
                aria-label="linkedin"
              />
            </Link>
            <Link>
              <Tooltip
                label={hasCopied ? "Email Copied!" : "Copy Email"}
                closeOnClick={false}
                hasArrow
              >
                <IconButton
                  icon={<EmailIcon />}
                  bg="inherit"
                  color="text.3"
                  border="1px solid"
                  borderColor="text.3"
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  _hover={{
                    bg: "text.3",
                    color: "#fff",
                  }}
                  onClick={onCopy}
                  aria-label="email"
                />
              </Tooltip>
            </Link>
            <Link _hover={{ textDecor: "none" }} href="tel:+919799191449">
              <IconButton
                icon={<PhoneIcon />}
                bg="inherit"
                color="text.3"
                border="1px solid"
                borderColor="text.3"
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                _hover={{
                  bg: "text.3",
                  color: "#fff",
                }}
                aria-label="phone"
              />
            </Link>
          </CardFooter>
        </Card>
      </Flex>
    </Container>
  );
};

export default About;
