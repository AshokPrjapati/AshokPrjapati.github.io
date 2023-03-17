import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
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
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStacks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { hasCopied, onCopy } = useClipboard("ap271449@gmail.com");
  return (
    <Container maxW={"5xl"} align="center" p={"60px 0"}>
      <Heading
        w={"max-content"}
        m="auto"
        textAlign={"center"}
        p={"0 10px 10px 10px"}
        color={"text.1"}
        fontWeight={500}
        borderBottom="3px solid #e11d48"
        mb={"40px"}
      >
        About
      </Heading>
      <Card maxW="md" bg={"bg.2"} color={"text.1"} w="95%" m="auto">
        <CardHeader data-aos="fade-up-left">
          <Flex spacing="4">
            <Flex
              flex="1"
              gap="4"
              textAlign={"left"}
              alignItems="center"
              flexWrap="wrap"
            >
              <Avatar name="Ashok Kumar" src="./profile.png" />

              <Box>
                <Heading size="sm">Ashok Kumar</Heading>
                <Text>Full Stack Web Developer</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody textAlign={"left"} data-aos="fade-up-right">
          <Text>
            Analytical and detail-oriented aspiring Full Stack Developer, with a
            b.tech degree in Mechanical Engineering. Capable of writing
            production-ready code and building single page applications.
            Passionate about coding having 1200+ hrs of coding experience and
            solved 700+ DSA problems.
          </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="./images/MERN-Stacks.png"
          alt=""
          data-aos="fade-up-left"
        />

        <CardFooter
          data-aos="fade-up-right"
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
              bg={"bg.2"}
              icon={<FaGithub />}
              _hover={{ bg: "text.3" }}
            />
          </Link>

          <Link
            _hover={{ textDecor: "none" }}
            href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
            isExternal
          >
            <IconButton
              bg={"bg.2"}
              icon={<FaLinkedin />}
              _hover={{ bg: "text.3" }}
            />
          </Link>
          <Link>
            <Tooltip
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
              with={"33.3%"}
            >
              <IconButton
                bg={"bg.2"}
                icon={<EmailIcon />}
                _hover={{ bg: "text.3" }}
                onClick={onCopy}
              />
            </Tooltip>
          </Link>
          <Link _hover={{ textDecor: "none" }} href="tel:+919799191449">
            <IconButton
              bg={"bg.2"}
              icon={<PhoneIcon />}
              _hover={{ bg: "text.3" }}
            />
          </Link>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default TechStacks;
