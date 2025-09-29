import React, { ReactElement } from "react";
import {
  Box,
  Card,
  CardBody,
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
import styles from "./about.module.css";
import SectionHeader from "../../Components/SectionHeader";
import { PROFILE_EMAIL } from "../../constants/constant";
import { ReactComponent as CodingIcon } from "../../images/coding.svg";
import { ReactComponent as DsaIcon } from "../../images/dsa.svg";
import { ReactComponent as ProjectIcon } from "../../images/project.svg";
import { ReactComponent as Github1Icon } from "../../images/github1.svg";

const About: React.FC = () => {
  const { hasCopied, onCopy } = useClipboard(PROFILE_EMAIL);

  const renderIconButton = (
    ariaLabel: string,
    icon: ReactElement,
    handleCopy?: () => void
  ) => {
    return (
      <IconButton
        aria-label={ariaLabel}
        bg="inherit"
        color="secondary"
        border="1px solid"
        borderColor="secondary"
        size={"lg"}
        fontWeight={"normal"}
        px={6}
        icon={icon as ReactElement}
        onClick={handleCopy}
        _hover={{
          bg: "secondary",
          color: "text-primary",
        }}
      />
    );
  };

  const renderAboutCard = () => {
    return (
      <Card
        className={styles.about}
        maxW="md"
        color={"text.primary"}
        data-aos="fade-up-left"
        border="1px solid var(--border-primary)"
      >
        <CardBody textAlign={"left"}>
          <Text>
            Analytical and detail-oriented aspiring Full Stack Developer, with a
            <span className={styles.degree}> B.tech degree</span> in Mechanical
            Engineering. Capable of writing production-ready code and building
            single page applications.
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
            {renderIconButton("GitHub Profile", <FaGithub />)}
          </Link>

          <Link
            _hover={{ textDecor: "none" }}
            href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
            isExternal
          >
            {renderIconButton("LinkedIn Profile", <FaLinkedin />)}
          </Link>
          <Link>
            <Tooltip
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
            >
              {renderIconButton("Copy Email", <EmailIcon />, onCopy)}
            </Tooltip>
          </Link>
          <Link _hover={{ textDecor: "none" }} href="tel:+919799191449">
            {renderIconButton("Phone Number", <PhoneIcon />)}
          </Link>
        </CardFooter>
      </Card>
    );
  };

  const workBox = (
    IconComponent: React.ElementType,
    title: string,
    number: string,
    stamp: string
  ) => {
    return (
      <Box className={styles.exp}>
        <Box w="50px" h="50px" m="0 auto" color="secondary">
          {React.createElement(IconComponent)}
        </Box>
        <Box fontWeight={"medium"}>
          <Text>{title}</Text>
          <Text>
            <span>{number}</span> {stamp}
          </Text>
        </Box>
      </Box>
    );
  };

  const renderExperienceCard = () => {
    return (
      <Stack spacing="1rem" data-aos="fade-up-right">
        <Heading lineHeight={1.2} fontWeight={600}>
          <Text
            color={"text.primary"}
            as={"span"}
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
          >
            FULL STACK
          </Text>
          <br />
          <Text
            as={"span"}
            color={"secondary"}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          >
            WEB DEVELOPER
          </Text>
        </Heading>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          gap="1rem"
          color={"text.primary"}
        >
          {workBox(CodingIcon, "Coding", "1400+", "Hours")}
          {workBox(DsaIcon, "DSA", "700+", "Question Solved")}
          {workBox(ProjectIcon, "Projects", "5+", "Completed")}
          {workBox(Github1Icon, "Github", "1000+", "Contributions")}
        </Grid>
      </Stack>
    );
  };

  return (
    <Box p="0px 10px 40px 10px" userSelect="none">
      <SectionHeader label="About" />
      <Flex
        direction={{ base: "column" as const, lg: "row" as const }}
        justifyContent={{
          base: "center" as const,
          lg: "space-between" as const,
        }}
        alignItems={{ base: "center" as const, lg: "flex-start" as const }}
        gap="2rem"
      >
        {renderExperienceCard()}
        {renderAboutCard()}
      </Flex>
    </Box>
  );
};

export default About;
