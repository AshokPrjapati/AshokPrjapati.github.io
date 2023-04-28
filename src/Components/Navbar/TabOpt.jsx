import { Button, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "#home",
    text: "Home",
  },
  {
    path: "#about",
    text: "About",
  },
  {
    path: "#skills",
    text: "Skills",
  },
  {
    path: "#projects",
    text: "Project",
  },
  {
    path: "#gitState",
    text: "Git Stats",
  },

  {
    path: "#contact",
    text: "Contact",
  },
  {
    path: "/assets/Ashok-Kumar-Resume.pdf",
    text: "Resume",
  },
];

function TabOpt({ isOpen, toggle }) {
  const [active, setActive] = useState("#home");
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
        <Link
          key={i}
          href={link.path}
          isExternal={link.text === "Resume"}
          onClick={() => {
            setActive(link.path);
            if (link.text === "Resume") {
              const pdfUrl = "/assets/Ashok-Kumar-Resume.pdf";
              const downloadLink = document.createElement("a");
              downloadLink.href = pdfUrl;
              downloadLink.download = "Ashok-kumar-Resume.pdf";
              downloadLink.click();
            }
          }}
        >
          <Button
            w={{ base: "100%", md: "auto", lg: "auto" }}
            className={active === link.path ? styles.active : styles.default}
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
        </Link>
      ))}
    </Flex>
  );
}

export default TabOpt;
