import { Button, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-scroll"
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "home",
    text: "Home",
  },
  {
    path: "about",
    text: "About",
  },
  {
    path: "skills",
    text: "Skills",
  },
  {
    path: "projects",
    text: "Project",
  },
  {
    path: "gitState",
    text: "Git Stats",
  },

  {
    path: "contact",
    text: "Contact",
  },
]

function TabOpt({ isOpen, toggle }) {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap="2"
      dir="column"
      textAlign={"center"}
      p={"10px 15px"}
      width={"90%"}
      m={"auto"}
      borderRadius={"10px"}
    >
      {links.map((link, i) => (

        <Button as={Link}
          className={styles.default}
          activeClass={styles.active}
          to={link.path}
          spy={true}
          smooth={true}
          offset={0}
          duration={750}
          key={i}
          w={{ base: "100%", md: "auto", lg: "auto" }}
          colorScheme="none"
          _hover={{
            bg: "text.3",
            color: "text.1",
            shadow: "0px 0px 10px #e11d48",
          }}
          onClick={toggle}
          z-index={99}
          color="text.2"
        >
          {link.text}
        </Button>

      ))}

      <ChakraLink
        className={styles.default}
        activeClass={styles.active}
        href={"/assets/Ashok-Kumar-Resume.pdf"}
        isExternal={true}
        onClick={() => {
          const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
          const downloadLink = document.createElement("a");
          downloadLink.href = pdfUrl;
          downloadLink.download = "Ashok-kumar-Resume.pdf";
          downloadLink.click();
        }}
      >
        <Button
          w={{ base: "100%", md: "auto", lg: "auto" }}
          colorScheme="none"
          _hover={{
            bg: "text.3",
            color: "text.1",
            shadow: "0px 0px 10px #e11d48",
          }}
          onClick={toggle}
          z-index={99}
          color="text.2"
        >
          Resume
        </Button>
      </ChakraLink>
    </Flex >
  );
}

export default TabOpt;
